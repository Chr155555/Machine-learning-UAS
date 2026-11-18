'use client';

import React, { useState } from 'react';
import { BookOpen, Search, CheckCircle2, AlertCircle } from 'lucide-react';
import { DISEASE_CATALOG } from '@/lib/disease_data';

export function CatalogSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const diseasesList = Object.entries(DISEASE_CATALOG);

  const filtered = diseasesList.filter(([_, item]) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      item.name_id.toLowerCase().includes(q) ||
      item.name_en.toLowerCase().includes(q) ||
      item.plant.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });

  return (
    <section id="katalog" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" /> Basis Pengetahuan
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Katalog 28 Kelas Daun Tanaman
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Daftar lengkap komoditas pertanian dan penyakit tanaman yang dapat dideteksi oleh sistem PlantDoc AI.
          </p>

          {/* Search Box */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama tanaman atau penyakit (misal: Tomat, Apel)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
            />
          </div>
        </div>

        {/* Disease Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(([key, item]) => (
            <div
              key={key}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      item.is_healthy
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {item.is_healthy ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Sehat
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3 h-3 text-rose-600" /> Terinfeksi
                      </>
                    )}
                  </span>
                  <span className="text-[11px] text-slate-400 italic truncate max-w-[140px]">
                    {item.name_en}
                  </span>
                </div>

                <h4 className="font-bold text-slate-900 text-sm mb-1">{item.name_id}</h4>
                <div className="text-xs font-semibold text-emerald-700 mb-2">{item.plant}</div>
                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-600">Patogen:</span> {item.pathogen}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            Tidak ditemukan penyakit atau tanaman dengan kata kunci "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
}
