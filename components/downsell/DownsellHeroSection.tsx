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
                <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6 mb-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4 leading-tight">
                        WAIT! I Totally Get It...
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-4">
                        €197 Feels Like a Big Investment Right Now.
                    </h2>
                    <h3 className="text-xl md:text-2xl font-bold text-red-600">
                        But What If You Could Get EVERYTHING for Less Than Half?
                    </h3>
                </div>
            </motion.div>

            {/* Honesty Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-lg p-8 mb-12"
            >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Look, I'm going to be completely honest with you.
                </h3>
                <div className="space-y-4 text-lg text-gray-700">
                    <p className="font-semibold text-red-600">I NEVER do this.</p>
                    <p>But I can see you're serious about growing your Instagram...</p>
                    <p>You invested in Cinematic Studio. You made it this far. You clearly want more.</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                    <h4 className="text-2xl font-bold text-blue-900 mb-4">
                        So here's what I'm going to do:
                    </h4>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-blue-800 mb-2">
                            One Time Only: Get The COMPLETE Cinematic Studio VIP System
                        </p>
                        <p className="text-4xl font-bold text-green-600 mb-2">
                            For Just €97 (That's 50% OFF)
                        </p>
                        <p className="text-lg text-blue-700">
                            This is the EXACT same system. Nothing removed. Nothing held back.
                        </p>
                        <p className="text-lg font-semibold text-blue-800 mt-2">
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
                className="bg-orange-50 rounded-lg p-8 mb-12"
            >
                <h3 className="text-3xl font-bold text-orange-900 mb-6">
                    Why am I doing this?
                </h3>
                <div className="space-y-4 text-lg text-orange-800">
                    <p>Because I remember being where you are.</p>
                    <p>I remember thinking "€197 is a lot..."</p>
                    <p>I remember almost walking away from opportunities that changed my life.</p>
                    <p className="text-xl font-bold text-orange-900 mt-6">
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
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Here's What You Need to Know:
                </h3>

                <div className="space-y-6">
                    {/* Alert Item 1 */}
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                        <h4 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                            🚨 This Price Will NEVER Exist Again
                        </h4>
                        <div className="space-y-2 text-red-700">
                            <p>Not on Black Friday. Not on my birthday. Not ever.</p>
                            <p className="font-semibold">This is a one-time system glitch in your favor.</p>
                        </div>
                    </div>

                    {/* Alert Item 2 */}
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                        <h4 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                            💔 When You Leave This Page, It's Gone FOREVER
                        </h4>
                        <div className="space-y-2 text-purple-700">
                            <p>No email follow-ups. No retargeting ads. No second chances.</p>
                            <p className="font-semibold">This page literally self-destructs when you leave.</p>
                        </div>
                    </div>

                    {/* Alert Item 3 */}
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                        <h4 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
                            📈 The Same People Are Getting The Same Results
                        </h4>
                        <div className="space-y-2 text-green-700">
                            <p><strong>@byhopelesscore:</strong> 0 → 167K (Got reposted by JUSTIN BIEBER!)</p>
                            <p><strong>@mindset.mirage:</strong> 300 → 131K in 6 months</p>
                            <p><strong>@elevenstoic:</strong> 0 → 1M+ with 80K new followers last month</p>
                            <p className="font-semibold text-green-800 mt-4">
                                They all used THIS system. At ANY price, it works.
                            </p>
                        </div>
                    </div>

                    {/* Scenarios Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="bg-gray-50 rounded-lg p-8 mb-12"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            Let Me Paint You a Picture:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-red-800 mb-4">Scenario A: You save €97 today</h4>
                                <div className="space-y-3 text-red-700">
                                    <p>In 6 months, you're still posting. Still hoping. Still stuck.</p>
                                    <p>Every time you see someone blow up, you think:</p>
                                    <p className="text-lg font-semibold italic">"That could've been me..."</p>
                                </div>
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-green-800 mb-4">Scenario B: You invest €97 today</h4>
                                <div className="space-y-3 text-green-700">
                                    <p>In 6 months, you're that success story others talk about.</p>
                                    <p>100K+ followers. Brand deals. A system that runs itself.</p>
                                    <p className="text-lg font-bold text-green-800">Which story do you want to live?</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>



                    {/* Scenario Section */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="bg-gray-50 rounded-lg p-8 mb-12"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            Let Me Paint You a Picture...
                        </h3>
                        <div className="space-y-6 text-lg text-gray-800">
                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                <h4 className="text-xl font-bold text-red-800 mb-2">
                                    ❌ Scenario A: You Save €97 Today
                                </h4>
                                <p>In 6 months, you're still posting… still hustling… still hoping.</p>
                                <p>You&apos;re watching others blow up while wondering why you're stuck.</p>
                                <p className="font-semibold text-red-700">
                                    Every scroll reminds you - "That could&apos;ve been me..."
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                <h4 className="text-xl font-bold text-green-800 mb-2">
                                    ✅ Scenario B: You Invest €97 Today
                                </h4>
                                <p>In 6 months, <strong>you&apos;re the success story.</strong></p>
                                <p>100K+ followers. Brand deals flowing in. Confidence skyrocketing.</p>
                                <p>You&apos;ve got a system that works while you sleep - and proof that you were never "too late."</p>
                                <p className="font-semibold text-green-800 mt-2">
                                    All because you bet on yourself… once.
                                </p>
                            </div>

                            <div className="text-center mt-8">
                                <p className="text-xl font-bold text-gray-900">
                                    Two futures. One choice. Which one do you want?
                                </p>
                            </div>
                        </div>
                    </motion.div> */}

                </div>
            </motion.div>
        </>
    );
};

export default Downsell1HeroSection;