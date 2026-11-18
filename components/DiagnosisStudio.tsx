'use client';

import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles,
  Info,
  ShieldCheck,
  RotateCcw,
  Layers,
  ChevronRight,
  Stethoscope
} from 'lucide-react';

interface PredictionData {
  status: string;
  selected_model: string;
  model_name: string;
  inference_time_ms: number;
  prediction: {
    class_raw: string;
    name_id: string;
    name_en: string;
    plant: string;
    is_healthy: boolean;
    severity: string;
    pathogen: string;
    confidence: number;
    description: string;
    treatment: string[];
  };
  top_candidates: Array<{
    class: string;
    name_id: string;
    plant: string;
    is_healthy: boolean;
    probability: number;
    percentage: number;
  }>;
  comparison: {
    efficientnet?: { class: string; name_id: string; confidence?: number };
    hybrid?: { class: string; name_id: string };
    glcm_svm?: { class: string; name_id: string };
  };
}

const SAMPLE_PRESETS = [
  { id: 'sample_apple_healthy.jpg', label: 'Apel Sehat', plant: 'Apel', image: '/samples/sample_apple_healthy.jpg' },
  { id: 'sample_apple_scab.jpg', label: 'Keropeng Apel', plant: 'Apel', image: '/samples/sample_apple_scab.jpg' },
  { id: 'sample_corn_rust.jpg', label: 'Karat Jagung', plant: 'Jagung', image: '/samples/sample_corn_rust.jpg' },
  { id: 'sample_potato_blight.jpg', label: 'Hawar Kentang', plant: 'Kentang', image: '/samples/sample_potato_blight.jpg' },
  { id: 'sample_tomato_bacterial.jpg', label: 'Bercak Tomat', plant: 'Tomat', image: '/samples/sample_tomato_bacterial.jpg' },
  { id: 'sample_grape_blackrot.jpg', label: 'Busuk Anggur', plant: 'Anggur', image: '/samples/sample_grape_blackrot.jpg' },
];

export function DiagnosisStudio() {
  const [selectedModel, setSelectedModel] = useState<string>('efficientnet');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedSample, setSelectedSample] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<PredictionData | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setSelectedSample(null);
      setPreviewUrl(URL.createObjectURL(file));
      setErrorMsg(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      setSelectedSample(null);
      setPreviewUrl(URL.createObjectURL(file));
      setErrorMsg(null);
    }
  };

  const handleSelectSample = (sampleId: string, imgPath: string) => {
    setSelectedSample(sampleId);
    setSelectedFile(null);
    setPreviewUrl(imgPath);
    setErrorMsg(null);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setSelectedSample(null);
    setPreviewUrl(null);
    setResult(null);
    setErrorMsg(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleAnalyze = async () => {
    if (!selectedFile && !selectedSample) {
      setErrorMsg('Silakan pilih salah satu sampel daun atau unggah gambar terlebih dahulu.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const formData = new FormData();
      formData.append('model', selectedModel);

      if (selectedFile) {
        formData.append('image', selectedFile);
      } else if (selectedSample) {
        formData.append('sample_name', selectedSample);
      }

      const res = await fetch('/api/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.status === 'success') {
        setResult(data);
      } else {
        setErrorMsg(data.message || 'Gagal memproses inferensi.');
      }
    } catch (err: any) {
      setErrorMsg('Terjadi kesalahan jaringan saat menghubungkan ke inference engine.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="deteksi" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Stethoscope className="w-3.5 h-3.5" /> Studio Diagnosis Daun
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Uji Citra Daun dengan Multi-Algoritma
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Pilih model AI, unggah foto daun atau klik sampel cepat di bawah, lalu dapatkan hasil diagnosis klinis dan rekomendasi obat pertanian secara otomatis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* PANEL KIRI: INPUT & SETTINGS */}
          <div className="lg:col-span-5 space-y-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-200/80">
            {/* 1. Model Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                1. Pilih Arsitektur Model:
              </label>
              <div className="space-y-2">
                {/* EfficientNet */}
                <div
                  onClick={() => setSelectedModel('efficientnet')}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedModel === 'efficientnet'
                      ? 'bg-emerald-50/70 border-emerald-500 shadow-sm shadow-emerald-500/10'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={selectedModel === 'efficientnet'}
                      onChange={() => setSelectedModel('efficientnet')}
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <div>
                      <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                        EfficientNet-B0
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                          Akurasi 63.5%
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">Deep transfer learning ImageNet</p>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                </div>

                {/* Hybrid Fusion */}
                <div
                  onClick={() => setSelectedModel('hybrid')}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedModel === 'hybrid'
                      ? 'bg-emerald-50/70 border-emerald-500 shadow-sm shadow-emerald-500/10'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={selectedModel === 'hybrid'}
                      onChange={() => setSelectedModel('hybrid')}
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <div>
                      <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                        Model Kombinasi (Hybrid)
                        <span className="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded-full">
                          F1 62.0%
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">GLCM Tekstur (72D) + EfficientNet (1280D) + SVM</p>
                    </div>
                  </div>
                  <Layers className="w-4 h-4 text-teal-600" />
                </div>

                {/* GLCM + SVM */}
                <div
                  onClick={() => setSelectedModel('glcm')}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedModel === 'glcm'
                      ? 'bg-emerald-50/70 border-emerald-500 shadow-sm shadow-emerald-500/10'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={selectedModel === 'glcm'}
                      onChange={() => setSelectedModel('glcm')}
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <div>
                      <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                        GLCM + SVM
                        <span className="text-[10px] bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded-full">
                          Klasik ML
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">Gray-Level Co-occurrence Matrix + RBF SVM</p>
                    </div>
                  </div>
                  <Clock className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>

            {/* 2. Upload Area */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                2. Unggah Foto Daun:
              </label>
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-200 hover:border-emerald-400 rounded-2xl p-6 text-center cursor-pointer bg-slate-50 hover:bg-emerald-50/30 transition-all group"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {previewUrl ? (
                  <div className="space-y-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={previewUrl}
                      alt="Preview Daun"
                      className="max-h-48 mx-auto rounded-xl shadow-md object-cover"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReset();
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 px-3 py-1.5 rounded-full"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Ganti Gambar
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <UploadCloud className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-bold text-slate-800">
                      Tarik & Letakkan Foto Daun di Sini
                    </div>
                    <p className="text-xs text-slate-500">atau klik untuk memilih dari komputer (JPG, PNG)</p>
                  </div>
                )}
              </div>
            </div>

            {/* 3. Preset Quick Samples */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Atau Coba Sampel Siap Uji:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {SAMPLE_PRESETS.map((sample) => (
                  <button
                    key={sample.id}
                    type="button"
                    onClick={() => handleSelectSample(sample.id, sample.image)}
                    className={`p-2 rounded-xl border text-left flex items-center gap-2 transition-all ${
                      selectedSample === sample.id
                        ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={sample.image}
                      alt={sample.label}
                      className="w-8 h-8 rounded-lg object-cover shrink-0"
                    />
                    <div className="overflow-hidden">
                      <div className="text-xs font-bold text-slate-800 truncate">{sample.label}</div>
                      <div className="text-[10px] text-slate-500 truncate">{sample.plant}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Action Button */}
            <button
              type="button"
              onClick={handleAnalyze}
              disabled={loading || (!selectedFile && !selectedSample)}
              className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white hover:from-emerald-700 hover:to-teal-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-emerald-700/20 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sedang Mendiagnosis Citra...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#a3e635]" />
                  <span>Analisis & Diagnosis Sekarang</span>
                </>
              )}
            </button>
          </div>

          {/* PANEL KANAN: HASIL DIAGNOSIS */}
          <div className="lg:col-span-7">
            {!result ? (
              <div className="bg-white p-12 rounded-3xl border border-slate-200/80 shadow-sm text-center flex flex-col items-center justify-center min-h-[460px]">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Hasil Diagnosis Belum Tersedia</h3>
                <p className="text-slate-500 text-xs sm:text-sm max-w-sm mt-1">
                  Pilih salah satu sampel daun atau unggah gambar di panel kiri, lalu klik <strong>"Analisis & Diagnosis Sekarang"</strong>.
                </p>
              </div>
            ) : (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                {/* Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold ${
                        result.prediction.is_healthy
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {result.prediction.is_healthy ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          Tanaman Sehat (Healthy)
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-4 h-4 text-rose-600" />
                          Terindikasi Penyakit
                        </>
                      )}
                    </span>
                    <span className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 font-semibold border border-slate-200">
                      Keparahan: {result.prediction.severity}
                    </span>
                  </div>

                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Waktu Inferensi: <span className="font-bold text-slate-700">{result.inference_time_ms} ms</span>
                  </div>
                </div>

                {/* Primary Disease Title */}
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {result.prediction.name_id}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-500 font-medium">
                    <span className="text-emerald-700 font-bold">{result.prediction.plant}</span>
                    <span>•</span>
                    <span className="italic">{result.prediction.name_en}</span>
                    <span>•</span>
                    <span>{result.prediction.pathogen}</span>
                  </div>
                </div>

                {/* Confidence Bar */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span>Tingkat Keyakinan ({result.model_name}):</span>
                    <span className="text-base text-emerald-700 font-black">
                      {result.prediction.confidence}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        result.prediction.confidence > 75
                          ? 'bg-emerald-500'
                          : result.prediction.confidence > 50
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                      style={{ width: `${Math.min(result.prediction.confidence, 100)}%` }}
                    />
                  </div>
                </div>

                {/* 3-Model Consensus Comparison */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Konsensus 3 Model pada Gambar Ini:
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">1. EfficientNet-B0</div>
                      <div className="font-bold text-slate-800 truncate mt-0.5">
                        {result.comparison?.efficientnet?.name_id || '--'}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-[10px] text-teal-600 font-bold uppercase">2. Model Hybrid</div>
                      <div className="font-bold text-slate-800 truncate mt-0.5">
                        {result.comparison?.hybrid?.name_id || '--'}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">3. GLCM + SVM</div>
                      <div className="font-bold text-slate-800 truncate mt-0.5">
                        {result.comparison?.glcm_svm?.name_id || '--'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top 5 Candidates */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Peringkat 5 Diagnosa Teratas:
                  </label>
                  <div className="space-y-2">
                    {result.top_candidates.map((cand, idx) => (
                      <div key={cand.class} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-slate-800 flex items-center gap-1.5">
                            <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[10px]">
                              {idx + 1}
                            </span>
                            {cand.name_id}
                            <span className="text-slate-400 font-normal">({cand.plant})</span>
                          </span>
                          <span className="font-extrabold text-slate-900">{cand.percentage}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              cand.is_healthy ? 'bg-emerald-500' : 'bg-teal-600'
                            }`}
                            style={{ width: `${Math.max(cand.percentage, 2)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Symptoms and Treatments */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-1.5 text-xs">
                    <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                      <Info className="w-4 h-4 text-emerald-600" />
                      Gejala Klinis & Karakteristik:
                    </div>
                    <p className="text-emerald-800/90 leading-relaxed">
                      {result.prediction.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-2 text-xs">
                    <div className="font-bold text-teal-900 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-teal-600" />
                      Rekomendasi Pengendalian & Solusi Agroteknis:
                    </div>
                    <ul className="space-y-1.5 text-teal-800/90 pl-1">
                      {result.prediction.treatment.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
