"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const reviews = [
    {
        name: "John D.",
        text: "Bro... she replied in 3 seconds. This site is illegal. I used the 'Romantic' mode and it felt like I had a wingman who actually knew what he was doing.",
        status: "Match Found",
        img: "/img/rizz-verse-testimonial-1.0.jpg",
        date: "2 Days ago"
    },
    {
        name: "Sarah M.",
        text: "Finally an AI that understands 'Soft Girl Energy'. Melted. The way it phrases things is so organic, doesn't sound like a bot at all.",
        status: "Date Secured",
        img: "/img/rizz-verse-testimonial-2.0.jpg",
        date: "1 Week ago"
    },
    {
        name: "Alex K.",
        text: "Got 5 matches in one night using the 'Savage' mode. Absolute fire. If you struggle with openers, this is your holy grail. Period.",
        status: "Power User",
        img: "/img/rizz-verse-testimonial-3.0.jpg",
        date: "3 Days ago"
    },
    {
        name: "Priya V.",
        text: "The Bollywood mode is too accurate. My DMs are literally on fire right now. It's like having a scriptwriter for my dating life.",
        status: "Main Character",
        img: "/img/rizz-verse-testimonial-4.0.jpg",
        date: "Today"
    },
    {
        name: "Marcus L.",
        text: "I was skeptical, but the 'Dark Mysterious' vibe actually works. It's subtle yet intriguing. Highly recommend for late night chats.",
        status: "Intrigue Lead",
        img: "/img/rizz-verse-testimonial-1.0.jpg",
        date: "Just now"
    },
    {
        name: "Elena G.",
        text: "The 'Luxury Gentleman' lines are so sophisticated. It's refreshing to see an AI that can handle elegance so well.",
        status: "Classy Connection",
        img: "/img/rizz-verse-testimonial-2.0.jpg",
        date: "4 Days ago"
    },
];

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-outfit">
            <Navbar />

            <main className="pt-32 pb-24 px-4">
                <div className="mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 rounded-full border border-brand-pink/20 bg-brand-pink/5 px-4 py-1 mb-6"
                        >
                            <Sparkles className="h-3.5 w-3.5 text-brand-pink" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-pink">The Wall of Love</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
                            Real Rizz. <span className="text-gradient">Real Results.</span>
                        </h1>
                        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                            Join thousands who have unlocked their potential. From first messages to lasting connections, the RizzVerse community is winning.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {reviews.map((rev, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass rounded-[40px] p-8 border-white/5 relative flex flex-col h-full hover:border-brand-pink/30 hover:bg-white/[0.05] transition-all group"
                            >
                                <div className="absolute top-8 right-8 text-brand-pink/10 group-hover:text-brand-pink/20 transition-colors">
                                    <Quote size={40} />
                                </div>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="relative h-16 w-16 shrink-0 rounded-2xl overflow-hidden border-2 border-brand-pink/20 group-hover:border-brand-pink/50 transition-colors shadow-lg shadow-brand-pink/5">
                                        <Image
                                            src={rev.img}
                                            alt={rev.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-foreground text-lg tracking-tight">{rev.name}</h4>
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-brand-gold fill-current" />)}
                                            </div>
                                            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{rev.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-foreground/90 font-bold mb-8 text-lg leading-relaxed grow italic">
                                    "{rev.text}"
                                </p>

                                <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-pink px-4 py-1.5 bg-brand-pink/10 rounded-xl border border-brand-pink/20 inline-block shadow-sm">
                                        {rev.status}
                                    </span>
                                    <div className="h-2 w-2 rounded-full bg-brand-pink animate-pulse" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <div className="max-w-4xl mx-auto p-12 md:p-20 relative overflow-hidden glass rounded-[60px] border-brand-pink/20">
                            <div className="absolute -top-24 -right-24 h-64 w-64 bg-brand-pink/10 blur-[100px] rounded-full" />
                            <div className="absolute -bottom-24 -left-24 h-64 w-64 bg-brand-purple/20 blur-[100px] rounded-full" />

                            <h2 className="text-4xl md:text-6xl font-black mb-6 relative z-10 leading-none">
                                Ready to write your <br />
                                <span className="text-gradient">Success Story?</span>
                            </h2>
                            <p className="text-text-muted mb-10 text-lg md:text-xl font-medium max-w-xl mx-auto relative z-10">
                                Stop guessing and start charming. Get access to the world's most advanced charm engine today.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                                <Link
                                    href="/ai"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-pink text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-pink/20"
                                >
                                    Open AI Guru <Sparkles size={24} />
                                </Link>
                                <Link
                                    href="/"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-foreground px-10 py-5 rounded-2xl font-black text-base transition-all border border-white/10"
                                >
                                    <ArrowLeft size={18} /> Back to Home
                                </Link>
                            </div>
                        </div>
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
