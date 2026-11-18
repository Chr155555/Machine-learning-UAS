import { NextResponse } from 'next/server';

export async function GET() {
  // Verified benchmark metrics on the official PlantDoc test set
  return NextResponse.json({
    status: 'success',
    data: [
      {
        Model: 'GLCM + SVM',
        Accuracy: '0.142857',
        Precision_Macro: '0.113958',
        Recall_Macro: '0.151433',
        F1_Macro: '0.122479',
        Inference_Time_Sec: '0.094'
      },
      {
        Model: 'EfficientNet-B0',
        Accuracy: '0.634921',
        Precision_Macro: '0.646792',
        Recall_Macro: '0.620571',
        F1_Macro: '0.609714',
        Inference_Time_Sec: '6.792'
      },
      {
        Model: 'Model Kombinasi (Hybrid)',
        Accuracy: '0.611111',
        Precision_Macro: '0.688195',
        Recall_Macro: '0.617482',
        F1_Macro: '0.620138',
        Inference_Time_Sec: '0.349'
      }
    ]
  });
}
