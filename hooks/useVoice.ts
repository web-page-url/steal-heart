"use client";

import { useState, useCallback, useEffect } from "react";

export const useVoice = () => {
    const [isSpeaking, setIsSpeaking] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    const stop = useCallback(() => {
        if (typeof window !== "undefined") {
            window.speechSynthesis.cancel();
            setIsSpeaking(null);
            setIsPaused(false);
        }
    }, []);

    const pause = useCallback(() => {
        if (typeof window !== "undefined" && window.speechSynthesis.speaking) {
            window.speechSynthesis.pause();
            setIsPaused(true);
        }
    }, []);

    const resume = useCallback(() => {
        if (typeof window !== "undefined" && window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
        }
    }, []);

    const speak = useCallback((text: string, id: string, lang: "hi" | "en" = "en") => {
        if (typeof window === "undefined") return;

        if (isSpeaking === id) {
            stop();
            return;
        }

        window.speechSynthesis.cancel();
        // Remove emojis and asterisks/markdown for cleaner speech
        const cleanText = text.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}]/gu, '').replace(/\*\*/g, '');
        const utterance = new SpeechSynthesisUtterance(cleanText);

        const voices = window.speechSynthesis.getVoices();

        if (lang === "hi") {
            utterance.lang = "hi-IN";
            // Priorities: Microsoft Swara (Female), Google Hindi (Female)
            utterance.voice =
                voices.find(v => v.name.includes("Swara")) ||
                voices.find(v => v.name.includes("Kalpana")) ||
                voices.find(v => v.lang.replace('_', '-').toLowerCase() === "hi-in" && v.name.includes("Female")) ||
                voices.find(v => v.lang.toLowerCase().startsWith("hi")) ||
                null;
            utterance.rate = 0.85;
            utterance.pitch = 1.1; // Slightly higher pitch for "romantic/feminine" feel
        } else {
            utterance.lang = "en-IN";
            // Priorities: Samantha (Premium Female), Microsoft Zira (Female), Google English (Female)
            utterance.voice =
                voices.find(v => v.name.includes("Samantha")) ||
                voices.find(v => v.name.includes("Zira")) ||
                voices.find(v => v.name.includes("Google US English") && v.name.includes("Female")) ||
                voices.find(v => v.lang.includes("en-IN") && v.name.includes("Female")) ||
                voices.find(v => v.lang.includes("en-GB") && v.name.includes("Female")) ||
                voices.find(v => v.lang.includes("en-US") && v.name.includes("Female")) ||
                null;
            utterance.rate = 0.88;
            utterance.pitch = 1.05;
        }

        utterance.onend = () => {
            setIsSpeaking(null);
            setIsPaused(false);
        };
        utterance.onerror = () => {
            setIsSpeaking(null);
            setIsPaused(false);
        };

        setIsSpeaking(id);
        setIsPaused(false);
        window.speechSynthesis.speak(utterance);
    }, [isSpeaking, stop]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (typeof window !== "undefined") {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    return { speak, stop, pause, resume, isSpeaking, isPaused };
};
