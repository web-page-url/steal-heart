"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, Sparkles, Flame, Shield, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Free",
        price: "0",
        desc: "Begin your journey into the RizzVerse.",
        icon: Sparkles,
        color: "zinc",
        features: [
            "3 AI Rizz generations per day",
            "Access to Basic Categories",
            "Standard community support",
            "Mobile app access"
        ],
        cta: "Start for Free",
        popular: false
    },
    {
        name: "Pro",
        price: "19",
        desc: "For those serious about their charm game.",
        icon: Flame,
        color: "pink",
        features: [
            "Unlimited AI generations",
            "Access to all Premium Categories",
            "Full AI Lab feature set",
            "Priority neural engine access",
            "Ad-free experience"
        ],
        cta: "Unleash the Rizz",
        popular: true
    },
    {
        name: "Elite",
        price: "49",
        desc: "Mastery reserved for the top 1%.",
        icon: Crown,
        color: "gold",
        features: [
            "Everything in Pro tier",
            "Exclusive 'Nuclear' Rizz mode",
            "Private Guru consultation",
            "Beta access to NEW engines",
            "Discord VIP Inner Circle"
        ],
        cta: "Become a Legend",
        popular: false
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-outfit">
            <Navbar />

            <main className="pt-32 pb-24 px-4 overflow-hidden">
                <div className="mx-auto max-w-7xl relative">
                    {/* Background Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-[500px] bg-brand-pink/5 blur-[120px] rounded-full opacity-50" />

                    {/* Header */}
                    <div className="text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/5 px-4 py-1 mb-6"
                        >
                            <Shield className="h-3.5 w-3.5 text-brand-gold" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Secure Subscription</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
                            Invest in <span className="text-gradient">Your Game.</span>
                        </h1>
                        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto font-medium">
                            Choose the tier that fits your ambition. From casual chats to cinematic romance, we've got you covered.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={cn(
                                    "glass rounded-[48px] p-10 flex flex-col relative transition-all duration-500",
                                    plan.popular
                                        ? "border-brand-pink/40 bg-white/[0.05] shadow-[0_0_50px_rgba(255,105,180,0.1)] scale-105 z-10"
                                        : "border-white/5 hover:border-white/20"
                                )}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-pink text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-brand-pink/20">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-10">
                                    <div className={cn(
                                        "h-16 w-16 rounded-3xl flex items-center justify-center mb-8 shadow-inner",
                                        plan.color === "pink" ? "bg-brand-pink text-white" :
                                            plan.color === "gold" ? "bg-brand-gold text-white" :
                                                "bg-white/10 text-white"
                                    )}>
                                        <plan.icon size={32} />
                                    </div>
                                    <h3 className="text-3xl font-black mb-2">{plan.name}</h3>
                                    <p className="text-text-muted text-sm font-medium leading-relaxed">{plan.desc}</p>
                                </div>

                                <div className="mb-10 flex items-baseline gap-1">
                                    <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                                    <span className="text-text-muted font-bold text-sm">/month</span>
                                </div>

                                <div className="space-y-4 mb-12 flex-grow">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex gap-3 items-start">
                                            <div className={cn(
                                                "mt-1 shrink-0 h-5 w-5 rounded-full flex items-center justify-center",
                                                plan.color === "pink" ? "bg-brand-pink/20 text-brand-pink" : "bg-white/10 text-white/50"
                                            )}>
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm font-bold text-foreground/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className={cn(
                                    "w-full py-5 rounded-[24px] font-black text-lg transition-all flex items-center justify-center gap-2 group",
                                    plan.popular
                                        ? "bg-brand-pink text-white hover:bg-brand-pink-glow shadow-xl shadow-brand-pink/20"
                                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                                )}>
                                    {plan.cta} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* FAQ Mini */}
                    <div className="max-w-4xl mx-auto rounded-[40px] border border-white/5 bg-white/[0.02] p-12 text-center">
                        <Sparkles className="h-8 w-8 text-brand-gold mx-auto mb-6" />
                        <h4 className="text-2xl font-black mb-4">Enterprise Inquiries?</h4>
                        <p className="text-text-muted mb-8 font-medium">
                            Need a custom Rizz engine for your dating coaching agency or personal brand?
                        </p>
                        <div className="flex justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                            <button className="hover:text-brand-pink transition-colors">Contact Expert</button>
                            <button className="hover:text-brand-pink transition-colors">Documentation</button>
                            <button className="hover:text-brand-pink transition-colors">Refund Policy</button>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/"
                            className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-foreground transition-colors inline-flex items-center gap-2"
                        >
                            <ArrowLeft size={14} /> Back to Dashboard
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
