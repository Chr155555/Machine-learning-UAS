'use client';

import React from 'react';
import Link from 'next/link';
import { Leaf, Sparkles, Activity, BarChart3, BookOpen } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0a3622]/90 backdrop-blur-md border-b border-emerald-800/40 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-400 flex items-center justify-center text-[#0a3622] font-bold shadow-md shadow-emerald-500/20">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight">
                  PlantDoc<span className="text-[#a3e635]">AI</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider bg-emerald-800/60 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-700/50">
                  Node.js + ML
                </span>
              </div>
              <p className="text-[11px] text-emerald-200/70 hidden sm:block -mt-0.5">
                Sistem Diagnosis Penyakit Daun Berbasis AI
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#beranda" className="text-emerald-100/90 hover:text-[#a3e635] transition-colors flex items-center gap-1.5">
              Beranda
            </a>
            <a href="#deteksi" className="text-emerald-100/90 hover:text-[#a3e635] transition-colors flex items-center gap-1.5">
              <Activity className="w-4 h-4" /> Deteksi Citra
            </a>
            <a href="#performa" className="text-emerald-100/90 hover:text-[#a3e635] transition-colors flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4" /> Performa Model
            </a>
            <a href="#ood-study" className="text-emerald-100/90 hover:text-[#a3e635] transition-colors flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Kasus OOD
            </a>
            <a href="#katalog" className="text-emerald-100/90 hover:text-[#a3e635] transition-colors flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> 28 Kelas Daun
            </a>
          </div>

          {/* Action Button */}
          <div>
            <a
              href="#deteksi"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-500 to-[#a3e635] text-[#0a3622] hover:from-emerald-400 hover:to-[#bef264] transition-all shadow-sm hover:shadow-emerald-500/20 hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Uji Gambar</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
