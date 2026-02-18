"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, MousePointer2, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const galleryImages = [
    "/img/steal-heart-1.jpg",
    "/img/steal-heart-2.jpg",
    "/img/steal-heart-3.jpg",
    "/img/steal-heart-5.jpg",
    "/img/steal-heart-8.jpg",
];

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20"
        >
            {/* Cinematic Background */}
            <div className="absolute inset-0 bg-background z-0">
                {/* Desktop Background */}
                <img
                    src="/img/steal-heart-8.jpg"
                    alt="Cinematic Background"
                    className="hidden md:block absolute inset-0 h-full w-full object-cover opacity-60 object-center mix-blend-luminosity dark:mix-blend-normal"
                />
                {/* Mobile Background */}
                <img
                    src="/img/mobile-hero-img.jpg"
                    alt="Cinematic Background Mobile"
                    className="block md:hidden absolute inset-0 h-full w-full object-cover opacity-90 object-center dark:opacity-60"
                />
                <div className="absolute inset-0 bg-background transition-opacity duration-500" style={{ opacity: 'var(--overlay-opacity)' }} />
                <div
                    className="absolute inset-0 bg-gradient-to-b transition-all duration-500"
                    style={{ backgroundImage: `linear-gradient(to bottom, var(--hero-vignette), transparent 50%, var(--background))` }}
                />
            </div>

            {/* Floating Elements (Text) */}
            <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-7xl">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-4 md:mb-6 inline-flex items-center gap-2 rounded-full border border-brand-pink/30 bg-foreground/10 px-5 py-2 backdrop-blur-xl"
                >
                    <Sparkles className="h-3.5 w-3.5 text-brand-pink" />
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brand-pink">
                        Warning: May cause excessive blushing
                    </span>
                </motion.div>

                <h1
                    className="mb-3 md:mb-4 max-w-5xl text-4xl font-black leading-[1.1] tracking-tighter text-foreground md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-sm"
                >
                    Stop Being <span className="text-gradient">Ignored.</span>
                    <br />
                    Start Being <span className="text-gradient">Irresistible.</span>
                </h1>

                <p className="mx-auto mb-5 md:mb-6 max-w-xl text-base leading-relaxed text-text-muted md:text-lg font-medium">
                    AI-generated pick-up lines engineered to spark chemistry,
                    ignite dopamine, and steal hearts effortlessly.
                    The secret weapon of modern charm.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 105, 180, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-base md:text-lg font-black text-black transition-all hover:bg-brand-pink hover:text-white"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            🔥 Generate My Rizz <MousePointer2 className="h-5 w-5" />
                        </span>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base md:text-lg font-bold text-white backdrop-blur-sm"
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

            {/* Cinematic Floating Gallery */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-30">
                {galleryImages.map((src, i) => (
                    <motion.div
                        key={src}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2, duration: 1 }}
                        style={{
                            top: `${10 + (i * 20)}%`,
                            left: i % 2 === 0 ? "5%" : "85%",
                            rotate: i % 2 === 0 ? -10 : 10
                        }}
                        className="absolute rounded-2xl overflow-hidden glass border-white/10 hidden lg:block"
                    >
                        <Image
                            src={src}
                            alt={`Stolen Heart ${i}`}
                            width={200}
                            height={300}
                            className="object-cover transition-transform hover:scale-110 duration-700"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Background Hearts */}
            {mounted && [...Array(6)].map((_, i) => (
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
