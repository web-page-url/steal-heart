"use client";

import { motion } from "framer-motion";
import { TrendingUp, Heart, MessageSquare, Repeat2 } from "lucide-react";

const trendingLines = [
    { text: "Are you WiFi? Because I'm feeling a connection.", likes: "12k", shares: "4k" },
    { text: "My universe feels incomplete without you.", likes: "8k", shares: "2.5k" },
    { text: "If looks could kill, you'd be a weapon.", likes: "15k", shares: "6k" },
    { text: "Are you Google? You're all I've been searching for.", likes: "10k", shares: "3k" },
];

export default function TrendingLines() {
    return (
        <section className="py-24 px-4 bg-foreground/5">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-brand-pink mb-4">
                            <TrendingUp size={20} />
                            <span className="text-xs font-bold uppercase tracking-widest">Live Updates</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-foreground">Today's <span className="text-gradient">Heartbreakers.</span></h2>
                    </div>
                    <p className="text-text-muted max-w-xs text-sm font-medium">The most used and successful lines in the RizzVerse today.</p>
                </div>

                <div className="flex overflow-hidden group">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex gap-6 whitespace-nowrap"
                    >
                        {[...trendingLines, ...trendingLines].map((line, i) => (
                            <div
                                key={i}
                                className="inline-block glass rounded-3xl p-6 min-w-[350px] border-white/5"
                            >
                                <p className="text-xl font-bold text-foreground mb-6 whitespace-normal">"{line.text}"</p>
                                <div className="flex items-center gap-6 text-text-muted">
                                    <span className="flex items-center gap-1.5 text-xs font-bold">
                                        <Heart size={14} className="text-brand-pink fill-current" /> {line.likes}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs font-bold">
                                        <Repeat2 size={14} /> {line.shares}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs font-bold">
                                        <MessageSquare size={14} /> 120
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
