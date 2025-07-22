'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Star, Check } from 'lucide-react';
import Image from 'next/image';

const UpsellHeroSection = () => {
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
                    Unlock the Secret System That Took Me From{' '}
                    <span className="text-red-600">0 to 1 Million Followers</span>
                    {' '}And Build a Profitable Instagram Brand That ACTUALLY Grows.
                </h1>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                    <p className="text-lg font-semibold text-yellow-800">
                        This is a one-time offer ONLY available on this page.
                    </p>
                </div>
            </motion.div>

            {/* Congratulations Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8"
            >
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                    Hey, first of all - CONGRATULATIONS! 🎉
                </h2>
                <p className="text-green-700 mb-4">
                    You just made one of the most important decisions of your creator journey.
                </p>
                <p className="text-green-700">
                    With Cinematic Studio, you now have everything you need to create content that looks like it came straight out of Hollywood.
                </p>
            </motion.div>

            {/* Problem Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
            >
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <p className="text-lg text-gray-700 mb-4">
                        The tools. The transitions. The sounds. The complete branding blueprint.
                    </p>
                    <p className="text-lg text-gray-700 mb-4 font-semibold">
                        But let me ask you something...
                    </p>
                    <div className="space-y-3 text-lg text-gray-700">
                        <p>What good is the most cinematic content in the world if nobody sees it?</p>
                        <p>What's the point of a perfect brand identity if you're stuck at 1,000 followers?</p>
                        <p>And let's be real:<span className='font-semibold'> How frustrating is it to spend hours on a post, only to get 47 likes?</span> </p>
                    </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">
                        Here's the Brutal Truth About Instagram Growth:
                    </h3>
                    <p className="text-lg text-red-700 mb-4">99% of creators have amazing content.</p>
                    <p className="text-lg text-red-700 mb-4">But only 1% know how to actually grow.</p>
                    <p className="text-lg text-red-700 mb-2 font-semibold">The difference?</p>
                    <p className="text-2xl font-bold text-red-800">A system.</p>
                    <p className="text-lg text-red-700 mt-4">
                        Not luck. Not chance. Not "being at the right place at the right time."
                    </p>
                    <p className="text-lg font-semibold text-red-800">
                        But a proven strategy that works over and over again.
                    </p>
                </div>
            </motion.div>

            {/* Vision Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-blue-50 rounded-lg p-8 mb-12"
            >
                <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                    Imagine This...
                </h3>
                <div className="space-y-4 text-lg text-blue-800">
                    <p>You wake up in the morning.</p>
                    <p className="font-semibold">+12,000 new followers overnight.</p>
                    <p className="font-semibold">Your last post? 18 million views.</p>

                    <div className="relative w-full max-w-2xl h-[400px] mx-auto rounded-xl overflow-hidden mt-4 shadow-md bg-transparent">
                        <Image
                            src="/upsell-1/Growth18mviews.png"
                            alt="Growth 18m Views"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 768px"
                            priority
                        />
                    </div>



                    <p>Your DMs?<span className='font-bold'> Flooded with brand deals and collaboration requests.</span></p>
                    <p>Your account keeps growing every single day <span className='font-bold'>on autopilot.</span> </p>
                    <p>Because you're not guessing anymore.</p>
                    <p>Because you know exactly what works.</p>
                    <p>Because you have a system that works for you <span className='font-semibold'>even while you sleep.</span></p>
                </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-12"
            >
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    This Isn't Fantasy. This Is My Reality.
                </h3>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8">
                    <h4 className="text-2xl font-bold text-purple-900 mb-6">My Last 90 Days:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center gap-3">
                            <TrendingUp className="w-6 h-6 text-purple-600" />
                            <span className="font-semibold text-purple-900">187.6 Million Reach</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Users className="w-6 h-6 text-purple-600" />
                            <span className="font-semibold text-purple-900">88,000+ New Followers (last 30 days alone)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Star className="w-6 h-6 text-purple-600" />
                            <span className="font-semibold text-purple-900">50+ Million Impressions every single month</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="w-6 h-6 text-purple-600" />
                            <span className="font-semibold text-purple-900">Over 98% Non-Follower Reach</span>
                        </div>
                    </div>

                    <div className="relative w-full max-w-2xl h-[400px] mx-auto rounded-xl overflow-hidden mt-4 shadow-md bg-transparent">
                        <Image
                            src="/upsell-1/PrimeGrowthPicture.png"
                            alt="Prime Growth"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 768px"
                            priority
                        />
                    </div>


                    <div className="mt-6 p-4 bg-white rounded-lg">
                        <p className="text-lg text-gray-700 mb-2">And the crazy part?</p>
                        <p className="text-xl font-bold text-purple-900">
                            It's all systematic. Predictable. Repeatable.
                        </p>
                        <p className="text-lg text-gray-700 mt-4">
                            No 24/7 hustle. No burnout. No desperate trending-audio posts.
                        </p>
                        <p className="text-lg font-semibold text-purple-800">
                            Just a system that runs like Swiss clockwork.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Product Introduction */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center mb-12"
            >
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    Introducing: Cinematic Studio VIP
                </h3>
                <p className="text-xl text-gray-700 mb-6 font-bold">
                    The Exact Growth System I Used to Go From 0 to 1 Million+ Followers
                </p>
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-6">
                    <p className="text-lg font-semibold text-yellow-800 mb-2">
                        This is NOT just another course.
                    </p>
                    <p className="text-lg text-yellow-700">
                        This is the blueprint. The masterplan. The formula.
                    </p>
                    <p className="text-lg text-yellow-700 mt-2">
                        <span className='font-semibold'>Everything I've learned in the past 1.5 years</span> - distilled into a step-by-step system you can simply copy.
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default UpsellHeroSection;
