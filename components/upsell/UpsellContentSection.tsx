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
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    What You Get Inside Cinematic Studio VIP:
                </h3>
                <div className="space-y-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <div className="flex items-start justify-between mb-3">
                                <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    🎯 {feature.title}
                                </h4>
                                <span className="text-green-600 font-bold text-lg">
                                    (Value: {feature.value})
                                </span>
                            </div>
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Testimonials Section */}
            {/* Testimonials Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mb-12"
            >
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Real Results. Real Accounts. Real Transformation.
                </h3>
                <div className="space-y-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                        >
                            <h4 className="font-bold text-green-800 text-lg mb-2">{t.handle}</h4>
                            <p className="text-green-700 mb-2">{t.result}</p>
                            <p className="text-green-700 mb-2">{t.achievement}</p>
                            <p className="text-green-800 font-semibold italic mb-4">"{t.quote}"</p>

                            <div className="flex justify-center">
                                <div className="relative w-full max-w-2xl h-[400px] mx-auto rounded-xl overflow-hidden bg-transparent">
                                    <Image
                                        src={t.image}
                                        alt={t.handle}
                                        fill
                                        className="object-contain rounded-xl"
                                        sizes="(max-width: 768px) 100vw, 768px"
                                        loading="lazy"
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <p className="text-2xl font-bold text-gray-900">You Could Be Next.</p>
                    <p className="text-xl text-red-600 font-semibold mt-2">But only if you act NOW.</p>
                </div>
            </motion.div>

            {/* Why Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="bg-gray-50 rounded-lg p-8 mb-12"
            >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Am I Offering You This?
                </h3>
                <p className="text-lg text-gray-700 mb-4">Honestly?</p>
                <p className="text-lg text-gray-700 mb-4">Because I know how it feels.</p>
                <div className="space-y-3 text-lg text-gray-700 mb-6">
                    <p>To create amazing content but have nobody see it.</p>
                    <p>To edit for hours only to get 100 views.</p>
                    <p>To watch other accounts explode while you're stuck.</p>
                </div>
                <p className="text-lg text-gray-700 mb-4">I was exactly where you are now.</p>
                <p className="text-lg font-semibold text-gray-900 mb-4">The difference? I cracked the system.</p>
                <p className="text-lg font-semibold text-blue-600">And now I want you to have it too.</p>
            </motion.div>

            {/* Shortcut Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="text-center mb-12"
            >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    This Is Your Shortcut.
                </h3>
                <div className="space-y-4 text-lg text-gray-700">
                    <p>No 1.5 years of trial and error.</p>
                    <p>No sleepless nights full of self-doubt.</p>
                    <p>No wasted time on strategies that don't work.</p>
                    <p className="text-xl font-bold text-blue-600">Just pure, distilled knowledge.</p>
                    <p className="text-lg font-semibold text-gray-900">
                        Ready to apply. Ready to grow. Ready to explode.
                    </p>
                </div>
            </motion.div>

            {/* Offer Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12"
            >
                <h3 className="text-3xl font-bold text-red-800 mb-6">
                    IMPORTANT: This Is a ONE-TIME OFFER
                </h3>
                <div className="space-y-3 text-lg text-red-700 mb-6">
                    <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5" />
                        <span>This offer is NOT on my website</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5" />
                        <span>You will NEVER see it again</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5" />
                        <span>It's ONLY available here - because you've proven you're serious</span>
                    </div>
                </div>
                <p className="text-lg text-red-700 mb-4">
                    After this page, it's gone. Forever.
                </p>
                <div className="text-center">
                    <p className="text-xl text-gray-700 mb-2">The regular price? <span className="line-through">€497</span></p>
                    <p className="text-3xl font-bold text-red-600 mb-4">Your price today? Only €197</p>
                    <p className="text-lg font-semibold text-red-700">
                        That's 60% OFF – exclusively for action takers like you.
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default UpsellContentSection;
