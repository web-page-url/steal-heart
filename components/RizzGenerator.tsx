"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Copy, Share2, Sparkles, Heart, RefreshCw, Loader2, Volume2, Square } from "lucide-react";
import { RIZZ_LINES, RizzVibe, VIBE_COLORS } from "@/lib/rizzData";
import { cn } from "@/lib/utils";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useVoice } from "@/hooks/useVoice";

const vibes: RizzVibe[] = [
    "Romantic", "Funny", "Savage", "Cute", "Bollywood",
    "Dark Mysterious", "Luxury Gentleman", "Shayari Mode"
];

export default function RizzGenerator() {
    const [name, setName] = useState("");
    const [vibe, setVibe] = useState<RizzVibe>("Romantic");
    const [generatedLine, setGeneratedLine] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [copied, setCopied] = useState(false);
    const { speak, isSpeaking, stop } = useVoice();

    const generateRizz = async () => {
        if (!name.trim()) {
            alert("Please provide a name for the mission, Agent.");
            return;
        }

        setIsGenerating(true);
        setGeneratedLine("");

        const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        if (!GEMINI_API_KEY) {
            setGeneratedLine("Rizz Server Offline: API Key Missing.");
            setIsGenerating(false);
            return;
        }

        try {
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            const prompt = `Act as a master of charm and social dynamics. 
            Target Name: ${name}
            Vibe Requested: ${vibe}
            
            Generate ONE highly effective, personalized pickup line or opener for ${name}. 
            Make it match the "${vibe}" vibe perfectly. 
            Response format: JUST the line, no other text. Include relevant emojis.`;

            const res = await model.generateContent(prompt);
            const text = await res.response.text();
            setGeneratedLine(text.trim());
        } catch (error) {
            console.error(error);
            setGeneratedLine("The Rizz algorithms are experiencing interference. Try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedLine);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="generate" className="relative py-24 px-4 overflow-hidden">
            <div className="mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-foreground mb-4"
                    >
                        Type Their Name. <br />
                        <span className="text-gradient">We Handle The Magic.</span>
                    </motion.h2>
                    <p className="text-text-muted font-medium">Precision-crafted charm for every personality.</p>
                </div>

                <div className="glass rounded-[40px] p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-brand-pink/10">
                        <Sparkles size={120} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        <div className="flex flex-col gap-6">
                            <div>
                                <label className="block text-sm font-bold text-text-muted uppercase tracking-widest mb-3 ml-2">
                                    Target Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter their name..."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 text-lg text-foreground placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-text-muted uppercase tracking-widest mb-3 ml-2">
                                    Select Vibe
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {vibes.map((v) => (
                                        <button
                                            key={v}
                                            onClick={() => setVibe(v)}
                                            className={cn(
                                                "px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border",
                                                vibe === v
                                                    ? "bg-brand-pink/20 border-brand-pink text-white shadow-[0_0_15px_rgba(255,105,180,0.2)]"
                                                    : "bg-foreground/5 border-foreground/5 text-text-muted hover:bg-foreground/10"
                                            )}
                                        >
                                            {v}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={generateRizz}
                                disabled={isGenerating}
                                className="w-full mt-4 flex items-center justify-center gap-3 bg-white text-black font-black py-5 rounded-2xl text-xl hover:bg-brand-pink hover:text-white transition-all shadow-xl shadow-brand-pink/10 disabled:opacity-50"
                            >
                                {isGenerating ? (
                                    <Loader2 className="h-6 w-6 animate-spin" />
                                ) : (
                                    <>Unleash Rizz <Sparkles className="h-5 w-5 fill-current" /></>
                                )}
                            </motion.button>
                        </div>

                        <div className="flex flex-col justify-center min-h-[300px]">
                            <AnimatePresence mode="wait">
                                {generatedLine ? (
                                    <motion.div
                                        key="luck"
                                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                                        className="relative p-8 rounded-[30px] bg-gradient-to-br from-brand-red/20 to-brand-purple/20 border border-brand-pink/20 shadow-2xl"
                                    >
                                        <div className="absolute -top-4 -left-4 bg-brand-pink p-3 rounded-2xl shadow-lg">
                                            <Heart className="h-5 w-5 text-white fill-current" />
                                        </div>

                                        <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed italic pr-4">
                                            "{generatedLine}"
                                        </p>

                                        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                                            <button
                                                onClick={copyToClipboard}
                                                className="flex items-center gap-2 text-sm font-bold text-brand-pink hover:text-white transition-colors"
                                            >
                                                <Copy size={16} /> {copied ? "Copied!" : "Copy"}
                                            </button>
                                            <button
                                                onClick={() => speak(generatedLine, "generator-result")}
                                                className={cn(
                                                    "flex items-center gap-2 text-sm font-bold transition-all",
                                                    isSpeaking === "generator-result" ? "text-white" : "text-brand-gold hover:text-white"
                                                )}
                                            >
                                                {isSpeaking === "generator-result" ? <Square size={16} /> : <Volume2 size={16} />}
                                                {isSpeaking === "generator-result" ? "Stop" : "Listen"}
                                            </button>
                                            <button className="flex items-center gap-2 text-sm font-bold text-text-muted hover:text-foreground transition-colors">
                                                <Share2 size={16} /> Share
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="empty"
                                        className="flex flex-col items-center justify-center text-zinc-600 animate-pulse"
                                    >
                                        <Heart size={64} className="mb-4 opacity-10" />
                                        <p className="font-bold uppercase tracking-widest text-xs">Waiting for magic...</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
