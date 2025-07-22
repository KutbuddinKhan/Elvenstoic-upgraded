'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Heart, TrendingUp } from 'lucide-react';

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
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    You Just Said No to €297. <span className="text-red-600">I Get It.</span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-green-600 mb-6">
                    But What If You Could Get EVERYTHING for €197?
                </h2>
            </motion.div>

            {/* Breaking Rules Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8"
            >
                <h3 className="text-2xl font-bold text-orange-800 mb-4">
                    Look, I'm going to level with you.
                </h3>
                <div className="space-y-3 text-lg text-orange-700">
                    <p><strong>I NEVER do payment plans for one-time offers.</strong></p>
                    <p>But I can see something in you...</p>
                    <p>You've made it this far. You want this. You <strong>NEED</strong> this.</p>
                    <p className="text-xl font-bold">You're just stuck on the price.</p>
                </div>
                <div className="mt-6 bg-white rounded-lg p-4">
                    <p className="text-orange-800 font-semibold text-lg">
                        So against my better judgment, here's what I'm going to do:
                    </p>
                </div>
            </motion.div>

            {/* One Time Only Offer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8 mb-8 border-2 border-green-300"
            >
                <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-green-900 mb-2">
                        ONE TIME ONLY: The Complete Monetization Engine
                    </h3>
                    <div className="text-4xl font-bold text-green-700 mb-2">
                        Just €197
                    </div>
                    <div className="text-xl text-blue-700 font-semibold">
                        (Or 3 Payments of €97)
                    </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                    <div className="grid md:grid-cols-3 gap-4 text-center mb-4">
                        <div className="p-3">
                            <div className="font-bold text-green-800">Same System</div>
                            <div className="text-sm text-gray-600">Exact monetization engine</div>
                        </div>
                        <div className="p-3">
                            <div className="font-bold text-green-800">Same Strategies</div>
                            <div className="text-sm text-gray-600">All proven methods</div>
                        </div>
                        <div className="p-3">
                            <div className="font-bold text-green-800">Same Results</div>
                            <div className="text-sm text-gray-600">€10K/month potential</div>
                        </div>
                    </div>
                    <p className="text-center text-lg font-semibold text-green-900">
                        The ONLY difference? I'm eating the loss to help you win.
                    </p>
                </div>
            </motion.div>

            {/* Why Would I Do This */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-8"
            >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Why would I do this?
                </h3>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                        <Heart className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                        <div className="space-y-3 text-lg text-purple-800">
                            <p><strong>Because I remember being exactly where you are.</strong></p>
                            <p>Knowing I needed to invest in myself...</p>
                            <p>Knowing it would change everything...</p>
                            <p>But feeling that knot in my stomach about the price.</p>
                            <p className="text-xl font-bold text-purple-900">
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
                className="bg-gray-50 rounded-lg p-8 mb-8"
            >
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Let's Get Real for 30 Seconds:
                </h3>

                <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">You've seen the proof:</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-green-100 rounded-lg p-4 text-center">
                            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <div className="font-bold text-green-800 text-lg">€27,345</div>
                            <div className="text-green-700 text-sm">in 90 days</div>
                        </div>
                        <div className="bg-blue-100 rounded-lg p-4 text-center">
                            <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <div className="font-bold text-blue-800 text-lg">€8,000</div>
                            <div className="text-blue-700 text-sm">from one launch</div>
                        </div>
                        <div className="bg-purple-100 rounded-lg p-4 text-center">
                            <div className="text-2xl mb-2">💰</div>
                            <div className="font-bold text-purple-800 text-lg">€1,120</div>
                            <div className="text-purple-700 text-sm">while sleeping</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                    <p className="text-lg text-gray-700 mb-2">This isn't theory. This is <strong>REALITY</strong>.</p>
                    <p className="text-lg text-gray-700 mb-4">And here's the thing...</p>
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
                        <p className="text-lg font-semibold text-yellow-800 mb-2">
                            The creators who are making REAL money?
                        </p>
                        <p className="text-lg text-yellow-700 mb-2">
                            They all have one thing in common:
                        </p>
                        <p className="text-xl font-bold text-yellow-900">
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
                className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8"
            >
                <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">
                    This Is What Rock Bottom Pricing Looks Like:
                </h3>

                <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                        €197 for a system that generates €10K/month?
                    </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                    <p className="text-lg font-semibold text-gray-900 mb-4">That's less than:</p>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">One month of Facebook ads (that don't work)</span>
                            <span className="font-semibold text-red-600">€300+</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">A decent microphone (that won't make you money)</span>
                            <span className="font-semibold text-red-600">€250+</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Two weeks of Starbucks (seriously)</span>
                            <span className="font-semibold text-red-600">€200+</span>
                        </div>
                    </div>
                    <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                        <p className="text-lg font-bold text-green-800 text-center">
                            But unlike those things? This investment pays you back 50x over.
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Downsell2HeroSection;
