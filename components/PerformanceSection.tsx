'use client';

import React, { useState } from 'react';
import { BarChart3, TrendingUp, Grid3X3, Award } from 'lucide-react';

export function PerformanceSection() {
  const [activeTab, setActiveTab] = useState<'metrics' | 'learning' | 'confusion_hybrid' | 'confusion_eff'>('metrics');

  return (
    <section id="performa" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Hasil Evaluasi Dan Riset
          </h2>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Perbandingan Kinerja 3 Arsitektur Model
          </h2>
        </div>

        {/* 3 Model Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* GLCM + SVM */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden">
            <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
              Model 1 (Klasik)
            </span>
            <h4 className="text-base font-bold text-slate-800 mt-3">GLCM + SVM</h4>
            <p className="text-xs text-slate-500">Tekstur Spasial Co-occurrence Matrix</p>
            <div className="text-4xl font-black text-slate-700 mt-4">14.3%</div>
            <div className="text-xs text-slate-500 font-semibold mb-4">Akurasi Test</div>
            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 text-xs text-slate-600">
              <div>Precision: <strong>11.4%</strong></div>
              <div>F1-Score: <strong>12.2%</strong></div>
            </div>
          </div>

          {/* EfficientNet-B0 */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden">
            <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
              Model 2 (Deep Learning)
            </span>
            <h4 className="text-base font-bold text-slate-800 mt-3">EfficientNet-B0</h4>
            <p className="text-xs text-slate-500">Transfer Learning Pretrained ImageNet</p>
            <div className="text-4xl font-black text-slate-700 mt-4">63.5%</div>
            <div className="text-xs text-slate-500 font-semibold mb-4">Akurasi Tertinggi</div>
            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 text-xs text-slate-600">
              <div>Precision: <strong>64.7%</strong></div>
              <div>Recall: <strong>62.1%</strong></div>
            </div>
          </div>

          {/* Hybrid Fusion */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden">
            <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
              Model 3 (Hybrid Fusion)
            </span>
            <h4 className="text-base font-bold text-slate-800 mt-3">Model Kombinasi</h4>
            <p className="text-xs text-slate-500">GLCM (72D) + EfficientNet (1280D) + SVM</p>
            <div className="text-4xl font-black text-slate-700 mt-4">62.0%</div>
            <div className="text-xs text-slate-500 font-semibold mb-4">Macro F1 Tertinggi</div>
            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 text-xs text-slate-600">
              <div>Precision: <strong>68.8%</strong></div>
              <div>Akurasi: <strong>61.1%</strong></div>
            </div>
          </div>
        </div>

        {/* Tabbed Plot Viewer */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'metrics'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" /> Diagram Perbandingan Metrik
            </button>
            <button
              onClick={() => setActiveTab('learning')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'learning'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" /> Kurva Pembelajaran (12 Epoch)
            </button>
            <button
              onClick={() => setActiveTab('confusion_hybrid')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'confusion_hybrid'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Grid3X3 className="w-3.5 h-3.5" /> Matriks Konfusi (Model Hybrid)
            </button>
            <button
              onClick={() => setActiveTab('confusion_eff')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'confusion_eff'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Grid3X3 className="w-3.5 h-3.5" /> Matriks Konfusi (EfficientNet-B0)
            </button>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-center min-h-[400px]">
            {activeTab === 'metrics' && (
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/plots/comparison_metrics.png"
                  alt="Comparison Metrics"
                  className="max-h-[460px] mx-auto rounded-xl shadow-sm"
                />
                <p className="text-xs text-slate-500 mt-3">
                  Perbandingan metrik Accuracy, Precision Macro, Recall Macro, dan F1-Macro pada test set PlantDoc.
                </p>
              </div>
            )}
            {activeTab === 'learning' && (
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/plots/efficientnet_learning_curve.png"
                  alt="Learning Curve"
                  className="max-h-[460px] mx-auto rounded-xl shadow-sm"
                />
                <p className="text-xs text-slate-500 mt-3">
                  Grafik konvergensi Train Loss vs Validation Loss & Akurasi EfficientNet-B0 selama 12 epoch.
                </p>
              </div>
            )}
            {activeTab === 'confusion_hybrid' && (
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/plots/glcm_efficientnet_svm_confusion_matrix.png"
                  alt="Confusion Matrix Hybrid"
                  className="max-h-[500px] mx-auto rounded-xl shadow-sm"
                />
                <p className="text-xs text-slate-500 mt-3">
                  Matriks konfusi Model Kombinasi (GLCM + EfficientNet + SVM) pada 28 kelas daun.
                </p>
              </div>
            )}
            {activeTab === 'confusion_eff' && (
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/plots/efficientnet_confusion_matrix.png"
                  alt="Confusion Matrix EfficientNet"
                  className="max-h-[500px] mx-auto rounded-xl shadow-sm"
                />
                <p className="text-xs text-slate-500 mt-3">
                  Matriks konfusi model EfficientNet-B0 pada 28 kelas daun.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
