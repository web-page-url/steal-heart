import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RizzGenerator from "@/components/RizzGenerator";
import CategoryShowcase from "@/components/CategoryShowcase";
import AiRizzLab from "@/components/AiRizzLab";
import FloatingHearts from "@/components/FloatingHearts";
import TrendingLines from "@/components/TrendingLines";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#05010a] text-white font-outfit">
      {/* Cinematic Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]" />
      </div>

      <FloatingHearts />
      <Navbar />

      <main>
        <Hero />
        <RizzGenerator />
        <TrendingLines />
        <CategoryShowcase />
        <AiRizzLab />
        <Pricing />
        <Testimonials />

        {/* Placeholder for further sections */}
        <section className="py-24 text-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-brand-pink/50 to-transparent mx-auto mb-8" />
          <h2 className="text-gradient text-xl font-bold opacity-30 tracking-widest uppercase">Success Stories Coming Soon</h2>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-zinc-600">
        <p className="text-sm font-medium tracking-widest uppercase">
          Built with <span className="text-brand-pink">❤️</span> by Anubhav
        </p>
        <p className="mt-2 text-[10px] tracking-widest opacity-50">
          © 2026 RIZZVERSE. ALL HEARTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
