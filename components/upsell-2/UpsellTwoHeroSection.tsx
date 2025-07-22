'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Star, DollarSign, Clock } from 'lucide-react';
import Image from 'next/image';

const Upsell2HeroSection = () => {
    return (
        <>
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    You Have The Content. You Have The Growth.{' '}
                    <span className="text-green-600">Now Get The MONEY.</span>
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                    Turn Your Instagram Following Into a Real Business That Pays You Every Single Month
                </p>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                    <p className="text-lg font-semibold text-yellow-800">
                        This is NOT part of Cinematic Studio or VIP - This is the MONETIZATION layer.
                    </p>
                </div>
            </motion.div>

            {/* Reality Check Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8"
            >
                <h2 className="text-2xl font-bold text-red-800 mb-4">
                    Real talk for a second... 🚨
                </h2>
                <div className="space-y-3 text-red-700">
                    <p>How many creators do you know with 50K, 100K, even 500K followers...</p>
                    <p className="font-semibold">Who are still broke?</p>
                    <p>They post every day. They get millions of views. Their content is fire.</p>
                    <p className="font-semibold text-xl">But their bank account? Empty.</p>
                </div>
                <div className="mt-6 bg-white rounded-lg p-4">
                    <p className="text-red-800 font-semibold">
                        Meanwhile, I'm sitting here with a faceless brand, making over €30,000 in the last 90 days from multiple different income streams.
                    </p>
                    <p className="text-red-700 mt-2">Not from sponsorships I have to beg for.</p>
                    <p className="text-red-700">Not from selling my soul to brands.</p>
                    <p className="text-xl font-bold text-red-800 mt-2">From a system. A real business. Built on Instagram.</p>
                </div>
            </motion.div>

            {/* Understanding Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
            >
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Here's What Most Creators Don't Understand:
                </h3>
                <div className="bg-blue-50 rounded-lg p-8">
                    <div className="space-y-4 text-lg">
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                            <span className="text-blue-800">Growing an audience is only STEP ONE.</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                            <span className="text-blue-800">Having great content is only STEP TWO.</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                            <span className="text-green-800 font-semibold">The REAL game?</span>
                        </div>
                    </div>
                    <div className="mt-6 bg-white rounded-lg p-6">
                        <p className="text-xl font-bold text-gray-900 mb-2">
                            Turning those followers into customers. Systems. Revenue streams. A business that runs while you sleep.
                        </p>
                        <p className="text-lg text-gray-700">
                            That's what separates hobbyists from <strong>CEOs</strong>.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Revenue Proof Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-8 mb-12"
            >
                <h3 className="text-3xl font-bold text-green-900 mb-6 text-center">
                    Let Me Show You Something:
                </h3>

                <div className="relative w-full max-w-2xl h-[400px] mx-auto rounded-xl overflow-hidden mt-4  bg-transparent">
                    <Image
                        src="/upsell-2/Last90DaysRevenue.jpg"
                        alt="Growth 18m Views"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 768px"
                        priority
                    />
                </div>
                <h4 className="text-2xl font-bold text-green-800 mb-6">My Last 90 Days:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-lg mb-6">
                    <div className="flex items-center gap-3">
                        <DollarSign className="w-6 h-6 text-green-600" />
                        <span className="font-semibold text-green-900">€27,345.07 in total revenue</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="w-6 h-6 text-green-600" />
                        <span className="font-semibold text-green-900">€1,120 notifications while sleeping</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Star className="w-6 h-6 text-green-600" />
                        <span className="font-semibold text-green-900">$2,500 from a single brand deal</span>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                    <p className="text-lg text-green-700 mb-2">All from Instagram. All without showing my face. All systematic.</p>
                    <p className="text-xl font-bold text-green-800 mb-2">This isn't luck. This isn't a one-time thing.</p>
                    <p className="text-lg font-semibold text-green-700">
                        This is what happens when you have <strong>THE SYSTEM</strong> .
                    </p>
                </div>
            </motion.div>

            {/* Product Introduction */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center mb-12"
            >
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    Introducing: Studio Pro - The Monetization Engine
                </h3>
                <p className="text-xl text-gray-700 mb-6 font-bold">
                    The Complete Business System Behind My €10K/Month Creator Brand
                </p>
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-6">
                    <p className="text-lg font-semibold text-yellow-800 mb-2">
                        This isn't another "make money online" course.
                    </p>
                    <p className="text-lg text-yellow-700">
                        This is the EXACT playbook I use. Every day. To turn content into cash.
                    </p>
                    <p className="text-lg font-semibold text-yellow-800 mt-2">
                        No theory. No fluff. Just pure, proven systems.
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default Upsell2HeroSection;