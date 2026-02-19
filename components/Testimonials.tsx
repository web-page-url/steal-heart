"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
    { name: "John D.", text: "Bro... she replied in 3 seconds. This site is illegal.", status: "Match Found", img: "/img/rizz-verse-testimonial-1.0.jpg" },
    { name: "Sarah M.", text: "Finally an AI that understands 'Soft Girl Energy'. Melted.", status: "Date Secured", img: "/img/rizz-verse-testimonial-2.0.jpg" },
    { name: "Alex K.", text: "Got 5 matches in one night using the 'Savage' mode. Absolute fire.", status: "Power User", img: "/img/rizz-verse-testimonial-3.0.jpg" },
    { name: "Priya V.", text: "The Bollywood mode is too accurate. My DMs are literally on fire right now.", status: "Main Character", img: "/img/rizz-verse-testimonial-4.0.jpg" },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-4">
            <div className="mx-auto max-w-7xl text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Success <span className="text-gradient">Stories.</span></h2>
                <p className="text-text-muted font-medium">Real results from the RizzVerse community.</p>
            </div>

            <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviews.map((rev, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass rounded-[32px] p-6 border-white/5 relative flex flex-col h-full hover:border-brand-pink/30 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative h-14 w-14 shrink-0 rounded-2xl overflow-hidden border border-brand-pink/20">
                                <Image
                                    src={rev.img}
                                    alt={rev.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground text-sm">{rev.name}</h4>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={10} className="text-brand-gold fill-current" />)}
                                </div>
                            </div>
                        </div>

                        <p className="text-foreground font-bold mb-6 text-base leading-relaxed grow italic">"{rev.text}"</p>

                        <div className="pt-4 border-t border-white/5">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-pink px-2.5 py-1 bg-brand-pink/10 rounded-lg border border-brand-pink/20 inline-block">
                                {rev.status}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
