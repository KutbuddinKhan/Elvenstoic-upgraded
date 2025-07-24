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
                className="mb-8 md:mb-12"
            >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 text-center">
                    What You Get for €97 (TODAY ONLY):
                </h3>
                <div className="space-y-3 md:space-y-4">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                            className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 md:p-6 shadow-sm backdrop-blur-sm"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                                <div className="flex items-start gap-3 flex-1 min-w-0">
                                    <Check className="w-5 h-5 md:w-6 md:h-6 text-green-400 mt-1 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm md:text-base text-blue-100/80 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-green-400 font-bold text-base md:text-lg whitespace-nowrap bg-green-900/20 px-3 py-1 rounded-full border border-green-600/30 self-start sm:ml-4">
                                    Value: {feature.value}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pricing Summary */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className="bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-600/50 rounded-lg p-6 md:p-8 mt-6 md:mt-8 text-center backdrop-blur-sm"
                >
                    <div className="space-y-2 md:space-y-3">
                        <p className="text-base md:text-xl text-blue-100/90">
                            <strong className="text-white">Total Real Value:</strong> 
                            <span className="text-xl md:text-2xl font-bold text-blue-300 ml-2">€1,782</span>
                        </p>
                        <p className="text-base md:text-xl text-blue-100/90">
                            <strong className="text-white">Regular VIP Price:</strong> 
                            <span className="line-through text-red-400 ml-2 text-lg md:text-xl">€197</span>
                        </p>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400">
                            Your One-Time Price: €97
                        </p>
                        <p className="text-sm md:text-base text-green-300 font-semibold mt-3">
                            That's 95% OFF the real value!
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Clock Ticking Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-600/50 rounded-lg p-6 md:p-8 mb-8 md:mb-12 text-center backdrop-blur-sm"
            >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 md:mb-6">
                    <Clock className="w-6 h-6 md:w-8 md:h-8 text-red-400 flex-shrink-0" />
                    <h3 className="text-2xl md:text-3xl font-bold text-red-300 text-center sm:text-left">
                        The Clock Is Ticking:
                    </h3>
                </div>
                <div className="space-y-3 md:space-y-4 text-base md:text-lg text-red-200/90">
                    <p>Every minute you wait, someone else is implementing these strategies.</p>
                    <p>Someone else is growing.</p>
                    <p>Someone else is winning.</p>
                    <p className="text-lg md:text-xl font-bold text-red-300 mt-4 md:mt-6">
                        Don't let another opportunity slip through your fingers.
                    </p>
                </div>
            </motion.div>

            {/* Challenge Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 border border-yellow-600/50 rounded-lg p-6 md:p-8 mb-8 md:mb-12 backdrop-blur-sm"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-4 md:mb-6 text-center">
                    Here's My Challenge to You:
                </h3>
                <div className="space-y-3 md:space-y-4 text-base md:text-lg text-yellow-200/90">
                    <p className="font-semibold text-yellow-300">Give me 30 days.</p>
                    <p>Follow the system. Apply the strategies. Do the work.</p>
                    <p>
                        If you don't see SIGNIFICANT growth...<br />
                        If you don't feel like this was the best €97 you ever spent...
                    </p>
                     <p className="text-yellow-300 font-bold text-xl md:text-2xl text-center">
                           I'll refund every single cent.
                        </p>
                        <p className="text-yellow-200 text-lg md:text-xl text-center">
                            You literally have nothing to lose.
                        </p>
                       
                </div>
            </motion.div>
        </>
    );
};

export default Downsell1ContentSection;