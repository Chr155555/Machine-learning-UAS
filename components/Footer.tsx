import React from 'react';
import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-[#a3e635] flex items-center justify-center text-[#0a3622] font-bold shadow-md shadow-emerald-500/20">
                <Leaf className="w-5 h-5 text-[#0a3622]" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                PlantDoc
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Aplikasi cerdas deteksi penyakit daun tanaman berbasis Deep Learning EfficientNet-B0, GLCM, dan Support Vector Machine.
            </p>

          </div>

          <div className="md:col-span-3 space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">Navigasi</h5>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#beranda" className="hover:text-emerald-400 transition-colors">Beranda</a></li>
              <li><a href="#deteksi" className="hover:text-emerald-400 transition-colors">Studio Diagnosis</a></li>
              <li><a href="#performa" className="hover:text-emerald-400 transition-colors">Performa Model</a></li>
              <li><a href="#ood-study" className="hover:text-emerald-400 transition-colors">Kasus OOD</a></li>
              <li><a href="#katalog" className="hover:text-emerald-400 transition-colors">Katalog Penyakit</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">Stack Teknologi</h5>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Next.js 16 (Node.js)</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">React 19</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Tailwind CSS</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">PyTorch 2.15</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">EfficientNet-B0</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">GLCM + SVM</span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 PlantDoc Machine learning + Deep Learning</p>
          <p className="flex items-center gap-1">
            Built with Next.js & Python Machine Learning
          </p>
        </div>
      </div>
    </footer>
  );
}
