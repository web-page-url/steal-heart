"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Flame, Smile, Zap, Crown, Ghost, Briefcase, Feather, MessageSquare } from "lucide-react";
import { RizzVibe } from "@/lib/rizzData";
import Link from "next/link";

interface Category {
    title: string;
    vibe: RizzVibe;
    icon: any;
    desc: string;
    preview: string;
}

const categories: Category[] = [
    {
        title: "Romantic Royalty",
        vibe: "Romantic",
        icon: Crown,
        desc: "Classic charm for the pure at heart.",
        preview: "My universe feels incomplete without you."
    },
    {
        title: "Funny But Smooth",
        vibe: "Funny",
        icon: Smile,
        desc: "Break the ice with a perfect laugh.",
        preview: "Are you Google? You're all I've been searching for."
    },
    {
        title: "Savage & Bold",
        vibe: "Savage",
        icon: Flame,
        desc: "High risk, high reward. Not for the shy.",
        preview: "If looks could kill, you'd be a weapon."
    },
    {
        title: "Cute & Innocent",
        vibe: "Cute",
        icon: Heart,
        desc: "Soft words to make them melt slowly.",
        preview: "I must be a snowflake because I've fallen for you."
    },
    {
        title: "Desi Bollywood",
        vibe: "Bollywood",
        icon: Zap,
        desc: "Dramatic lines for the main character.",
        preview: "Itni shiddat se maine tumhe paane ki koshish ki hai..."
    },
    {
        title: "Dark & Mysterious",
        vibe: "Dark Mysterious",
        icon: Ghost,
        desc: "Intriguing vibes for late-night talks.",
        preview: "The stars are jealous of the light you hide."
    },
    {
        title: "Luxury CEO Vibes",
        vibe: "Luxury Gentleman",
        icon: Briefcase,
        desc: "Sophisticated charm for the elite.",
        preview: "Excellence is a habit, you are the definition."
    },
    {
        title: "Shayari Special",
        vibe: "Shayari Mode",
        icon: Feather,
        desc: "Poetic depth that touches the soul.",
        preview: "Log kehte hain mohabbat ek bar hoti hai..."
    },
    {
        title: "Insta DM Openers",
        vibe: "Savage",
        icon: MessageSquare,
        desc: "Hook them from the very first notification.",
        preview: "Your profile is a masterpiece, can I be the critic?"
    }
];

export default function CategoryShowcase() {
    return (
        <section id="categories" className="py-24 px-4 bg-gradient-to-b from-transparent to-background/50">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/5 px-4 py-1 mb-4"
                    >
                        <Crown className="h-3 w-3 text-brand-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Choose Your Weapon</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground">Master the <span className="text-gradient">Art of Charm.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, i) => (
                        <Link
                            key={cat.title}
                            href={`/categories/${cat.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                            className="block"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                                    borderColor: "rgba(255,105,180,0.3)"
                                }}
                                className="group relative glass rounded-[32px] p-8 cursor-pointer transition-all border-white/5 h-full"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                                    <cat.icon size={80} />
                                </div>

                                <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-brand-pink group-hover:scale-110 transition-transform">
                                    <cat.icon size={28} />
                                </div>

                                <h3 className="text-2xl font-bold text-foreground mb-2">{cat.title}</h3>
                                <p className="text-text-muted text-sm mb-6 leading-relaxed">{cat.desc}</p>

                                <div className="mt-auto">
                                    <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/5 italic text-text-muted text-xs">
                                        "{cat.preview}"
                                    </div>
                                </div>

                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-pink text-white">
                                        <Zap size={20} fill="currentColor" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
