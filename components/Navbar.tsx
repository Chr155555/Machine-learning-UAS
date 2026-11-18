'use client';

import React from 'react';
import { Leaf } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0a3622]/90 backdrop-blur-md border-b border-emerald-800/40 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo & Name: PlantDoc (without AI) */}
          <a href="#beranda" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-[#a3e635] flex items-center justify-center text-[#0a3622] font-bold shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5 text-[#0a3622]" />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-white">
              PlantDoc
            </span>
          </a>

          {/* Nav Links */}
          <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium overflow-x-auto py-1 scrollbar-none">
            <a href="#beranda" className="text-emerald-100/90 hover:text-[#a3e635] transition-colors whitespace-nowrap">
              Beranda
            </a>
            <a href="#deteksi" className="text-emerald-100/90 hover:text-[#a3e635] transition-colors whitespace-nowrap">
              Deteksi Citra
            </a>
            <a href="#performa" className="text-emerald-100/90 hover:text-[#a3e635] transition-colors whitespace-nowrap">
              Performa Model
            </a>
            <a href="#ood-study" className="text-emerald-100/90 hover:text-[#a3e635] transition-colors whitespace-nowrap">
              Kasus OOD
            </a>
            <a href="#katalog" className="text-emerald-100/90 hover:text-[#a3e635] transition-colors whitespace-nowrap">
              28 Kelas Daun
            </a>
          </div>

          {/* Action Button */}
          <div className="shrink-0">
            <a
              href="#deteksi"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-500 to-[#a3e635] text-[#0a3622] hover:from-emerald-400 hover:to-[#bef264] transition-all shadow-sm hover:shadow-emerald-500/20 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Uji Gambar</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
