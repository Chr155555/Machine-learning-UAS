'use client';

import React from 'react';
import { UploadCloud, BarChart2, ShieldCheck, Cpu } from 'lucide-react';

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-br from-[#072417] via-[#0a3622] to-[#124b31] text-white pt-12 pb-16 lg:py-20 border-b border-emerald-900/50">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 rounded-full bg-[#a3e635]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/60 border border-emerald-700/60 text-xs font-semibold text-emerald-200">
              <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-ping" />
              Projek Akhir UAS Machine Learning & Front End 2025/2026
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Sistem Cerdas Klasifikasi Penyakit Daun Tanaman Berbasis{' '}
              <span className="bg-gradient-to-r from-[#a3e635] via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Multi-Modal AI & Node.js
              </span>
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl leading-relaxed">
              Mengintegrasikan <strong>Deep Transfer Learning (EfficientNet-B0)</strong>, fitur tekstur spasial <strong>GLCM</strong>, dan <strong>Support Vector Machine (SVM)</strong> untuk mendiagnosis 28 jenis penyakit daun secara presisi.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#deteksi"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm bg-[#a3e635] text-[#0a3622] hover:bg-[#bef264] transition-all shadow-lg shadow-[#a3e635]/20 hover:-translate-y-0.5"
              >
                <UploadCloud className="w-4 h-4" />
                Mulai Uji Gambar Daun
              </a>
              <a
                href="#performa"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
              >
                <BarChart2 className="w-4 h-4" />
                Lihat Evaluasi Riset
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-emerald-800/60 max-w-lg">
              <div className="p-3 rounded-2xl bg-emerald-900/40 border border-emerald-800/40">
                <div className="text-2xl font-black text-[#a3e635]">28</div>
                <div className="text-xs text-emerald-200/70 font-medium">Kelas Penyakit</div>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-900/40 border border-emerald-800/40">
                <div className="text-2xl font-black text-[#a3e635]">2.922</div>
                <div className="text-xs text-emerald-200/70 font-medium">Citra Terlatih</div>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-900/40 border border-emerald-800/40">
                <div className="text-2xl font-black text-[#a3e635]">62.0%</div>
                <div className="text-xs text-emerald-200/70 font-medium">F1-Score Hybrid</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card Preview */}
          <div className="lg:col-span-5">
            <div className="p-5 rounded-3xl bg-white/95 text-slate-800 shadow-2xl border border-white/20 backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Live Model Consensus
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-amber-100 text-amber-800 border border-amber-200">
                  Keparahan: Tinggi
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/samples/sample_tomato_bacterial.jpg"
                  alt="Sample Daun Tomat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm text-[11px] font-semibold text-white">
                  Tomato Bacterial Spot
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-slate-900 text-base">Bercak Bakteri Daun Tomat</h4>
                  <span className="text-xs font-extrabold text-emerald-700">98.4% Confidence</span>
                </div>
                <p className="text-xs text-slate-500 mb-2">Tomat (Solanum lycopersicum) • Bakteri Xanthomonas</p>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-[#a3e635] rounded-full w-[98.4%]" />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Rekomendasi: Semprotkan bakterisida berbasis tembaga dan hindari penyiraman tajuk dari atas.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
