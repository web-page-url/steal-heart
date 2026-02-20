"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Microscope, Sliders, Target, ShieldCheck, Sparkles, Brain, Copy, Check, Loader2, RefreshCw, Volume2, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useVoice } from "@/hooks/useVoice";

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
    const [isGenerating, setIsGenerating] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);
    const { speak, isSpeaking, stop } = useVoice();

    const handleCalibrate = async () => {
        if (isGenerating) return;
        setIsGenerating(true);
        setResult(null);

        const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        if (!GEMINI_API_KEY) {
            setResult("Rizz Server Offline: API Key Missing.");
            setIsGenerating(false);
            return;
        }

        try {
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            const intensityLabel = intensity < 30 ? "Soft & Subtle" : intensity < 70 ? "Bold & Flirty" : "Nuclear/Savage";

            const prompt = `Act as a master of charisma and rizz. 
            Target Personality: ${selectedType}
            Platform: ${selectedPlatform}
            Intensity: ${intensity}% (${intensityLabel})
            
            Generate ONE highly effective, context-aware pickup line or opener. 
            Make it feel natural for the platform and personality.
            Response format: JUST the line, no other text.`;

            const res = await model.generateContent(prompt);
            const text = await res.response.text();
            setResult(text.trim());
        } catch (error) {
            console.error(error);
            setResult("Neural Link Interrupted. Try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleCopy = () => {
        if (!result) return;
        navigator.clipboard.writeText(result);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="lab" className="py-24 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20">
                <div className="h-[600px] w-[600px] rounded-full border border-brand-pink/20 animate-spin-slow" />
            </div>

            <div className="mx-auto max-w-6xl">
                <div className="glass rounded-[32px] md:rounded-[48px] p-6 md:p-16 border-white/10 relative">
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
                                        className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-pink cursor-pointer [color-scheme:dark]"
                                    >
                                        {platforms.map(p => (
                                            <option key={p} value={p} className="bg-zinc-900 text-white">
                                                {p}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Right: Lab Output / Visualization */}
                        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 bg-foreground/5 rounded-[32px] md:rounded-[40px] border border-white/5 min-h-[400px] md:min-h-[500px] relative overflow-hidden">
                            <div className="text-center w-full px-2 md:px-6">
                                {result ? (
                                    <motion.div
                                        key="result-card"
                                        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        className="space-y-6"
                                    >
                                        <div className="p-5 md:p-8 glass rounded-[24px] md:rounded-[32px] border-brand-pink/30 bg-brand-pink/[0.03] relative overflow-hidden group/result">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-brand-pink" />
                                            <p className="text-lg md:text-2xl font-bold leading-relaxed italic text-foreground">
                                                "{result}"
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                            <button
                                                onClick={handleCopy}
                                                className={cn(
                                                    "w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all",
                                                    copied
                                                        ? "bg-brand-gold text-black scale-95"
                                                        : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                                                )}
                                            >
                                                {copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy Rizz</>}
                                            </button>
                                            <button
                                                onClick={() => speak(result, "lab-result")}
                                                className={cn(
                                                    "w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all border",
                                                    isSpeaking === "lab-result"
                                                        ? "bg-brand-pink text-white border-brand-pink shadow-lg translate-y-0.5"
                                                        : "bg-white/5 text-brand-pink border-white/10 hover:bg-white/10"
                                                )}
                                            >
                                                {isSpeaking === "lab-result" ? <><Square size={16} /> Stop</> : <><Volume2 size={16} /> Listen</>}
                                            </button>
                                            <button
                                                onClick={handleCalibrate}
                                                disabled={isGenerating}
                                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-brand-pink text-white font-black uppercase tracking-widest text-xs hover:bg-brand-red transition-all shadow-xl shadow-brand-pink/20"
                                            >
                                                {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <RefreshCw size={16} />}
                                                Recalibrate
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <>
                                        <motion.div
                                            key="loading-state"
                                            animate={isGenerating ? {
                                                scale: [1, 1.2, 1],
                                                rotate: [0, 180, 360],
                                            } : {
                                                scale: [1, 1.05, 1],
                                                opacity: [0.5, 1, 0.5]
                                            }}
                                            transition={{ duration: isGenerating ? 2 : 4, repeat: Infinity }}
                                            className="relative mb-8"
                                        >
                                            <div className="absolute -inset-8 bg-brand-pink/20 blur-3xl rounded-full" />
                                            {isGenerating ? (
                                                <Brain size={80} className="text-brand-pink relative z-10" />
                                            ) : (
                                                <Microscope size={80} className="text-brand-pink relative z-10" />
                                            )}
                                        </motion.div>

                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold text-foreground mb-2 uppercase tracking-tight">
                                                {isGenerating ? "Analyzing Dynamics..." : "Ready to Calibrate"}
                                            </h3>
                                            <p className="text-zinc-500 text-sm max-w-xs mx-auto mb-8">
                                                {isGenerating
                                                    ? "Scanning neural patterns and platform algorithms..."
                                                    : `Combining ${selectedType} dynamics with ${selectedPlatform} algorithms at ${intensity}% intensity.`
                                                }
                                            </p>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleCalibrate}
                                            disabled={isGenerating}
                                            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-brand-pink px-12 py-5 text-xl font-black text-white transition-all shadow-xl shadow-brand-pink/20 disabled:opacity-50"
                                        >
                                            {isGenerating ? (
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                            ) : (
                                                <Sparkles className="h-5 w-5" />
                                            )}
                                            {isGenerating ? "Processing..." : "Calibrate Chemistry"}
                                        </motion.button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
