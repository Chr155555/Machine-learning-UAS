import warnings
warnings.filterwarnings('ignore')
import sys
import os
import json
import time
from pathlib import Path
from PIL import Image
import numpy as np
import torch
import torchvision.transforms as transforms
from torchvision.models import efficientnet_b0
import joblib
from skimage.color import rgb2gray
from skimage.feature import graycomatrix, graycoprops

# Setup path robustly
CURRENT_DIR = Path(__file__).resolve().parent
CANDIDATE_OUTPUT_DIRS = [
    CURRENT_DIR.parent.parent / 'outputs',
    CURRENT_DIR.parent / 'outputs',
    Path(r"C:\SEMESTER 3\MACHINE LEARNING\UAS\outputs"),
    Path(r"C:\SEMESTER 3\MACHINE LEARNING\UAS\plantdoc-nextjs\outputs")
]

OUTPUTS_DIR = CANDIDATE_OUTPUT_DIRS[0]
for d in CANDIDATE_OUTPUT_DIRS:
    if (d / 'efficientnet_b0_best.pth').exists():
        OUTPUTS_DIR = d
        break

sys.path.insert(0, str(CURRENT_DIR))
try:
    from disease_info import DISEASE_DB
except ImportError:
    DISEASE_DB = {}

CKPT_PATH = OUTPUTS_DIR / 'efficientnet_b0_best.pth'
SVM_HYBRID_PATH = OUTPUTS_DIR / 'glcm_efficientnet_svm_svm.joblib'
SVM_GLCM_PATH = OUTPUTS_DIR / 'glcm_svm_svm.joblib'

IMAGE_SIZE = 224
GLCM_PROPERTIES = ['contrast', 'dissimilarity', 'homogeneity', 'energy', 'correlation', 'ASM']
GLCM_DISTANCES = [1, 2, 4]
GLCM_ANGLES = [0, np.pi/4, np.pi/2, 3*np.pi/4]

eval_transform = transforms.Compose([
    transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225]),
])


def get_disease_detail(class_name: str) -> dict:
    if class_name in DISEASE_DB:
        info = DISEASE_DB[class_name]
        return {
            'class_raw': class_name,
            'name_id': info['name_id'],
            'name_en': info['name_en'],
            'plant': info['plant'],
            'is_healthy': info['is_healthy'],
            'severity': info['severity'],
            'pathogen': info['pathogen'],
            'description': info['description'],
            'treatment': info['treatment']
        }
    clean_name = class_name.replace('_', ' ')
    is_healthy = 'healthy' in class_name.lower() or ('leaf' in class_name.lower() and 'scab' not in class_name.lower() and 'blight' not in class_name.lower())
    return {
        'class_raw': class_name,
        'name_id': clean_name,
        'name_en': clean_name,
        'plant': 'Tanaman Pertanian',
        'is_healthy': is_healthy,
        'severity': 'Aman' if is_healthy else 'Sedang',
        'pathogen': 'N/A',
        'description': f'Terdeteksi kondisi {clean_name}.',
        'treatment': ['Lakukan pemantauan rutin dan sanitasi lingkungan kebun.']
    }


def extract_glcm(image: Image.Image) -> np.ndarray:
    resized = image.convert('RGB').resize((IMAGE_SIZE, IMAGE_SIZE))
    rgb = np.asarray(resized)
    gray = rgb2gray(rgb)
    quantized = np.minimum((gray * 16).astype(np.uint8), 15)
    matrix = graycomatrix(quantized, distances=GLCM_DISTANCES, angles=GLCM_ANGLES,
                          levels=16, symmetric=True, normed=True)
    feature_values = []
    for prop in GLCM_PROPERTIES:
        feature_values.extend(graycoprops(matrix, prop).ravel().tolist())
    return np.asarray(feature_values, dtype=np.float32)


def main():
    if len(sys.argv) < 2:
        print(json.dumps({'status': 'error', 'message': 'Missing image path parameter'}))
        sys.exit(1)

    image_path = sys.argv[1]
    selected_model = sys.argv[2] if len(sys.argv) > 2 else 'hybrid'

    if not os.path.exists(image_path):
        print(json.dumps({'status': 'error', 'message': f'Image file not found: {image_path}'}))
        sys.exit(1)

    t0 = time.perf_counter()

    if not CKPT_PATH.exists():
        print(json.dumps({'status': 'error', 'message': f'Checkpoint file not found: {CKPT_PATH}'}))
        sys.exit(1)

    # 1. Load EfficientNet-B0 Model
    ckpt = torch.load(CKPT_PATH, map_location='cpu')
    classes = ckpt['classes']
    model = efficientnet_b0(weights=None)
    model.classifier[1] = torch.nn.Linear(model.classifier[1].in_features, len(classes))
    model.load_state_dict(ckpt['model_state_dict'])
    model.eval()

    # 2. Open image & transform
    image = Image.open(image_path).convert('RGB')
    tensor_img = eval_transform(image).unsqueeze(0)

    # 3. EfficientNet Inference
    with torch.no_grad():
        logits = model(tensor_img)
        probs = torch.softmax(logits, dim=1)[0].numpy()

    top_indices = np.argsort(probs)[::-1][:5]
    top_candidates = []
    for idx in top_indices:
        cls_name = classes[idx]
        detail = get_disease_detail(cls_name)
        top_candidates.append({
            'class': cls_name,
            'name_id': detail['name_id'],
            'plant': detail['plant'],
            'is_healthy': detail['is_healthy'],
            'probability': float(probs[idx]),
            'percentage': round(float(probs[idx]) * 100, 2)
        })

    eff_predicted_idx = int(top_indices[0])
    eff_class = classes[eff_predicted_idx]
    eff_prob = float(probs[eff_predicted_idx])

    # 4. GLCM & Hybrid SVM Inference
    hybrid_class = eff_class
    glcm_svm_class = eff_class
    try:
        glcm_feat = extract_glcm(image).reshape(1, -1)
        if SVM_GLCM_PATH.exists():
            svm_glcm = joblib.load(SVM_GLCM_PATH)
            glcm_svm_class = classes[svm_glcm.predict(glcm_feat)[0]]

        if SVM_HYBRID_PATH.exists():
            with torch.no_grad():
                deep_emb = model.features(tensor_img)
                deep_emb = model.avgpool(deep_emb)
                deep_emb = torch.flatten(deep_emb, 1).cpu().numpy()
            hybrid_feat = np.concatenate([glcm_feat, deep_emb], axis=1)
            svm_hybrid = joblib.load(SVM_HYBRID_PATH)
            hybrid_class = classes[svm_hybrid.predict(hybrid_feat)[0]]
    except Exception as e:
        pass

    # 5. Determine Active Model Prediction
    if selected_model == 'hybrid':
        active_class = hybrid_class
        confidence = eff_prob
        active_model_name = 'Model Kombinasi (GLCM + EfficientNet-B0 + SVM)'
    elif selected_model == 'glcm' or selected_model == 'glcm_svm':
        active_class = glcm_svm_class
        confidence = 0.50
        active_model_name = 'GLCM + SVM (Klasik Machine Learning)'
    else:
        active_class = eff_class
        confidence = eff_prob
        active_model_name = 'EfficientNet-B0 (Deep Transfer Learning)'

    elapsed = time.perf_counter() - t0
    detail = get_disease_detail(active_class)

    result = {
        'status': 'success',
        'selected_model': selected_model,
        'model_name': active_model_name,
        'inference_time_ms': round(elapsed * 1000, 1),
        'prediction': {
            'class_raw': active_class,
            'name_id': detail['name_id'],
            'name_en': detail['name_en'],
            'plant': detail['plant'],
            'is_healthy': detail['is_healthy'],
            'severity': detail['severity'],
            'pathogen': detail['pathogen'],
            'confidence': round(confidence * 100, 2),
            'description': detail['description'],
            'treatment': detail['treatment']
        },
        'top_candidates': top_candidates,
        'comparison': {
            'efficientnet': {
                'class': eff_class,
                'name_id': get_disease_detail(eff_class)['name_id'],
                'confidence': round(eff_prob * 100, 2)
            },
            'hybrid': {
                'class': hybrid_class,
                'name_id': get_disease_detail(hybrid_class)['name_id'],
            },
            'glcm_svm': {
                'class': glcm_svm_class,
                'name_id': get_disease_detail(glcm_svm_class)['name_id']
            }
        }
    }

    print(json.dumps(result))


if __name__ == '__main__':
    main()
