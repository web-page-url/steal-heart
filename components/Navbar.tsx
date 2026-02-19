"use client";

import { motion } from "framer-motion";
import { Heart, Menu, X, Sun, Moon, Palette } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Generate Rizz", href: "/#generate" },
    { name: "Categories", href: "/categories" },
    { name: "AI Guru", href: "/ai" },
    { name: "AI Rizz Lab", href: "/lab" },
    { name: "Pricing", href: "/pricing" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "About", href: "/about" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { theme, toggleTheme } = useTheme();

    return (
        <nav
            className={cn(
                "fixed left-0 right-0 top-0 z-50 flex items-center justify-center transition-all duration-500 py-6",
                isScrolled ? "py-4" : "py-8"
            )}
        >
            <div
                className={cn(
                    "flex w-[90%] max-w-7xl items-center justify-between px-6 py-3 transition-all duration-500",
                    "glass rounded-full",
                    isScrolled ? "shadow-lg shadow-brand-pink/5" : ""
                )}
            >
                <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="text-brand-pink"
                    >
                        <Heart className="h-6 w-6 fill-current" />
                    </motion.div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tighter text-foreground">
                            RizzVerse
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-brand-gold font-medium leading-tight">
                            Where Words Steal Hearts
                        </span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-foreground transition-colors capitalize tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-pink hover:bg-white/20 transition-colors"
                        title="Switch to Love Mode"
                    >
                        {theme === 'midnight' ? <Palette className="h-5 w-5" /> : <Heart className="h-5 w-5 fill-current" />}
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden sm:block rounded-full bg-gradient-to-r from-brand-red to-brand-pink px-6 py-2 text-sm font-bold text-white shadow-lg shadow-rose-500/20 transition-all hover:shadow-rose-500/40"
                    >
                        Generate Now
                    </motion.button>

                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-24 left-[5%] right-[5%] glass rounded-3xl p-8 flex flex-col gap-6 md:hidden z-40"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-medium text-white text-center"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="w-full rounded-full bg-gradient-to-r from-brand-red to-brand-pink py-4 text-lg font-bold text-white">
                        Generate Now
                    </button>
                </motion.div>
            )}
        </nav>
    );
}
