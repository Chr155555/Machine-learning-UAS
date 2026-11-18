'use client';

import React, { useState } from 'react';
import { BookOpen, Search, CheckCircle2, AlertCircle } from 'lucide-react';
import { DISEASE_CATALOG } from '@/lib/disease_data';

export function CatalogSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'healthy' | 'infected'>('all');

  const diseasesList = Object.entries(DISEASE_CATALOG);

  const filtered = diseasesList.filter(([_, item]) => {
    // 1. Status Filter
    if (statusFilter === 'healthy' && !item.is_healthy) return false;
    if (statusFilter === 'infected' && item.is_healthy) return false;

    // 2. Search Query
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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Katalog 28 Kelas Daun Tanaman Yang dimiliki PlantDoc
          </h2>

          {/* Search Box & Status Filter Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama tanaman atau penyakit (misal: Tomat, Apel)..."
                className="w-full pl-11 pr-4 py-2.5 rounded-full border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              />
            </div>

            {/* Filter Toggle: Semua, Daun Sehat, Terinfeksi */}
            <div className="inline-flex items-center p-1 rounded-full bg-slate-200/80 border border-slate-200 text-xs shrink-0">
              <button
                type="button"
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all ${
                  statusFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semua (28)
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('healthy')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all flex items-center gap-1.5 ${
                  statusFilter === 'healthy'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-emerald-700'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Daun Sehat (10)</span>
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('infected')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all flex items-center gap-1.5 ${
                  statusFilter === 'infected'
                    ? 'bg-white text-rose-800 shadow-xs'
                    : 'text-slate-600 hover:text-rose-700'
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                <span>Terinfeksi (18)</span>
              </button>
            </div>
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
                <div className="mb-2.5">
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
                </div>

                <h4 className="font-bold text-slate-900 text-sm mb-1 leading-snug">
                  {item.name_id}{' '}
                  <span className="text-xs font-normal text-slate-400 italic">
                    ({item.name_en})
                  </span>
                </h4>
                <div className="text-xs font-semibold text-emerald-700 mb-2">{item.plant}</div>
                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            Tidak ditemukan penyakit atau tanaman dengan filter yang dipilih.
          </div>
        )}
      </div>
    </section>
  );
}
