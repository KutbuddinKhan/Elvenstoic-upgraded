'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Lock, } from 'lucide-react';
import Image from 'next/image';

const Downsell1HeroSection = () => {
    return (
        <>
            {/* Main Header */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mt-6 text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">€197</span> Feels Like a Big Investment Right Now.
                </h2>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4 text-white">
                    But What If You Could Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">EVERYTHING for Less Than Half?</span>
                </h3>
            </motion.div>

            {/* Honesty Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-800/50 rounded-lg p-6 md:p-8 mb-12 backdrop-blur-sm border border-slate-700/50"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Look, I'm going to be completely honest with you.
                </h3>
                <div className="space-y-4 text-base md:text-lg text-blue-100/80">
                    <p className="font-semibold">I NEVER do this.</p>
                    <p>But I can see you're serious about growing your Instagram...</p>
                    <p>You invested in Cinematic Studio. You made it this far. You clearly want more.</p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-600/50 rounded-lg p-4 md:p-6 mt-6 backdrop-blur-sm">
                    <h4 className="text-xl md:text-2xl font-bold text-blue-200 mb-4">
                        So here's what I'm going to do:
                    </h4>
                    <div className="text-center">
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-200 mb-2">
                            One Time Only: Get The COMPLETE Cinematic Studio Growth System
                        </p>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-2">
                            For Just €97 (That's 50% OFF)
                        </p>
                        <p className="text-base md:text-lg text-blue-100/80">
                            This is the EXACT same system. Nothing removed. Nothing held back.
                        </p>
                        <p className="text-base md:text-lg text-blue-100/80 mt-2">
                            The same blueprint that took me from 0 to 1,000,000+ followers.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Why Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-orange-900/40 to-orange-800/40 border border-orange-600/50 rounded-lg p-6 md:p-8 mb-12 backdrop-blur-sm"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-orange-300 mb-6">
                    Why am I doing this?
                </h3>
                <div className="space-y-4 text-base md:text-lg text-orange-200/90">
                    <p>Because I remember being where you are.</p>
                    <p>I remember thinking "€197 is a lot..."</p>
                    <p>I remember almost walking away from opportunities that changed my life.</p>
                    <p className="text-lg md:text-xl font-bold text-orange-300 mt-6">
                        And I don't want that to happen to you.
                    </p>
                </div>
            </motion.div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="text-center mb-12 px-4"
            >
                <p className="text-base md:text-lg font-semibold text-yellow-100 mb-6">
                    Unlock Cinematic Studio Growth System for Just €97
                </p>

                {/* responsive price box */}
                <div className="bg-white/5 border-2 border-dashed border-yellow-400 rounded-xl p-4 sm:p-6 max-w-xl mx-auto shadow-xl mb-6 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 sm:mb-6">
                        <p className="text-sm sm:text-base md:text-lg text-white font-medium">
                            Regular Price{" "}
                            <span className="line-through text-red-400">€497</span>
                        </p>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 font-bold text-lg sm:text-xl md:text-2xl">
                            Today Only €97
                        </p>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative group w-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-200 z-0" />
                        <button
                            // onClick={handleAccept}
                            className="relative z-10 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg transition-colors duration-300 w-full inline-flex items-center justify-center gap-2 md:gap-3 border border-yellow-400/50"
                        >
                            <Lock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                            <span className="whitespace-nowrap">
                                UPGRADE NOW FOR ONLY €97
                            </span>
                        </button>

                    </motion.div>

                    {/* Payment Icons */}
                    <div className="flex justify-center mt-4 sm:mt-6">
                        <Image
                            src="/upsell-1/cards.png"
                            alt="Payment Methods"
                            width={220}
                            height={30}
                            className="h-auto w-full max-w-[240px]"
                            priority
                        />
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-6 text-sm text-yellow-100 mb-6">
                    <span className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-yellow-400" />
                        Instant Access
                    </span>
                    <span className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-yellow-400" />
                        60-Day Money-Back Guarantee
                    </span>
                    <span className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-yellow-400" />
                        Available Only on This Page
                    </span>
                </div>
            </motion.div>

            {/* Important Info Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                    Here's What You Need to Know:
                </h3>

                <div className="space-y-6">
                    {/* Alert Item 1 */}
                    <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 border-l-4 border-red-500 p-4 md:p-6 rounded-r-lg backdrop-blur-sm">
                        <h4 className="text-lg md:text-xl font-bold text-red-300 mb-3 flex items-center gap-2">
                            🚨 This Price Will NEVER Exist Again
                        </h4>
                        <div className="space-y-2 text-sm md:text-base text-red-200/90">
                            <p>Not on Black Friday. Not on my birthday. Not ever.</p>
                            <p className="font-semibold">This is a one-time system glitch in your favor.</p>
                        </div>
                    </div>

                    {/* Alert Item 2 */}
                    <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 border-l-4 border-purple-500 p-4 md:p-6 rounded-r-lg backdrop-blur-sm">
                        <h4 className="text-lg md:text-xl font-bold text-purple-300 mb-3 flex items-center gap-2">
                            💔 When You Leave This Page, It's Gone FOREVER
                        </h4>
                        <div className="space-y-2 text-sm md:text-base text-purple-200/90">
                            <p>No email follow-ups. No retargeting ads. No second chances.</p>
                            <p className="font-semibold">This page literally self-destructs when you leave.</p>
                        </div>
                    </div>

                    {/* Alert Item 3 */}
                    <div className="bg-gradient-to-r from-green-900/40 to-green-800/40 border-l-4 border-green-500 p-4 md:p-6 rounded-r-lg backdrop-blur-sm">
                        <h4 className="text-lg md:text-xl font-bold text-green-300 mb-3 flex items-center gap-2">
                            📈 The Same People Are Getting The Same Results
                        </h4>
                        <div className="space-y-2 text-sm md:text-base text-green-200/90">
                            <p><strong>@byhopelesscore:</strong> 0 → 167K (Got reposted by JUSTIN BIEBER!)</p>
                            <p><strong>@mindset.mirage:</strong> 300 → 131K in 6 months</p>
                            <p><strong>@elevenstoic:</strong> 0 → 1M+ with 80K new followers last month</p>
                            <p className="font-semibold text-green-300 mt-4">
                                They all used THIS system. At ANY price, it works.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Scenarios Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-slate-800/50 rounded-lg p-6 md:p-8 mb-12 backdrop-blur-sm border border-slate-700/50"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                    Let Me Paint You a Picture:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-600/50 rounded-lg p-4 md:p-6 backdrop-blur-sm">
                        <h4 className="text-lg md:text-xl font-bold text-red-300 mb-4">Scenario A: You save €97 today</h4>
                        <div className="space-y-3 text-sm md:text-base text-red-200/90">
                            <p>In 6 months, you're still posting. Still hoping. Still stuck.</p>
                            <p>Every time you see someone blow up, you think:</p>
                            <p className="text-base md:text-lg font-semibold italic text-red-400">"That could've been me..."</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-900/40 to-green-800/40 border border-green-600/50 rounded-lg p-4 md:p-6 backdrop-blur-sm">
                        <h4 className="text-lg md:text-xl font-bold text-green-300 mb-4">Scenario B: You invest €97 today</h4>
                        <div className="space-y-3 text-sm md:text-base text-green-200/90">
                            <p>In 6 months, you're that success story others talk about.</p>
                            <p>100K+ followers. Brand deals. A system that runs itself.</p>
                            <p className="text-base md:text-lg font-bold text-green-300">Which story do you want to live?</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Downsell1HeroSection;
