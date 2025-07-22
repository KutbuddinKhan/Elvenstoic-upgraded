'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, TrendingUp, Clock } from 'lucide-react';

const features = [
    {
        title: 'The 0-1M Growth System',
        value: '€497',
        description: 'The exact strategy I used. No theory. Just proven tactics.',
    },
    {
        title: 'Strategic Blueprint Library',
        value: '€297',
        description: 'Structure your page for maximum algorithmic growth.',
    },
    {
        title: 'Market Research Masterclass',
        value: '€197',
        description: 'Know exactly what content will explode before you post it.',
    },
    {
        title: 'Content Positioning Frameworks',
        value: '€297',
        description: 'Turn casual viewers into obsessed followers.',
    },
    {
        title: 'Viral Planning System',
        value: '€197',
        description: 'My personal content calendar that generates millions of views.',
    },
    {
        title: 'Algorithm Domination Secrets',
        value: '€297',
        description: 'Get Instagram to push your content to non-followers (98% reach like me).',
    },
];

const Downsell1ContentSection = () => {
    return (
        <>
            {/* What You Get Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-12"
            >
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    What You Get for €97 (TODAY ONLY):
                </h3>
                <div className="space-y-4">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white border border-green-200 rounded-lg p-6 shadow-sm">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-start gap-3">
                                    <Check className="w-6 h-6 text-green-600 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-700 mt-2">{feature.description}</p>
                                    </div>
                                </div>
                                <span className="text-green-600 font-bold text-lg whitespace-nowrap ml-4">
                                    (Value: {feature.value})
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pricing Summary */}
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8 mt-8 text-center">
                    <div className="space-y-3 text-xl">
                        <p className="text-gray-700">
                            <strong>Total Real Value:</strong> <span className="text-2xl font-bold text-blue-600">€1,782</span>
                        </p>
                        <p className="text-gray-700">
                            <strong>Regular VIP Price:</strong> <span className="line-through text-red-600">€197</span>
                        </p>
                        <p className="text-3xl font-bold text-green-600">
                            Your One-Time Price: €97
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Clock Ticking Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12 text-center"
            >
                <div className="flex items-center justify-center gap-3 mb-6">
                    <Clock className="w-8 h-8 text-red-600" />
                    <h3 className="text-3xl font-bold text-red-800">The Clock Is Ticking:</h3>
                </div>
                <div className="space-y-4 text-lg text-red-700">
                    <p>Every minute you wait, someone else is implementing these strategies.</p>
                    <p>Someone else is growing.</p>
                    <p>Someone else is winning.</p>
                    <p className="text-xl font-bold text-red-800 mt-6">
                        Don't let another opportunity slip through your fingers.
                    </p>
                </div>
            </motion.div>

            {/* Challenge Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-yellow-50 border border-yellow-300 rounded-lg p-8 mb-12"
            >
                <h3 className="text-3xl font-bold text-yellow-900 mb-6 text-center">
                    Here's My Challenge to You:
                </h3>
                <div className="space-y-4 text-lg text-yellow-800">
                    <p><strong>Give me 30 days.</strong></p>
                    <p>Follow the system. Apply the strategies. Do the work.</p>
                    <p>
                        If you don&apos;t see <strong>SIGNIFICANT growth</strong>...<br />
                        If you don&apos;t feel like this was the best €97 you ever spent...
                    </p>
                    <p className="text-yellow-900 font-semibold">
                        I&apos;ll refund every single cent.
                    </p>
                    <p className="text-yellow-900 font-bold text-xl mt-4">
                        You literally have nothing to lose.
                    </p>
                </div>
            </motion.div>


            {/* Comparison Section */}
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mb-12"
            >
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Real Talk: Do You Know What €97 Gets You?
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="text-xl font-bold text-gray-800 mb-4">€97 Usually Gets You:</h4>
                        <div className="space-y-3 text-gray-700">
                            <p>• Maybe 2-3 Uber Eats orders</p>
                            <p>• A mediocre pair of headphones</p>
                            <p>• Half a night at a hotel</p>
                            <p className="text-red-600 font-semibold">Things that are gone forever...</p>
                        </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="text-xl font-bold text-green-800 mb-4">OR... The System That Generates:</h4>
                        <div className="space-y-3 text-green-700">
                            <p className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                80,000+ followers per month
                            </p>
                            <p className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                50M+ monthly reach
                            </p>
                            <p className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                5-figure brand deals
                            </p>
                            <p className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                A business that runs while you sleep
                            </p>
                            <p className="text-green-800 font-bold text-lg mt-4">
                                Which one moves your life forward?
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div> */}

            {/* Harsh Truth Section */}
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="bg-yellow-50 border border-yellow-300 rounded-lg p-8 mb-12"
            >
                <h3 className="text-2xl font-bold text-yellow-800 mb-6">
                    I'm going to say something harsh but true:
                </h3>
                <div className="space-y-4 text-lg text-yellow-700">
                    <p>If you can't invest €97 in your own growth...</p>
                    <p>If you can't bet €97 on yourself...</p>
                    <p className="font-semibold">Maybe you're not as serious about success as you thought.</p>
                </div>
                <div className="bg-yellow-100 rounded-lg p-4 mt-6">
                    <p className="text-lg text-yellow-800 font-semibold">
                        Because every successful creator I know? They would have KILLED for this opportunity at this price.
                    </p>
                </div>
            </motion.div> */}

            {/* Final Warning Section */}
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="bg-orange-50 border-2 border-orange-300 rounded-lg p-8 mb-12 text-center"
            >
                <h3 className="text-3xl font-bold text-orange-800 mb-4">
                    Let Me Be Crystal Clear:
                </h3>
                <div className="space-y-4 text-lg text-orange-700">
                    <p><strong>After you close this page, the price goes back to €497.</strong></p>
                    <p>Forever. No exceptions. No special links. No secret codes.</p>
                    <p>This €97 price will NEVER exist again in the history of my business.</p>
                </div>
                <div className="bg-orange-100 rounded-lg p-6 mt-6">
                    <p className="text-xl font-bold text-orange-800 mb-4">
                        You are literally 1 click away from either:
                    </p>
                    <div className="space-y-2 text-lg">
                        <p className="text-red-600">❌ The biggest regret of your creator journey</p>
                        <p className="text-green-600">✅ The smartest investment you'll ever make</p>
                    </div>
                </div>
            </motion.div> */}
        </>
    );
};

export default Downsell1ContentSection;