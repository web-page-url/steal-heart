"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Send, ArrowLeft, Sparkles, User, Bot,
    Copy, Check, RefreshCw, Heart, Zap, Flame
} from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function AIRizzPage() {
    const router = useRouter();
    const [input, setInput] = React.useState("");
    const [messages, setMessages] = React.useState<{ id: number; text: string; sender: "user" | "ai"; time: string }[]>([]);
    const [isGenerating, setIsGenerating] = React.useState(false);
    const [copiedId, setCopiedId] = React.useState<number | null>(null);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isGenerating]);

    const callGeminiAPI = async (prompt: string): Promise<string> => {
        const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

        if (!GEMINI_API_KEY) {
            return "Connection to the RizzVerse Cloud is currently veiled. Please ensure your API key is configured. (API key missing)";
        }

        try {
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            const systemPrompt = `You are the "AI Rizz Guru" for the RizzVerse platform.
            
Context:
The user needs the perfect, personalized pickup line. They will provide a situation, a personality type, or a specific person they want to talk to.

Tone & Instructions:
- Respond as a master of charm and social dynamics.
- Keep responses witty, creative, and highly effective.
- Provide 2-3 variations: One "Smooth/Romantic", one "Funny/Witty", and one "Bold/Savage".
- Use emojis effectively ✨, 🔥, 💖, 🪄.
- Format the output clearly with labels for each style.
- Keep the language modern and relatable (Gen-Z/Millennial appeal).

User query: ${prompt}`;

            const result = await model.generateContent(systemPrompt);
            const response = await result.response;
            return response.text().trim();
        } catch (error) {
            console.error('Gemini API error:', error);
            return "The Rizz algorithms are experiencing high-energy interference. Please try again soon.";
        }
    };

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isGenerating) return;

        const userMsg = {
            id: Date.now(),
            text: input,
            sender: "user" as const,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsGenerating(true);

        const aiResponse = await callGeminiAPI(input);

        const aiMsg = {
            id: Date.now() + 1,
            text: aiResponse,
            sender: "ai" as const,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, aiMsg]);
        setIsGenerating(false);
    };

    const handleCopy = (text: string, id: number) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-outfit">
            <Navbar />

            <main className="pt-20 md:pt-24 pb-0 md:pb-4 px-0 md:px-4 flex flex-col h-screen md:h-[calc(100vh-40px)] max-w-full md:max-w-[95%] xl:max-w-7xl mx-auto">
                {/* Header info */}
                <div className="text-center mb-4 md:mb-6 shrink-0 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink mb-2 md:mb-4"
                    >
                        <Sparkles size={14} className="fill-current" />
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">Neural Rizz Engine</span>
                    </motion.div>
                    <h1 className="text-3xl md:text-5xl font-black mb-1 tracking-tighter">
                        AI Rizz <span className="text-gradient">Guru.</span>
                    </h1>
                </div>

                {/* Chat Container */}
                <div className="flex-1 min-h-0 flex flex-col glass rounded-t-[40px] md:rounded-[40px] border-x-0 md:border-x border-t md:border-t border-b-0 md:border-b border-white/5 overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-pink/[0.02] to-transparent pointer-events-none" />

                    {/* Message Area */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 scrollbar-hide"
                    >
                        {messages.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center text-center opacity-30 select-none">
                                <Bot size={64} className="mb-4 text-brand-pink" />
                                <p className="text-sm font-bold uppercase tracking-widest italic">Waiting for your mission, Agent.</p>
                                <p className="text-xs max-w-[200px] mt-2">Example: "Help me talk to a photographer who loves sunsets."</p>
                            </div>
                        )}

                        <AnimatePresence>
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className={cn(
                                        "flex w-full gap-4",
                                        msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                                    )}
                                >
                                    <div className={cn(
                                        "h-10 w-10 shrink-0 rounded-2xl flex items-center justify-center",
                                        msg.sender === "user" ? "bg-foreground/10 text-foreground" : "bg-brand-pink text-white shadow-lg shadow-brand-pink/20"
                                    )}>
                                        {msg.sender === "user" ? <User size={20} /> : <Sparkles size={20} className="fill-current" />}
                                    </div>

                                    <div className={cn(
                                        "max-w-[95%] group",
                                        msg.sender === "user" ? "text-right" : "text-left"
                                    )}>
                                        <div className={cn(
                                            "inline-block rounded-[28px] p-6 md:p-8 text-xl relative",
                                            msg.sender === "user"
                                                ? "bg-foreground/5 border border-white/5 text-foreground rounded-tr-none"
                                                : "bg-white/5 border border-brand-pink/20 text-foreground rounded-tl-none"
                                        )}>
                                            <div className="whitespace-pre-wrap leading-relaxed">
                                                {msg.text}
                                            </div>

                                            {msg.sender === "ai" && (
                                                <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-4">
                                                    <button
                                                        onClick={() => handleCopy(msg.text, msg.id)}
                                                        className="text-sm font-black uppercase tracking-widest text-brand-pink hover:text-white transition-colors flex items-center gap-2"
                                                    >
                                                        {copiedId === msg.id ? <><Check size={18} /> Copied</> : <><Copy size={18} /> Copy Rizz</>}
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-[10px] font-bold text-text-muted mt-2 opacity-50 uppercase tracking-widest">
                                            {msg.time}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {isGenerating && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex gap-4"
                            >
                                <div className="h-10 w-10 shrink-0 rounded-2xl bg-brand-pink text-white flex items-center justify-center animate-pulse">
                                    <Sparkles size={20} className="fill-current" />
                                </div>
                                <div className="bg-white/5 border border-brand-pink/20 rounded-[28px] rounded-tl-none p-6 flex gap-2 items-center">
                                    <span className="w-2 h-2 rounded-full bg-brand-pink animate-bounce [animation-delay:-0.3s]" />
                                    <span className="w-2 h-2 rounded-full bg-brand-pink animate-bounce [animation-delay:-0.15s]" />
                                    <span className="w-2 h-2 rounded-full bg-brand-pink animate-bounce" />
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-6 md:p-8 border-t border-white/5 bg-foreground/[0.02]">
                        <form onSubmit={handleSend} className="relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Describe your target or situation..."
                                className="w-full bg-foreground/5 border border-foreground/10 rounded-[24px] pl-6 pr-20 py-5 text-lg text-foreground placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 transition-all"
                            />
                            <div className="absolute right-3 top-3 bottom-3 flex gap-2">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    disabled={isGenerating || !input.trim()}
                                    className="bg-brand-pink text-white px-6 rounded-2xl flex items-center justify-center hover:bg-brand-red disabled:opacity-50 transition-colors shadow-lg shadow-brand-pink/20"
                                >
                                    <Send size={20} />
                                </motion.button>
                            </div>
                        </form>
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                            {["Intelligent", "Book Lover", "Gym Girl", "Gamer Guy", "Fashionista"].map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setInput(`Give me some lines for a ${tag}`)}
                                    className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-foreground/5 border border-white/5 text-text-muted hover:text-brand-pink hover:bg-brand-pink/10 transition-all"
                                >
                                    #{tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => router.push('/')}
                        className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-foreground transition-colors inline-flex items-center gap-2"
                    >
                        <ArrowLeft size={14} /> Back to Dashboard
                    </button>
                </div>
            </main>

            <footer className="py-8 border-t border-white/5 text-center text-zinc-600">
                <p className="text-xs font-medium tracking-widest uppercase">
                    Neural Rizz Engine <span className="text-brand-pink">v0.1.0</span>
                </p>
            </footer>
        </div>
    );
}
