"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Microscope, Sliders, Target, ShieldCheck, Sparkles, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const personalityTypes = [
    "Introvert", "Extrovert", "Intellectual", "Fashion Queen", "Gym Freak", "Gamer", "Artist"
];

const platforms = [
    "Instagram", "Tinder", "WhatsApp", "In-Person"
];

export default function AiRizzLab() {
    const [intensity, setIntensity] = useState(50);
    const [selectedType, setSelectedType] = useState("Extrovert");
    const [selectedPlatform, setSelectedPlatform] = useState("Instagram");

    return (
        <section id="lab" className="py-24 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20">
                <div className="h-[600px] w-[600px] rounded-full border border-brand-pink/20 animate-spin-slow" />
            </div>

            <div className="mx-auto max-w-6xl">
                <div className="glass rounded-[48px] p-8 md:p-16 border-white/10 relative">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left: Lab Controls */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 rounded-2xl bg-brand-pink/20 text-brand-pink">
                                    <Brain className="h-6 w-6" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-foreground">AI Rizz Lab</h2>
                                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Precision Attraction Engineering</p>
                                </div>
                            </div>

                            <div className="space-y-10">
                                {/* Personality Type */}
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                                        <Target size={16} className="text-brand-pink" /> Target Personality
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {personalityTypes.map(type => (
                                            <button
                                                key={type}
                                                onClick={() => setSelectedType(type)}
                                                className={cn(
                                                    "px-4 py-2 rounded-xl text-xs font-bold transition-all border",
                                                    selectedType === type
                                                        ? "bg-foreground text-background border-foreground shadow-lg shadow-foreground/10"
                                                        : "bg-foreground/5 border-foreground/5 text-zinc-500 hover:bg-foreground/10"
                                                )}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Intensity Slider */}
                                <div>
                                    <label className="flex items-center justify-between text-sm font-bold text-foreground uppercase tracking-wider mb-6">
                                        <span className="flex items-center gap-2">
                                            <Sliders size={16} className="text-brand-pink" /> Rizz Intensity
                                        </span>
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-[10px] text-white font-bold",
                                            intensity < 30 ? "bg-emerald-500" : intensity < 70 ? "bg-brand-pink" : "bg-red-600 animate-pulse"
                                        )}>
                                            {intensity < 30 ? "SOFT" : intensity < 70 ? "BOLD" : "NUCLEAR"}
                                        </span>
                                    </label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={intensity}
                                        onChange={(e) => setIntensity(parseInt(e.target.value))}
                                        className="w-full h-2 bg-foreground/10 rounded-lg appearance-none cursor-pointer accent-brand-pink"
                                    />
                                    <div className="flex justify-between mt-2 text-[10px] font-bold text-zinc-600">
                                        <span>FRIENDLY</span>
                                        <span>FLIRTY</span>
                                        <span>DANGEROUS</span>
                                    </div>
                                </div>

                                {/* Platform Selection */}
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                                        <ShieldCheck size={16} className="text-brand-pink" /> Optimize For
                                    </label>
                                    <select
                                        value={selectedPlatform}
                                        onChange={(e) => setSelectedPlatform(e.target.value)}
                                        className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-pink"
                                    >
                                        {platforms.map(p => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Right: Lab Output / Visualization */}
                        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-foreground/5 rounded-[32px] border border-foreground/5 min-h-[400px]">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="relative mb-8"
                            >
                                <div className="absolute -inset-8 bg-brand-pink/20 blur-3xl rounded-full" />
                                <Microscope size={80} className="text-brand-pink relative z-10" />
                            </motion.div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-foreground mb-2 uppercase tracking-tight">Calibrating...</h3>
                                <p className="text-zinc-500 text-sm max-w-xs mx-auto mb-8">
                                    Combining {selectedType} dynamics with {selectedPlatform} algorithms at {intensity}% intensity.
                                </p>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-brand-pink px-12 py-5 text-xl font-black text-white transition-all shadow-xl shadow-brand-pink/20"
                            >
                                <Sparkles className="h-5 w-5" />
                                Calibrate Chemistry
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
