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
    const [copiedId, setCopiedId] = React.useState<number | string | null>(null);
    const [isMounted, setIsMounted] = React.useState(false);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    // Persistence logic
    React.useEffect(() => {
        setIsMounted(true);
        const saved = localStorage.getItem("rizzverse_ai_chats");
        if (saved) {
            try {
                setMessages(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse rizz chats", e);
            }
        }
    }, []);

    React.useEffect(() => {
        if (isMounted) {
            localStorage.setItem("rizzverse_ai_chats", JSON.stringify(messages));
        }
    }, [messages, isMounted]);

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isGenerating]);

    const clearHistory = () => {
        if (window.confirm("Are you sure you want to clear your Rizz history? This cannot be undone.")) {
            setMessages([]);
            localStorage.removeItem("rizzverse_ai_chats");
        }
    };

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
- Provide EXACTLY 3 variations: "Smooth/Romantic", "Funny/Witty", and "Bold/Savage".
- Use the following EXACT structure for the response so I can parse it:

[STYLE_START: Smooth & Romantic]
(Pickup line here with emojis)
[STYLE_END]

[STYLE_START: Funny & Witty]
(Pickup line here with emojis)
[STYLE_END]

[STYLE_START: Bold & Savage]
(Pickup line here with emojis)
[STYLE_END]

(Optional: Add a legendary master tip at the end starting with "MASTER_TIP: ")

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

    const handleCopy = (text: string, id: string | number) => {
        navigator.clipboard.writeText(text);
        setCopiedId(typeof id === 'number' ? id : 999); // Placeholder for sub-ids or just use string
        if (typeof id === 'string') {
            // Logic for individual card copy state
        }
        setCopiedId(id as any);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const parseAIResponse = (text: string) => {
        const variations: { style: string, line: string, icon: any }[] = [];
        const styles = [
            { name: "Smooth & Romantic", icon: Heart, color: "text-brand-pink" },
            { name: "Funny & Witty", icon: Zap, color: "text-brand-gold" },
            { name: "Bold & Savage", icon: Flame, color: "text-brand-red" }
        ];

        styles.forEach(style => {
            const regex = new RegExp(`\\[STYLE_START: ${style.name}\\]([\\s\\S]*?)\\[STYLE_END\\]`, 'i');
            const match = text.match(regex);
            if (match && match[1]) {
                variations.push({
                    style: style.name,
                    line: match[1].trim(),
                    icon: style.icon
                });
            }
        });

        const tipMatch = text.match(/MASTER_TIP:([\s\S]*)$/i);
        const tip = tipMatch ? tipMatch[1].trim() : null;

        return { variations, tip };
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
                        className="flex-1 overflow-y-auto p-4 md:p-10 space-y-8 scrollbar-hide"
                    >
                        {messages.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center text-center opacity-30 select-none">
                                <Bot size={64} className="mb-4 text-brand-pink" />
                                <p className="text-sm font-bold uppercase tracking-widest italic">Waiting for your mission, Agent.</p>
                                <p className="text-xs max-w-[200px] mt-2">Example: "Help me talk to a photographer who loves sunsets."</p>
                            </div>
                        )}

                        <AnimatePresence>
                            {messages.map((msg) => {
                                const isAI = msg.sender === "ai";
                                const parsed = isAI ? parseAIResponse(msg.text) : null;

                                return (
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
                                            "max-w-[95%] xl:max-w-4xl group",
                                            msg.sender === "user" ? "text-right" : "text-left"
                                        )}>
                                            {isAI && parsed && parsed.variations.length > 0 ? (
                                                <div className="space-y-4">
                                                    {parsed.variations.map((v, idx) => (
                                                        <motion.div
                                                            key={`${msg.id}-${idx}`}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.1 }}
                                                            className="glass rounded-3xl p-6 md:p-8 border-white/10 bg-white/[0.03] group/card hover:bg-white/[0.05] transition-all relative overflow-hidden"
                                                        >
                                                            <div className="absolute top-0 left-0 w-1 h-full bg-brand-pink opacity-50" />
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <v.icon size={18} className="text-brand-pink" />
                                                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-pink">{v.style}</span>
                                                            </div>
                                                            <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6 italic">"{v.line}"</p>

                                                            <button
                                                                onClick={() => handleCopy(v.line, `${msg.id}-${idx}`)}
                                                                className={cn(
                                                                    "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                                                                    copiedId === `${msg.id}-${idx}`
                                                                        ? "bg-brand-gold text-black scale-95"
                                                                        : "bg-brand-pink/10 text-brand-pink hover:bg-brand-pink hover:text-white"
                                                                )}
                                                            >
                                                                {copiedId === `${msg.id}-${idx}` ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy Line</>}
                                                            </button>
                                                        </motion.div>
                                                    ))}

                                                    {parsed.tip && (
                                                        <div className="p-5 rounded-2xl bg-brand-gold/5 border border-brand-gold/20 flex gap-4">
                                                            <div className="shrink-0 text-brand-gold mt-0.5"><Bot size={20} /></div>
                                                            <div className="text-sm font-medium text-brand-gold italic">
                                                                <span className="font-black uppercase tracking-widest mr-2">Guru Tip:</span>
                                                                {parsed.tip}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className={cn(
                                                    "inline-block rounded-[28px] p-6 md:p-8 text-xl relative",
                                                    msg.sender === "user"
                                                        ? "bg-foreground/5 border border-white/5 text-foreground rounded-tr-none"
                                                        : "bg-white/5 border border-brand-pink/20 text-foreground rounded-tl-none"
                                                )}>
                                                    <div className="whitespace-pre-wrap leading-relaxed">
                                                        {msg.text}
                                                    </div>
                                                </div>
                                            )}
                                            <div className="text-[10px] font-bold text-text-muted mt-2 opacity-50 uppercase tracking-widest">
                                                {msg.time}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
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

                <div className="mt-8 text-center flex items-center justify-center gap-8">
                    <button
                        onClick={() => router.push('/')}
                        className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-foreground transition-colors inline-flex items-center gap-2"
                    >
                        <ArrowLeft size={14} /> Back to Dashboard
                    </button>

                    {messages.length > 0 && (
                        <button
                            onClick={clearHistory}
                            className="text-xs font-black uppercase tracking-[0.2em] text-brand-red/50 hover:text-brand-red transition-colors inline-flex items-center gap-2"
                        >
                            <RefreshCw size={14} /> Clear History
                        </button>
                    )}
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
