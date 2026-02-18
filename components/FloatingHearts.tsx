"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<any[]>([]);

    useEffect(() => {
        // Generate constant hearts
        const newHearts = [...Array(15)].map((_, i) => ({
            id: i,
            x: Math.random() * 100 + "%",
            delay: Math.random() * 20,
            duration: 15 + Math.random() * 25,
            size: 10 + Math.random() * 40,
            opacity: 0.05 + Math.random() * 0.1
        }));
        setHearts(newHearts);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: "110%", x: heart.x, opacity: 0, rotate: 0 }}
                    animate={{
                        y: "-10%",
                        opacity: [0, heart.opacity, 0],
                        rotate: 360
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear"
                    }}
                    className="absolute text-brand-pink"
                >
                    <Heart size={heart.size} fill="currentColor" />
                </motion.div>
            ))}
        </div>
    );
}
