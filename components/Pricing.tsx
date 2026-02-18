"use client";

import { motion } from "framer-motion";
import { Check, Crown, Zap, Shield } from "lucide-react";

const tiers = [
    {
        name: "Free",
        price: "0",
        features: ["10 Rizz generations/day", "Basic vibes only", "Standard speed", "Community support"],
        icon: Zap,
        color: "from-zinc-500 to-zinc-700",
        glow: "shadow-zinc-500/20"
    },
    {
        name: "Pro",
        price: "19",
        features: ["Unlimited generations", "All 9 premium vibes", "Priority AI generation", "Instagram DM openers", "No ads"],
        icon: Shield,
        color: "from-brand-red to-brand-pink",
        glow: "shadow-rose-500/40",
        popular: true
    },
    {
        name: "Elite",
        price: "49",
        features: ["Custom personality lab", "Voice note rizz scripts", "AI confession letters", "Daily Rizz Drop", "Private coaching"],
        icon: Crown,
        color: "from-brand-gold to-brand-red",
        glow: "shadow-brand-gold/40"
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-4 bg-gradient-to-t from-brand-purple/20 to-transparent">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4">Unlock <span className="text-gradient">God-Level Rizz.</span></h2>
                    <p className="text-zinc-500 font-medium">Choose your level of attraction.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative glass rounded-[40px] p-10 border-white/5 flex flex-col ${tier.popular ? "md:-mt-4 md:mb-4 border-brand-pink/30 ring-1 ring-brand-pink/20" : ""}`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-pink text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className={`mb-8 inline-flex p-4 rounded-2xl bg-gradient-to-br ${tier.color} text-white shadow-lg ${tier.glow}`}>
                                <tier.icon size={24} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-black text-white">${tier.price}</span>
                                <span className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">/month</span>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {tier.features.map(feat => (
                                    <li key={feat} className="flex items-center gap-3 text-zinc-400 text-sm font-medium">
                                        <Check size={16} className="text-brand-pink flex-shrink-0" /> {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-2xl font-black text-lg transition-all ${tier.popular ? "bg-white text-black hover:bg-brand-pink hover:text-white" : "bg-white/5 text-white hover:bg-white/10"}`}>
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
