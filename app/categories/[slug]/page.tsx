"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import {
    Heart, Sparkles, Flame, Smile, Zap, Crown, Ghost,
    Briefcase, Feather, MessageSquare, ArrowLeft,
    Copy, Check, Share2
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { RIZZ_LINES } from "@/lib/rizzData";

const categories = [
    {
        slug: "romantic-royalty",
        title: "Romantic Royalty",
        icon: Crown,
        desc: "Classic charm for the pure at heart. These lines are designed to make anyone feel like royalty in your eyes.",
        vibe: "Romantic"
    },
    {
        slug: "funny-but-smooth",
        title: "Funny But Smooth",
        icon: Smile,
        desc: "Break the ice with a perfect laugh. Charm them with your wit and keep the conversation flowing effortlessly.",
        vibe: "Funny"
    },
    {
        slug: "savage-bold",
        title: "Savage & Bold",
        icon: Flame,
        desc: "High risk, high reward. For when you want to make a statement that's impossible to ignore.",
        vibe: "Savage"
    },
    {
        slug: "cute-innocent",
        title: "Cute & Innocent",
        icon: Heart,
        desc: "Soft words that melt hearts. Perfect for those sweet moments where less is definitely more.",
        vibe: "Cute"
    },
    {
        slug: "desi-bollywood",
        title: "Desi Bollywood",
        icon: Zap,
        desc: "Channel your inner main character with dramatic lines that feel straight out of a block-buster movie.",
        vibe: "Bollywood"
    },
    {
        slug: "dark-mysterious",
        title: "Dark & Mysterious",
        icon: Ghost,
        desc: "Deep, intriguing vibes for those late-night conversations that go beyond the surface.",
        vibe: "Dark Mysterious"
    },
    {
        slug: "luxury-ceo-vibes",
        title: "Luxury CEO Vibes",
        icon: Briefcase,
        desc: "Sophisticated charm for the elite. Perfect for making a lasting impression of power and elegance.",
        vibe: "Luxury Gentleman"
    },
    {
        slug: "shayari-special",
        title: "Shayari Special",
        icon: Feather,
        desc: "Poetic depth that touches the soul. Classic Urdu and Hindi influenced lines for deep connection.",
        vibe: "Shayari Mode"
    },
    {
        slug: "insta-dm-openers",
        title: "Insta DM Openers",
        icon: MessageSquare,
        desc: "The perfect hooks for social media. Stand out in their notifications from the very first word.",
        vibe: "Savage"
    }
];

export default function CategoryPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const category = categories.find(c => c.slug === slug);

    // Filter rizz lines for this category
    // For Insta DM, we use 'Savage' or 'Funny' as fallback if not explicitly defined
    const lines = category
        ? RIZZ_LINES.filter(l => l.vibe === category.vibe || (category.slug === 'insta-dm-openers' && (l.vibe === 'Savage' || l.vibe === 'Funny')))
        : [];

    if (!category) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
                    <button
                        onClick={() => router.push('/')}
                        className="text-brand-pink font-bold flex items-center gap-2 mx-auto"
                    >
                        <ArrowLeft size={20} /> Back to Hub
                    </button>
                </div>
            </div>
        );
    }

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-outfit">
            <Navbar />

            <main className="pt-32 pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Branding */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <button
                            onClick={() => router.push('/')}
                            className="mb-8 inline-flex items-center gap-2 text-text-muted hover:text-foreground transition-colors font-bold uppercase tracking-widest text-xs"
                        >
                            <ArrowLeft size={16} /> Back to RizzVerse
                        </button>

                        <div className="mb-6 inline-flex p-6 rounded-[32px] bg-brand-pink/10 text-brand-pink border border-brand-pink/20">
                            <category.icon size={48} />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                            {category.title.split(' ').map((word, i) => (
                                <span key={i} className={i % 2 !== 0 ? "text-gradient" : ""}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>
                        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto font-medium">
                            {category.desc}
                        </p>
                    </motion.div>

                    {/* Rizz List */}
                    <div className="space-y-6">
                        {lines.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 group hover:border-brand-pink/30 transition-all border-white/5"
                            >
                                <div className="flex-1 text-xl md:text-2xl font-bold leading-relaxed text-center md:text-left">
                                    "{line.text}"
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                    <button
                                        onClick={() => handleCopy(line.text, i)}
                                        className={cn(
                                            "flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm transition-all",
                                            copiedIndex === i
                                                ? "bg-emerald-500 text-white"
                                                : "bg-foreground/5 hover:bg-foreground/10 text-foreground"
                                        )}
                                    >
                                        {copiedIndex === i ? (
                                            <><Check size={18} /> Copied</>
                                        ) : (
                                            <><Copy size={18} /> Copy Code</>
                                        )}
                                    </button>
                                    <button className="h-12 w-12 flex items-center justify-center rounded-2xl bg-foreground/5 hover:bg-foreground/10 text-foreground transition-all">
                                        <Share2 size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-24 text-center p-12 glass rounded-[48px] border-brand-pink/20"
                    >
                        <Sparkles className="h-10 w-10 text-brand-pink mx-auto mb-6" />
                        <h3 className="text-3xl font-black mb-4">Want More Specialized Rizz?</h3>
                        <p className="text-text-muted mb-8 max-w-md mx-auto">
                            Our AI is updated daily with the latest trending lines from across the RizzVerse.
                        </p>
                        <button
                            onClick={() => router.push('/#lab')}
                            className="bg-brand-pink text-white px-10 py-4 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-xl shadow-brand-pink/20"
                        >
                            Open AI Rizz Lab
                        </button>
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
