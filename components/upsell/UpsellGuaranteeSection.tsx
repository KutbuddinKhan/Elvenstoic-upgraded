'use client';

import React from 'react';
import { motion } from 'framer-motion';

const UpsellGuaranteeSection: React.FC = () => {
    return (
        <>
            {/* Guarantee */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12"
            >
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                    My Personal "Worth It or Free" Guarantee
                </h3>
                <p className="text-lg text-blue-800 mb-4">
                    I'm so confident this system will transform your Instagram game forever that I'm making you this promise:
                </p>
                <p className="text-lg text-blue-800 mb-4">
                    If after 60 days you don't feel the VIP upgrade was worth every single penny – email me and you'll get your money back.
                </p>
                <p className="text-lg font-semibold text-blue-900">
                    No questions. No drama. No fine print.
                </p>
                <p className="text-lg font-semibold text-blue-900 mt-4">
                    Either it transforms your growth – or it costs you nothing.
                </p>
            </motion.div>

            {/* Choice Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.6 }}
                className="mb-12"
            >
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    The Choice Is Yours.
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="text-xl font-bold text-red-800 mb-4">Option 1: You say "No" and try it alone.</h4>
                        <p className="text-red-700 mb-4">Maybe you'll make it. Maybe you won't.</p>
                        <p className="text-red-700">
                            But one thing's for sure: It'll take longer. It'll be harder. And you'll make the same mistakes I already made.
                        </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="text-xl font-bold text-green-800 mb-4">Option 2: You say "Yes" and get the shortcut.</h4>
                        <p className="text-green-700 mb-4">
                            In 6 months, you could be at 100K+ followers. With brand deals in your DMs. With a system that works for you.
                        </p>
                        <p className="text-green-800 font-semibold">What's it going to be?</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default UpsellGuaranteeSection;
