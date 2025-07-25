'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, DollarSign, Heart, Lock, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const Downsell2HeroSection = () => {
    return (
        <>
            {/* Main Header */} 
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    You just said no to the Cinematic Studio Monetization System for 297€. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">I Get It.</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400 mb-6">
                    But what if you could get the exact monetization system that makes me 10-20k/m for just 197€?
                </h2>
            </motion.div>

            {/* Breaking Rules Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-orange-900/40 to-orange-800/40 border border-orange-600/50 rounded-lg p-6 md:p-8 mb-12 backdrop-blur-sm"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-orange-300 mb-6">
                    Look, I'm going to level with you.
                </h3>
                <div className="space-y-4 text-base md:text-lg text-orange-200/90">
                    <p className="font-semibold">I NEVER do payment plans for one-time offers.</p>
                    <p>But I can see something in you...</p>
                    <p>You've made it this far. You want this. You <strong>NEED</strong> this.</p>
                    <p className="text-xl md:text-2xl font-bold text-orange-300">You're just stuck on the price.</p>
                </div>
                <div className="mt-6 bg-slate-800/50 rounded-lg p-4 md:p-6 border border-slate-700/50 backdrop-blur-sm">
                    <p className="text-orange-300 font-semibold text-lg md:text-xl">
                        So against my better judgment, here's what I'm going to do:
                    </p>
                </div>
            </motion.div>

            {/* One Time Only Offer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-600/50 rounded-lg p-6 md:p-8 mb-12 backdrop-blur-sm"
            >
                <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-200 mb-4">
                        ONE TIME ONLY: The Complete Cinematic Studio Monetization System
                    </h3>
                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                        Just €197
                    </div>
                    <div className="text-xl md:text-2xl text-blue-300 font-semibold">
                        (Or 3 Payments of €97)
                    </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 md:p-6 border border-slate-700/50 backdrop-blur-sm">
                    <div className="grid md:grid-cols-3 gap-4 text-center mb-4">
                        <div className="p-3">
                            <div className="font-bold text-green-400">Same System</div>
                        </div>
                        <div className="p-3">
                            <div className="font-bold text-green-400">Same Strategies</div>
                        </div>
                        <div className="p-3">
                            <div className="font-bold text-green-400">Same Results</div>
                        </div>
                    </div>
                    <p className="text-center text-lg md:text-xl font-semibold text-blue-200">
                        The ONLY difference? I'm eating the loss to help you win.
                    </p>
                </div>
            </motion.div>

            {/* Why Would I Do This */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                    Why would I do this?
                </h3>
                <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 border border-purple-600/50 rounded-lg p-6 md:p-8 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                        <Heart className="w-8 h-8 text-purple-400 mt-1 flex-shrink-0" />
                        <div className="space-y-3 text-base md:text-lg text-purple-200/90">
                            <p className="font-semibold">Because I remember being exactly where you are.</p>
                            <p>Knowing I needed to invest in myself...</p>
                            <p>Knowing it would change everything...</p>
                            <p>But feeling that knot in my stomach about the price.</p>
                            <p className="text-xl md:text-2xl font-bold text-purple-300">
                                I don't want money to be the reason you stay broke.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Real Talk Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-slate-800/50 rounded-lg p-6 md:p-8 mb-12 backdrop-blur-sm border border-slate-700/50"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                    Let's Get Real for 30 Seconds:
                </h3>

                <div className="mb-6">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-6">You've seen the proof:</h4>
                    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                        <div className="bg-gradient-to-r from-green-900/40 to-green-800/40 border border-green-600/50 rounded-lg p-4 md:p-6 text-center backdrop-blur-sm">
                            <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
                            <div className="font-bold text-green-300 text-lg md:text-xl">€27,345</div>
                            <div className="text-green-200/80 text-sm md:text-base">in 90 days</div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-600/50 rounded-lg p-4 md:p-6 text-center backdrop-blur-sm">
                            <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                            <div className="font-bold text-blue-300 text-lg md:text-xl">€8,000</div>
                            <div className="text-blue-200/80 text-sm md:text-base">from one launch</div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 border border-purple-600/50 rounded-lg p-4 md:p-6 text-center backdrop-blur-sm">
                            <div className="text-2xl mb-2">💰</div>
                            <div className="font-bold text-purple-300 text-lg md:text-xl">€1,120</div>
                            <div className="text-purple-200/80 text-sm md:text-base">while sleeping</div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4 md:p-6 border border-slate-600/50 backdrop-blur-sm">
                    <p className="text-lg md:text-xl text-blue-100/80 mb-2">This isn't theory. This is <strong className="text-white">REALITY</strong>.</p>
                    <p className="text-lg md:text-xl text-blue-100/80 mb-4">And here's the thing...</p>
                    <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 border-l-4 border-yellow-500 p-4 md:p-6 rounded-r-lg backdrop-blur-sm">
                        <p className="text-lg md:text-xl font-semibold text-yellow-300 mb-2">
                            The creators who are making REAL money?
                        </p>
                        <p className="text-lg md:text-xl text-yellow-200/90 mb-2">
                            They all have one thing in common:
                        </p>
                        <p className="text-xl md:text-2xl font-bold text-yellow-400">
                            They invested in learning HOW before it was comfortable.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Rock Bottom Pricing */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-600/50 rounded-lg p-6 md:p-8 mb-12 backdrop-blur-sm"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-red-300 mb-6 text-center">
                    This Is What Rock Bottom Pricing Looks Like:
                </h3>

                <div className="text-center mb-6">
                    <div className="text-2xl md:text-3xl font-bold text-red-400 mb-2">
                        €197 for a system that generates €10K/month?
                    </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 md:p-6 border border-slate-700/50 backdrop-blur-sm">
                    <p className="text-lg md:text-xl font-semibold text-white mb-4">That's less than:</p>
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-red-200/90">One month of Facebook ads (that don't work)</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-red-200/90">A decent microphone (that won't make you money)</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-red-200/90">Two weeks of Starbucks (seriously)</span>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-900/40 to-green-800/40 border border-green-600/50 rounded-lg p-4 md:p-6 backdrop-blur-sm">
                        <p className="text-lg md:text-xl font-bold text-green-300 text-center">
                            But unlike those things? This investment pays you back 50x over.
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Downsell2HeroSection;
