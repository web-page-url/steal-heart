"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import AiRizzLab from "@/components/AiRizzLab";
import { Brain, Zap, Shield, Microscope } from "lucide-react";

export default function LabPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-outfit">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="mx-auto max-w-7xl px-4 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/5 px-4 py-1"
                    >
                        <Brain className="h-3.5 w-3.5 text-brand-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Research Terminal</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
                        Attraction <span className="text-gradient">Engineering.</span>
                    </h1>
                    <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Our laboratory uses deep neural networks and sentiment analysis to craft
                        the most effective social catalysts ever engineered.
                    </p>
                </div>

                <div className="mx-auto max-w-6xl px-4 mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Zap, title: "Dopamine Hooks", desc: "Lines designed to trigger immediate positive neuro-responses." },
                        { icon: Shield, title: "Confidence Buffer", desc: "Strategically safe openers that minimize rejection anxiety." },
                        { icon: Microscope, title: "Pattern Recognition", desc: "Adapts to platform-specific algorithms and social norms." }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-[32px] border-white/5"
                        >
                            <div className="mb-4 inline-flex p-3 rounded-2xl bg-brand-pink/10 text-brand-pink">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-text-muted text-sm font-medium">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Specs Overlay */}
                <div className="mx-auto max-w-4xl px-4 mb-24">
                    <div className="p-8 glass rounded-[40px] border-brand-pink/10 bg-brand-pink/[0.02]">
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-brand-pink mb-8 text-center italic">Hardware & Neural Specs</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: "Processing", val: "Quantum-8" },
                                { label: "Success Rate", val: "94.2%" },
                                { label: "Nodes Active", val: "1.2M" },
                                { label: "Daily Sync", val: "24/7" }
                            ].map((spec, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl font-black text-foreground">{spec.val}</div>
                                    <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{spec.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <AiRizzLab />
            </main>

            <footer className="py-12 border-t border-white/5 text-center text-zinc-600">
                <p className="text-sm font-medium tracking-widest uppercase">
                    Built with <span className="text-brand-pink">❤️</span> by Anubhav
                </p>
            </footer>
        </div>
    );
}
