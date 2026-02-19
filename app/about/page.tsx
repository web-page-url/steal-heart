"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Heart, ShieldCheck, Sparkles, Zap, Stars } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-outfit">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="mx-auto max-w-5xl px-4">
                    {/* Mission Section */}
                    <div className="text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-pink/20 bg-brand-pink/5 px-4 py-1"
                        >
                            <Heart className="h-3.5 w-3.5 text-brand-pink" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-pink">Our Vision</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                            The Science of <span className="text-gradient">Stealing Hearts.</span>
                        </h1>
                        <p className="text-text-muted text-xl md:text-2xl font-medium leading-relaxed">
                            RizzVerse wasn't built to just give you lines. It was built to bridge the gap between
                            introversion and connection, using the power of AI to ignite dopamine and spark genuine intrigue.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        <div className="glass p-10 rounded-[40px] border-white/5">
                            <h3 className="text-3xl font-black mb-4 flex items-center gap-3">
                                <ShieldCheck className="text-brand-pink" /> No Ghosting Policy
                            </h3>
                            <p className="text-text-muted font-medium text-lg">
                                Our lines are optimized for high-reply rates. We analyze thousands of successful social interactions
                                to ensure your messages stand out in a crowded inbox.
                            </p>
                        </div>
                        <div className="glass p-10 rounded-[40px] border-white/5">
                            <h3 className="text-3xl font-black mb-4 flex items-center gap-3">
                                <Zap className="text-brand-gold" /> Instant Chemistry
                            </h3>
                            <p className="text-text-muted font-medium text-lg">
                                Whether it's "Savage" or "Romantic", our engine calibrates the perfect intensity to match your
                                target's personality and the platform's vibe.
                            </p>
                        </div>
                    </div>

                    {/* FAQ / Methodology */}
                    <div className="mb-24">
                        <h2 className="text-4xl font-black mb-12 text-center">The <span className="text-gradient">Rizz Manual.</span></h2>
                        <div className="space-y-6">
                            {[
                                { q: "Is this based on real psychology?", a: "Yes. Our engine uses sentiment analysis and behavioral mapping to craft lines that trigger curiosity and positive emotional responses." },
                                { q: "Will I get banned on apps?", a: "Never. Our 'Introductory Logic' is designed to be human-centric and social-media friendly. We avoid spammy patterns." },
                                { q: "How often are lines updated?", a: "Every 24 hours. We track global trends to ensure you're always using the latest 'Main Character' energy." }
                            ].map((item, i) => (
                                <div key={i} className="glass p-8 rounded-3xl border-white/5">
                                    <h4 className="text-xl font-bold mb-3">Q: {item.q}</h4>
                                    <p className="text-text-muted font-medium">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Founder / Team Quote */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-12 glass rounded-[48px] border-brand-pink/20 text-center relative overflow-hidden"
                    >
                        <Stars className="absolute top-6 right-8 text-brand-gold/10 h-32 w-32" />
                        <p className="text-3xl font-bold mb-8 italic relative z-10 leading-snug">
                            "In a world of digital noise, the right words are the ultimate luxury. We're here to make sure you never miss a heartbeat."
                        </p>
                        <div className="font-black text-brand-pink uppercase tracking-widest">
                            — Anubhav, Founder of RizzVerse
                        </div>
                    </motion.div>
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
