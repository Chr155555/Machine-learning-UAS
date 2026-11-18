import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PlantDoc AI - Sistem Deteksi Penyakit Daun Berbasis Multi-Modal Machine Learning',
  description: 'Projek Akhir UAS Machine Learning Fakultas Teknologi Informasi Universitas Tarumanagara. Klasifikasi 28 kelas penyakit daun tanaman menggunakan fusi fitur spasial GLCM dan Deep Transfer Learning EfficientNet-B0 dengan SVM.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
