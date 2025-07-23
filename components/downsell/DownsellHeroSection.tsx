'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Heart, TrendingUp } from 'lucide-react';

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
                <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 border-2 border-red-600/50 rounded-lg p-4 md:p-6 mb-6 backdrop-blur-sm">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-red-300 mb-4 leading-tight">
                        WAIT! I Totally Get It...
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-400 mb-4">
                        €197 Feels Like a Big Investment Right Now.
                    </h2>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-red-500">
                        But What If You Could Get EVERYTHING for Less Than Half?
                    </h3>
                </div>
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
                    <p className="font-semibold text-red-400">I NEVER do this.</p>
                    <p>But I can see you're serious about growing your Instagram...</p>
                    <p>You invested in Cinematic Studio. You made it this far. You clearly want more.</p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-600/50 rounded-lg p-4 md:p-6 mt-6 backdrop-blur-sm">
                    <h4 className="text-xl md:text-2xl font-bold text-blue-300 mb-4">
                        So here's what I'm going to do:
                    </h4>
                    <div className="text-center">
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-200 mb-2">
                            One Time Only: Get The COMPLETE Cinematic Studio VIP System
                        </p>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-2">
                            For Just €97 (That's 50% OFF)
                        </p>
                        <p className="text-base md:text-lg text-blue-100/80">
                            This is the EXACT same system. Nothing removed. Nothing held back.
                        </p>
                        <p className="text-base md:text-lg font-semibold text-blue-300 mt-2">
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
                <div className="text-center mt-6 md:mt-8">
                    <p className="text-lg md:text-xl font-bold text-white">
                        Two futures. One choice. Which one do you want?
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default Downsell1HeroSection;
