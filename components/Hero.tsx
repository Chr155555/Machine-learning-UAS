'use client';

import React from 'react';
import { UploadCloud, BarChart2 } from 'lucide-react';

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-br from-[#072417] via-[#0a3622] to-[#124b31] text-white pt-12 pb-16 lg:py-20 border-b border-emerald-900/50">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 rounded-full bg-[#a3e635]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Methods */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/60 border border-emerald-700/60 text-xs font-semibold text-emerald-200">
              Project UAS machine learning - Kelompok C12
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Sistem Cerdas Klasifikasi Penyakit Daun Tanaman Berbasis{' '}
              <span className="bg-gradient-to-r from-[#a3e635] via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Fitur GLCM, EfficientNet-B0 & SVM
              </span>
            </h1>

            <div className="space-y-1.5 text-sm sm:text-base text-emerald-100/80 max-w-2xl">
              <p className="text-emerald-200 font-semibold">Metode yang di gunakan:</p>
              <p>GLCM (Gray-Level Co-occurrence Matrix) — Machine Learning (Ekstraksi Fitur Tekstur)</p>
              <p>EfficientNet-B0 — Deep Learning (CNN)</p>
              <p>SVM (Support Vector Machine) — Machine Learning (Klasifikasi)</p>
            </div>
          </div>

          {/* Right Column: Action Buttons & Stats */}
          <div className="lg:col-span-5 space-y-5 lg:pl-2">
            {/* Action Bar: Mulai Uji Gambar Daun & Lihat Evaluasi Riset */}
            <div className="flex flex-wrap items-center gap-2.5 p-2 rounded-2xl bg-emerald-950/80 border border-emerald-700/60 backdrop-blur-md shadow-xl w-fit">
              <a
                href="#deteksi"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#a3e635] text-[#0a3622] hover:bg-[#bef264] transition-all shadow-md shadow-[#a3e635]/20 hover:-translate-y-0.5"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Mulai Uji Gambar Daun</span>
              </a>

              <a
                href="#performa"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-emerald-100/90 hover:text-white hover:bg-white/10 transition-all border border-white/10"
              >
                <BarChart2 className="w-4 h-4" />
                <span>Lihat Evaluasi Riset</span>
              </a>
            </div>

            {/* Quick Stats Grid: ditaruh tepat di bawah tombol */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-emerald-900/40 border border-emerald-800/40 hover:border-emerald-700/60 transition-colors text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#a3e635]">28</div>
                <div className="text-[11px] sm:text-xs text-emerald-200/70 font-medium">Kelas Penyakit</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-emerald-900/40 border border-emerald-800/40 hover:border-emerald-700/60 transition-colors text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#a3e635]">2.922</div>
                <div className="text-[11px] sm:text-xs text-emerald-200/70 font-medium">Citra Terlatih</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-emerald-900/40 border border-emerald-800/40 hover:border-emerald-700/60 transition-colors text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#a3e635]">62.0%</div>
                <div className="text-[11px] sm:text-xs text-emerald-200/70 font-medium">F1-Score Hybrid</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
