import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { DiagnosisStudio } from '@/components/DiagnosisStudio';
import { PerformanceSection } from '@/components/PerformanceSection';
import { OodSection } from '@/components/OodSection';
import { CatalogSection } from '@/components/CatalogSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DiagnosisStudio />
        <PerformanceSection />
        <OodSection />
        <CatalogSection />
      </main>
      <Footer />
    </div>
  );
}
