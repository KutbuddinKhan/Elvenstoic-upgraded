'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const features = [
    {
        title: 'The 0-1M Growth System',
        value: '€497',
        description:
            'The complete roadmap of how I scaled organically from zero to over one million followers. No ads. No bots. Just pure strategy.',
    },
    {
        title: 'My Strategic Blueprint',
        value: '€297',
        description:
            'Learn how to structure your page like a media company, not just another random content account.',
    },
    {
        title: 'Market Research Deep Dive',
        value: '€197',
        description:
            'How I analyze competitors and create content that delivers EXACTLY what the market wants.',
    },
    {
        title: 'Content Positioning Framework',
        value: '€297',
        description:
            "Create posts that don't just look \"cool\", but magnetically attract followers.",
    },
    {
        title: 'Algorithm Domination Secrets',
        value: '€297',
        description:
            'Get Instagram to push your content to non-followers (98% reach like me).',
    },
    {
        title: 'BONUS: Viral Content Planning System',
        value: '€197',
        description:
            "My personal system for planning content days ahead that's guaranteed to hit.",
    },
];

const testimonials = [
    {
        handle: '@mindset.mirage',
        result: 'From 300 to 131,000+ followers in 6 months',
        achievement: 'Built a high-converting funnel → Now selling their own digital products',
        quote: 'The growth system changed everything!',
        image: '/upsell-1/MindsetMirageTesti.png',
    },
    {
        handle: '@byhopelesscore',
        result: 'From 0 to 167,000 followers in 4 months',
        achievement: 'Got reposted by JUSTIN BIEBER (yes, really!)',
        quote: 'Now building their own product ecosystem',
        image: '/upsell-1/PrimeValentinoTesti-justin.png',
    },
    {
        handle: '@elevenstoic',
        result: 'From 0 to 1 Million+ followers in 1.5 years',
        achievement: '88,000+ new followers in the last 30 days → Over 180M reach in 90 days',
        quote: '5-figure monthly income, fully systemized',
        image: '/upsell-1/ElevenstoicTestiGrowth.png',
    },
];

const UpsellContentSection = () => {
    return (
        <>
            {/* Features Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mb-12"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                    What You Get Inside Cinematic Studio VIP:
                </h3>
                <div className="space-y-4 md:space-y-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 md:p-6 shadow-sm backdrop-blur-sm">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-3">
                                <h4 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                                    🎯 {feature.title}
                                </h4>
                                <span className="text-green-400 font-bold text-base md:text-lg whitespace-nowrap">
                                    (Value: {feature.value})
                                </span>
                            </div>
                            <p className="text-sm md:text-base text-blue-100/80">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Testimonials Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mb-12"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                    Real Results. Real Accounts. Real Transformation.
                </h3>
                <div className="space-y-4 md:space-y-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-r from-green-900/40 to-green-800/40 border border-green-600/50 rounded-lg p-4 md:p-6 text-center backdrop-blur-sm"
                        >
                            <h4 className="font-bold text-green-300 text-base md:text-lg mb-2">{t.handle}</h4>
                            <p className="text-green-200/90 text-sm md:text-base mb-2">{t.result}</p>
                            <p className="text-green-200/90 text-sm md:text-base mb-2">{t.achievement}</p>
                            <p className="text-green-300 font-semibold italic text-sm md:text-base mb-4">"{t.quote}"</p>

                            <div className="flex justify-center">
                                <div className="relative w-full max-w-lg md:max-w-2xl h-[250px] sm:h-[300px] md:h-[400px] mx-auto rounded-xl overflow-hidden bg-transparent">
                                    <Image
                                        src={t.image}
                                        alt={t.handle}
                                        fill
                                        className="object-contain rounded-xl"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 768px"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6 md:mt-8">
                    <p className="text-xl md:text-2xl font-bold text-white">You Could Be Next.</p>
                    <p className="text-lg md:text-xl text-red-400 font-semibold mt-2">But only if you act NOW.</p>
                </div>
            </motion.div>

            {/* Why Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="bg-slate-800/50 rounded-lg p-6 md:p-8 mb-12 backdrop-blur-sm border border-slate-700/50"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Why Am I Offering You This?
                </h3>
                <p className="text-base md:text-lg text-blue-100/80 mb-4">Honestly?</p>
                <p className="text-base md:text-lg text-blue-100/80 mb-4">Because I know how it feels.</p>
                <div className="space-y-3 text-base md:text-lg text-blue-100/80 mb-6">
                    <p>To create amazing content but have nobody see it.</p>
                    <p>To edit for hours only to get 100 views.</p>
                    <p>To watch other accounts explode while you're stuck.</p>
                </div>
                <p className="text-base md:text-lg text-blue-100/80 mb-4">I was exactly where you are now.</p>
                <p className="text-base md:text-lg font-semibold text-white mb-4">The difference? I cracked the system.</p>
                <p className="text-base md:text-lg font-semibold text-blue-300">And now I want you to have it too.</p>
            </motion.div>

            {/* Shortcut Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="text-center mb-12"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    This Is Your Shortcut.
                </h3>
                <div className="space-y-3 md:space-y-4 text-base md:text-lg text-blue-100/80">
                    <p>No 1.5 years of trial and error.</p>
                    <p>No sleepless nights full of self-doubt.</p>
                    <p>No wasted time on strategies that don't work.</p>
                    <p className="text-lg md:text-xl font-bold text-blue-300">Just pure, distilled knowledge.</p>
                    <p className="text-base md:text-lg font-semibold text-white">
                        Ready to apply. Ready to grow. Ready to explode.
                    </p>
                </div>
            </motion.div>

            {/* Offer Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-600/50 rounded-lg p-6 md:p-8 mb-12 backdrop-blur-sm"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-red-300 mb-6">
                    IMPORTANT: This Is a ONE-TIME OFFER
                </h3>
                <div className="space-y-3 text-base md:text-lg text-red-200/90 mb-6">
                    <div className="flex items-center gap-3">
                        <Lock className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                        <span>This offer is NOT on my website</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Lock className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                        <span>You will NEVER see it again</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Lock className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                        <span>It's ONLY available here - because you've proven you're serious</span>
                    </div>
                </div>
                <p className="text-base md:text-lg text-red-200/90 mb-4">
                    After this page, it's gone. Forever.
                </p>
                <div className="text-center">
                    <p className="text-lg md:text-xl text-blue-100/80 mb-2">
                        The regular price? <span className="line-through">€497</span>
                    </p>
                    <p className="text-2xl md:text-3xl font-bold text-red-400 mb-4">Your price today? Only €197</p>
                    <p className="text-base md:text-lg font-semibold text-red-300">
                        That's 60% OFF – exclusively for action takers like you.
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default UpsellContentSection;
