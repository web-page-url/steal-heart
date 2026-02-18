"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, MousePointer2, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20"
        >
            {/* Cinematic Background */}
            <div className="absolute inset-0 -z-10 bg-[#05010a]">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-red/10 via-brand-purple/5 to-transparent" />
                <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-brand-red/20 blur-[120px] rounded-full" />
                <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] bg-brand-purple/30 blur-[100px] rounded-full" />
            </div>

            {/* Floating Elements */}
            <motion.div style={{ y, opacity }} className="relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-pink/20 bg-brand-pink/10 px-6 py-2 backdrop-blur-md"
                >
                    <Sparkles className="h-4 w-4 text-brand-pink" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-pink">
                        Warning: May cause excessive blushing
                    </span>
                </motion.div>

                <h1 className="mb-6 max-w-5xl text-5xl font-black leading-[1.1] tracking-tight text-white md:text-8xl lg:text-9xl">
                    Stop Being <span className="text-gradient">Ignored.</span>
                    <br />
                    Start Being <span className="text-gradient">Irresistible.</span>
                </h1>

                <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                    AI-generated pick-up lines engineered to spark chemistry,
                    ignite dopamine, and steal hearts effortlessly.
                    The secret weapon of modern charm.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 105, 180, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-10 py-5 text-lg font-black text-black transition-all hover:bg-brand-pink hover:text-white"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            🔥 Generate My Rizz <MousePointer2 className="h-5 w-5" />
                        </span>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 rounded-full border border-white/20 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm"
                    >
                        💘 Explore Categories
                    </motion.button>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-500"
            >
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to rizz</span>
                <div className="h-12 w-[1px] bg-gradient-to-b from-brand-pink to-transparent" />
            </motion.div>

            {/* Background Hearts */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: Math.random() * 100 - 50 + "%",
                        y: "110%",
                        opacity: 0,
                        rotate: Math.random() * 360
                    }}
                    animate={{
                        y: "-10%",
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 20,
                        repeat: Infinity,
                        delay: i * 2
                    }}
                    className="absolute -z-20 text-brand-pink/10"
                >
                    <Heart size={40 + Math.random() * 60} fill="currentColor" />
                </motion.div>
            ))}
        </section>
    );
}
