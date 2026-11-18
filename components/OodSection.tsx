'use client';

import React from 'react';
import { AlertCircle, ArrowRight, ArrowDown } from 'lucide-react';

export function OodSection() {
  return (
    <section id="ood-study" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Batasan Studi Kasus & Cakupan Dataset
          </h2>
        </div>

        {/* Clean Neutral Container (No Yellow/Amber Background) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          {/* Left Column: Visual Explanation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase">Input Pengujian</span>
                <span className="text-xs font-bold text-slate-900">Di Luar 28 Kelas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 font-black text-xl">
                  🥭
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Daun Mangga (Mangifera indica)</h4>
                  <p className="text-xs text-slate-500">Bukan merupakan anggota dataset latih PlantDoc</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center text-slate-400">
              <div className="p-2 rounded-full bg-white border border-slate-200 shadow-xs">
                <ArrowDown className="w-5 h-5 text-slate-500" />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase">Hasil Prediksi Model</span>
                <span className="text-xs font-bold text-slate-700">Confidence: 97.78%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 font-black text-xl">
                  🍑
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Daun Persik Sehat (Peach leaf)</h4>
                  <p className="text-xs text-slate-500">Kelas terdaftar resmi di dataset PlantDoc (Kelas #11)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 1 Single Box of 13 Plants */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-slate-700" />
                Cakupan 13 Tanaman pada Dataset (28 Kelas)
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Model AI hanya dilatih pada 13 jenis tanaman berikut. Jika diuji dengan daun di luar daftar ini sistem akan mengecek terhadap daun yang memiliki kemiripan:
              </p>
            </div>

            {/* 1 Single Clean Box */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                Daftar Tanaman yang Digunakan untuk Training:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-700 pt-1">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Daun Apel</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Daun Paprika</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Daun Bluberi</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Daun Ceri</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Daun Jagung</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Daun Persik</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Daun Kentang</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Daun Rasberi</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Daun Kedelai</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Daun Labu / Waluh</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Daun Stroberi</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Daun Tomat</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Daun Anggur</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
              <span className="font-medium">
                Daun di luar 13 tanaman ini otomatis tergolong <strong>Out-of-Distribution (OOD)</strong>.
              </span>
              <a
                href="#katalog"
                className="font-bold text-slate-800 hover:text-slate-900 flex items-center gap-1 shrink-0 ml-3 underline"
              >
                Lihat 28 Kelas <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
