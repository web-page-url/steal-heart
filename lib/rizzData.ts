import {
    Heart, Sparkles, Flame, Smile, Zap, Crown, Ghost,
    Briefcase, Feather, MessageSquare
} from "lucide-react";

export type RizzVibe =
    | "Romantic"
    | "Funny"
    | "Savage"
    | "Cute"
    | "Bollywood"
    | "Dark Mysterious"
    | "Luxury Gentleman"
    | "Soft Girl Energy"
    | "Shayari Mode";

export interface RizzLine {
    text: string;
    author?: string;
    vibe: RizzVibe;
}

export interface CategoryData {
    slug: string;
    title: string;
    desc: string;
    icon: any;
    vibe: RizzVibe;
    preview: string;
}

export const CATEGORY_DATA: CategoryData[] = [
    {
        slug: "romantic-royalty",
        title: "Romantic Royalty",
        vibe: "Romantic",
        icon: Crown,
        desc: "Classic charm for the pure at heart. These lines are designed to make anyone feel like royalty in your eyes.",
        preview: "My universe feels incomplete without you."
    },
    {
        slug: "funny-but-smooth",
        title: "Funny But Smooth",
        vibe: "Funny",
        icon: Smile,
        desc: "Break the ice with a perfect laugh. Charm them with your wit and keep the conversation flowing effortlessly.",
        preview: "Are you Google? You're all I've been searching for."
    },
    {
        slug: "savage-bold",
        title: "Savage & Bold",
        vibe: "Savage",
        icon: Flame,
        desc: "High risk, high reward. For when you want to make a statement that's impossible to ignore.",
        preview: "If looks could kill, you'd be a weapon."
    },
    {
        slug: "cute-innocent",
        title: "Cute & Innocent",
        vibe: "Cute",
        icon: Heart,
        desc: "Soft words that melt hearts. Perfect for those sweet moments where less is definitely more.",
        preview: "I must be a snowflake because I've fallen for you."
    },
    {
        slug: "desi-bollywood",
        title: "Desi Bollywood",
        vibe: "Bollywood",
        icon: Zap,
        desc: "Channel your inner main character with dramatic lines that feel straight out of a blockbuster movie.",
        preview: "Itni shiddat se maine tumhe paane ki koshish ki hai..."
    },
    {
        slug: "dark-mysterious",
        title: "Dark & Mysterious",
        vibe: "Dark Mysterious",
        icon: Ghost,
        desc: "Deep, intriguing vibes for those late-night conversations that go beyond the surface.",
        preview: "The stars are jealous of the light you hide."
    },
    {
        slug: "luxury-ceo-vibes",
        title: "Luxury CEO Vibes",
        vibe: "Luxury Gentleman",
        icon: Briefcase,
        desc: "Sophisticated charm for the elite. Perfect for making a lasting impression of power and elegance.",
        preview: "Excellence is a habit, you are the definition."
    },
    {
        slug: "shayari-special",
        title: "Shayari Special",
        vibe: "Shayari Mode",
        icon: Feather,
        desc: "Poetic depth that touches the soul. Classic Urdu and Hindi influenced lines for deep connection.",
        preview: "Log kehte hain mohabbat ek bar hoti hai..."
    },
    {
        slug: "insta-dm-openers",
        title: "Insta DM Openers",
        vibe: "Savage",
        icon: MessageSquare,
        desc: "The perfect hooks for social media. Stand out in their notifications from the very first word.",
        preview: "Your profile is a masterpiece, can I be the critic?"
    }
];

export const RIZZ_LINES: RizzLine[] = [
    // Romantic
    { text: "Are you a magician? Because whenever I look at you, everyone else disappears.", vibe: "Romantic" },
    { text: "Do you have a map? I keep getting lost in your eyes.", vibe: "Romantic" },
    { text: "If beauty were time, you’d be an eternity.", vibe: "Romantic" },
    { text: "Are you made of stardust? Because my universe feels incomplete without you.", vibe: "Romantic" },
    { text: "I'd never play hide and seek with you because someone like you is impossible to find.", vibe: "Romantic" },
    { text: "If I had a flower for every time I thought of you, I could walk through my garden forever.", vibe: "Romantic" },

    // Funny
    { text: "Are you made of copper and tellurium? Because you're Cu-Te.", vibe: "Funny" },
    { text: "Is your name Google? Because you've got everything I've been searching for.", vibe: "Funny" },
    { text: "If you were a vegetable, you'd be a cute-cumber!", vibe: "Funny" },
    { text: "Do you have Wi-Fi? Because I'm feeling a connection.", vibe: "Funny" },
    { text: "Are you a keyboard? Because you're just my type.", vibe: "Funny" },
    { text: "Is your name 'Summer'? Because you're hot and I'm ready for a vacation.", vibe: "Funny" },

    // Savage
    { text: "If looks could kill, you'd be a weapon of mass destruction.", vibe: "Savage" },
    { text: "Are you a parking ticket? Because you've got FINE written all over you.", vibe: "Savage" },
    { text: "I was going to wait for you to talk to me, but I'm too impatient for perfection.", vibe: "Savage" },
    { text: "My phone is broken. It doesn't have your number in it.", vibe: "Savage" },
    { text: "I'm not a photographer, but I can definitely picture us together.", vibe: "Savage" },
    { text: "You’re so beautiful that I forgot my pick-up line.", vibe: "Savage" },

    // Cute
    { text: "Do you have a Band-Aid? Because I just scraped my knee falling for you.", vibe: "Cute" },
    { text: "I must be a snowflake because I've fallen for you.", vibe: "Cute" },
    { text: "Are you a camera? Every time I look at you, I smile.", vibe: "Cute" },
    { text: "I’m learning about important dates in history. Do you want to be one of them?", vibe: "Cute" },
    { text: "You look like you're cold. Want to use me as a blanket?", vibe: "Cute" },

    // Bollywood
    { text: "Itni shiddat se maine tumhe paane ki koshish ki hai, ki har zarre ne mujhe tumse milane ki saazish ki hai.", vibe: "Bollywood" },
    { text: "Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hain, Senorita.", vibe: "Bollywood" },
    { text: "Ek pal ka jeena, phir toh hai jaana... but with you, I'd stay forever.", vibe: "Bollywood" },
    { text: "Tumhare jaise log humare khwabon mein nahi, seedha dil mein aate hain.", vibe: "Bollywood" },

    // Dark Mysterious
    { text: "I don't believe in shadows, but I'd follow yours anywhere.", vibe: "Dark Mysterious" },
    { text: "The stars are jealous of the light you hide behind those eyes.", vibe: "Dark Mysterious" },
    { text: "There's a secret in the way you look at the moon, and I want to be the one to hear it.", vibe: "Dark Mysterious" },
    { text: "Some souls are just meant to be found in the quiet moments between heartbeats.", vibe: "Dark Mysterious" },

    // Luxury Gentleman
    { text: "A vintage wine can't compete with the complexity of your presence.", vibe: "Luxury Gentleman" },
    { text: "Excellence is a habit, but you seem to be the definition of it.", vibe: "Luxury Gentleman" },
    { text: "Investments usually take time, but meeting you was an instant dividend.", vibe: "Luxury Gentleman" },
    { text: "Success is the goal, but you're the ultimate reward.", vibe: "Luxury Gentleman" },

    // Shayari Mode
    { text: "Tere muskurane ka andaaz kuch aisa hai, jaise sadiyon ki pyas bujh gayi ho.", vibe: "Shayari Mode" },
    { text: "Log kehte hain mohabbat ek bar hoti hai, par main jab tumhe dekhta hoon, mujhe har bar hoti hai.", vibe: "Shayari Mode" },
    { text: "Khuda ki fursat mein banaya ek haseen khwaab ho tum.", vibe: "Shayari Mode" },
    { text: "Dil ki dhadkan mein tum ho, ya tumhari yaad hi kafi hai.", vibe: "Shayari Mode" }
];

export const VIBE_COLORS: Record<RizzVibe, string> = {
    Romantic: "from-rose-500 to-pink-600",
    Funny: "from-yellow-400 to-orange-500",
    Savage: "from-purple-600 to-indigo-700",
    Cute: "from-pink-300 to-rose-400",
    Bollywood: "from-orange-500 to-red-600",
    "Dark Mysterious": "from-zinc-800 to-black",
    "Luxury Gentleman": "from-amber-700 to-yellow-900",
    "Soft Girl Energy": "from-pastel-pink to-white",
    "Shayari Mode": "from-emerald-600 to-teal-800"
};
