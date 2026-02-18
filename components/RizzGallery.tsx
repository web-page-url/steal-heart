"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/img/steal-heart-1.jpg",
    "/img/steal-heart-2.jpg",
    "/img/steal-heart-3.jpg",
    "/img/steal-heart-4.jpg",
    "/img/steal-heart-5.jpg",
    "/img/steal-heart-6.jpg",
    "/img/steal-heart-7.jpg",
    "/img/steal-heart-8.jpg",
    "/img/steal-heart-9.jpg",
];

export default function RizzGallery() {
    return (
        <section className="py-24 px-4 overflow-hidden bg-foreground/5">
            <div className="mx-auto max-w-7xl text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                    The <span className="text-gradient">Artifacts.</span>
                </h2>
                <p className="text-zinc-500 font-medium">Visual proof of stolen hearts.</p>
            </div>

            <div className="flex overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex gap-6 whitespace-nowrap"
                >
                    {[...images, ...images].map((src, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="relative h-[400px] w-[300px] flex-shrink-0 overflow-hidden rounded-[32px] glass border-white/10"
                        >
                            <Image
                                src={src}
                                alt={`Premium Rizz ${i}`}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
