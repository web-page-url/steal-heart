"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
    { name: "John D.", text: "Bro... she replied in 3 seconds. This site is illegal.", status: "Match Found" },
    { name: "Sarah M.", text: "Finally an AI that understands 'Soft Girl Energy'. Melted.", status: "Date Secured" },
    { name: "Alex K.", text: "Got 5 matches in one night using the 'Savage' mode. Absolute fire.", status: "Power User" },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-4">
            <div className="mx-auto max-w-7xl text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Success <span className="text-gradient">Stories.</span></h2>
                <p className="text-text-muted font-medium">Real results from the RizzVerse community.</p>
            </div>

            <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((rev, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass rounded-3xl p-8 border-white/5 relative"
                    >
                        <div className="absolute top-6 right-8 text-brand-pink/20">
                            <Quote size={40} />
                        </div>

                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-brand-gold fill-current" />)}
                        </div>

                        <p className="text-foreground font-bold mb-6 text-lg leading-relaxed">"{rev.text}"</p>

                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                            <span className="text-sm font-bold text-text-muted">{rev.name}</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-pink px-2 py-1 bg-brand-pink/10 rounded-lg border border-brand-pink/20">
                                {rev.status}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
