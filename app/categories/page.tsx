"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CategoryShowcase from "@/components/CategoryShowcase";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CategoriesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-outfit">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="mx-auto max-w-7xl px-4 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-pink/20 bg-brand-pink/5 px-4 py-1"
                    >
                        <Sparkles className="h-3.5 w-3.5 text-brand-pink" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-pink">The Rizz Collection</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
                        Find Your <span className="text-gradient">Vibe.</span>
                    </h1>
                    <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Explore our specialized categories engineered to handle every situation,
                        personality, and platform. Your journey to mastery starts here.
                    </p>
                </div>

                <CategoryShowcase />

                <div className="mt-24 text-center px-4">
                    <div className="max-w-4xl mx-auto p-12 glass rounded-[48px] border-brand-gold/20">
                        <h2 className="text-4xl font-black mb-4">Can't Find What You Need?</h2>
                        <p className="text-text-muted mb-8 text-lg font-medium">
                            Head over to the AI Lab to engineering a custom line grounded in deep attraction psychology.
                        </p>
                        <Link
                            href="/lab"
                            className="inline-flex items-center gap-2 bg-foreground text-background px-10 py-4 rounded-full font-black text-xl hover:scale-105 transition-transform"
                        >
                            Open AI Lab <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="py-12 border-t border-white/5 text-center text-zinc-600">
                <p className="text-sm font-medium tracking-widest uppercase">
                    Built with <span className="text-brand-pink">❤️</span> by Anubhav
                </p>
            </footer>
        </div>
    );
}
