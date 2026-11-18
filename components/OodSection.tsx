'use client';

import React from 'react';
import { HelpCircle, AlertCircle, Sparkles, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';

export function OodSection() {
  return (
    <section id="ood-study" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" /> Studi Kasus Riset
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Investigasi Out-of-Distribution (OOD): Kasus Daun Mangga
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Mengapa citra daun mangga yang diuji terprediksi sebagai <strong>&ldquo;Daun Persik Sehat&rdquo;</strong> dengan keyakinan <strong>97.78%</strong>?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-amber-50/70 via-slate-50 to-emerald-50/50 p-6 sm:p-8 rounded-3xl border border-amber-200/70 shadow-sm">
          {/* Left Column: Visual Explanation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-2xl bg-white border border-amber-200/80 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase">Input Pengujian</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700">Di Luar 28 Kelas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 font-black text-xl">
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
                <ArrowRight className="w-5 h-5 text-amber-600 rotate-90 lg:rotate-0" />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-emerald-200/80 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase">Hasil Prediksi Model</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Confidence: 97.78%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-black text-xl">
                  🍑
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Daun Persik Sehat (Peach leaf)</h4>
                  <p className="text-xs text-slate-500">Kelas terdaftar resmi di dataset PlantDoc (Kelas #11)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Scientific Insights */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                Dua Penyebab Utama Secara Ilmiah & Botani
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Fenomena ini menjadi salah satu temuan penting yang dianalisis dalam paper akademik UAS. Berikut adalah penjelasan mekanisme yang terjadi di balik layar model AI:
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-extrabold flex items-center justify-center">1</span>
                  Asumsi Dunia Tertutup (Closed-World Assumption) & Softmax
                </h4>
                <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                  Dalam arsitektur klasifikasi standar, fungsi <code>Softmax</code> mewajibkan total probabilitas 28 kelas berjumlah 100%. Model tidak memiliki opsi &ldquo;Tidak Tahu / OOD&rdquo;, sehingga terpaksa memproyeksikan fitur gambar ke kelas terdekat dalam ruang fitur vektor.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold flex items-center justify-center">2</span>
                  Kemiripan Morfologi Botani Lanset (Lanceolate)
                </h4>
                <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                  Secara botani, daun mangga dan daun persik memiliki bentuk bangun daun yang sangat identik: berbentuk <strong>lanset (lanceolate)</strong> lonjong memanjang, tepi rata (entire), ujung meruncing (acuminate), dan pertulangan menyirip. Filter konvolusional CNN menangkap kontur geometris ini sehingga mengarah kuat ke kelas persik.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-900/5 border border-emerald-800/10 text-xs text-emerald-950 flex items-center justify-between">
              <span className="font-medium">
                Solusi ke depan: Integrasi modul <strong>Open-Set Recognition (OSR)</strong> dan threshold ketidakpastian prediktif.
              </span>
              <a
                href="#katalog"
                className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 shrink-0 ml-3"
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
