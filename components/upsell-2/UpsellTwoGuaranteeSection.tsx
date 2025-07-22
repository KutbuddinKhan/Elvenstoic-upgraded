'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const UpsellTwoGuaranteeSection: React.FC = () => {
    return (
        <>
            {/* Brutal Truth Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.6 }}
                className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12"
            >
                <h3 className="text-3xl font-bold text-red-800 mb-6">
                    The Brutal Truth About Creator Economy:
                </h3>
                <div className="space-y-4 text-lg">
                    <p className="text-red-700">
                        <span className="font-bold text-2xl">99%</span> of creators will NEVER make a full-time income.
                    </p>
                    <p className="text-red-700">Not because they lack talent.</p>
                    <p className="text-red-700">Not because they lack followers.</p>
                    <p className="text-xl font-bold text-red-800">
                        Because they lack a MONETIZATION SYSTEM.
                    </p>
                    <div className="bg-white rounded-lg p-4 mt-6">
                        <p className="text-red-700 mb-2">They're hoping brands will save them.</p>
                        <p className="text-red-700 mb-2">They're waiting for the algorithm to bless them.</p>
                        <p className="text-red-700 mb-2">They're creating content for FREE.</p>
                        <p className="text-red-700 mb-2 text-xl font-bold">Meanwhile, smart creators are building real businesses.</p>
                        <p className="text-red-800">Which one do you want to be?</p>
                    </div>
                </div>
            </motion.div>

            {/* What Happens Next Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.8 }}
                className="mb-12"
            >
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Here's What Happens Next:
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="text-xl font-bold text-red-800 mb-4">Option 1: You say no and keep creating for free.</h4>
                        <p className="text-red-700 mb-2">Maybe a brand will email you someday.</p>
                        <p className="text-red-700 mb-2">Maybe you'll figure it out yourself.</p>
                        <p className="text-red-700 font-semibold">Maybe.</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="text-xl font-bold text-green-800 mb-4">Option 2: You invest €297 in a proven system.</h4>
                        <p className="text-green-700 mb-2">In 30 days, you could make your first €1,000.</p>
                        <p className="text-green-700 mb-2">In 90 days, you could hit €10K/month.</p>
                        <p className="text-green-800 font-semibold">In 6 months, you could have a real business.</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 inline-block">
                        <p className="text-xl text-blue-800 mb-2">The math is simple:</p>
                        <p className="text-lg text-blue-700 mb-2">€297 investment → €8,000 return (just from copying my launch)</p>
                        <p className="text-xl font-bold text-blue-900">That's a 3,033% ROI.</p>
                        <p className="text-lg text-blue-800 mt-2">Where else can you get returns like that?</p>
                    </div>
                </div>
            </motion.div>

            {/* Critical Warning Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12"
            >
                <h3 className="text-3xl font-bold text-red-800 mb-6">
                    ⚠️ CRITICAL: This Page Self-Destructs When You Leave
                </h3>
                <p className="text-xl font-bold text-red-700 mb-6">This is a ONE-TIME offer.</p>
                <div className="space-y-3 text-lg text-red-700 mb-6">
                    <div className="flex items-center gap-3">
                        <X className="w-5 h-5" />
                        <span>It's NOT on my website</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <X className="w-5 h-5" />
                        <span>You WON'T get an email about it</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <X className="w-5 h-5" />
                        <span>There's NO secret link to find it later</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <X className="w-5 h-5" />
                        <span>Once you leave, it's gone FOREVER</span>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                    <p className="text-lg text-red-700 mb-2">After this page, the price goes to <strong>€497</strong>.</p>
                    <p className="text-lg text-red-700 mb-2">And honestly? Even at €497 it's a steal.</p>
                    <p className="text-xl font-bold text-red-800">But right now, right here, you get everything for €297.</p>
                </div>
            </motion.div>

            {/* Guarantee Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.2 }}
                className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12"
            >
                <h3 className="text-3xl font-bold text-blue-900 mb-6">
                    My "Make Money or Money Back" Guarantee
                </h3>
                <p className="text-lg text-blue-800 mb-4">
                    I'm so confident this system will transform your business that I'll make you this promise:
                </p>
                <p className="text-blue-800 mb-4 text-xl font-bold">Implement the system for 60 days.</p>
                <p className="text-lg text-blue-800 mb-4">
                    If you don't make AT LEAST €1,000 using my strategies...
                </p>
                <p className="text-xl font-bold text-blue-900 mb-4">
                    I'll refund every cent AND you keep the entire system.
                </p>
                <p className="text-lg text-blue-800 mb-4">That's how sure I am this works.</p>
                <p className=" text-blue-800 mb-4 text-xl font-bold">You literally cannot lose.</p>
            </motion.div>

            {/* Bottom Line Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.4 }}
                className="bg-gray-900 text-white rounded-lg p-8 mb-12"
            >
                <h3 className="text-3xl font-bold mb-6">The Bottom Line:</h3>
                <div className="space-y-4 text-lg">
                    <p>You've come this far.</p>
                    <p>You've invested in creating great content.</p>
                    <p>Maybe you've invested in growing your audience.</p>
                    <p className="text-xl font-bold text-yellow-400">Now invest in actually making money from it.</p>
                    <p className="mt-6">Because at the end of the day...</p>
                    <div className="pl-6 space-y-2">
                        <p>Likes don't pay bills.</p>
                        <p>Views don't buy freedom.</p>
                        <p>Followers don't fund your dreams.</p>
                    </div>
                    <p className="text-xl font-bold text-yellow-400 mt-6">But a monetization system? That changes everything.</p>
                </div>
            </motion.div>
        </>
    );
};

export default UpsellTwoGuaranteeSection;