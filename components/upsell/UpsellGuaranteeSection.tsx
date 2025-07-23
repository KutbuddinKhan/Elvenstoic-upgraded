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
                className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-600/50 rounded-lg p-6 md:p-8 mb-12 backdrop-blur-sm"
            >
                <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-6">
                    My Personal "Worth It or Free" Guarantee
                </h3>
                <p className="text-base md:text-lg text-blue-100/80 mb-4">
                    I'm so confident this system will transform your Instagram game forever that I'm making you this promise:
                </p>
                <p className="text-base md:text-lg font-semibold text-blue-100/80 mb-4">
                    If after 60 days you don't feel the VIP upgrade was worth every single penny - email me and you'll get your money back.
                </p>
                <p className="text-base md:text-lg text-blue-100/80 mb-2">
                    No questions. No drama. No fine print.
                </p>
                <p className="text-base md:text-lg text-blue-100/80">
                    Either it transforms your growth - or it costs you nothing.
                </p>
            </motion.div>

            {/* Choice Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.6 }}
                className="mb-12"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                    The Choice Is Yours.
                </h3>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-600/50 rounded-lg p-4 md:p-6 backdrop-blur-sm">
                        <h4 className="text-lg md:text-xl font-bold text-red-300 mb-4">
                            Option 1: You say "No" and try it alone.
                        </h4>
                        <p className="text-sm md:text-base text-red-200/90 mb-4">
                            Maybe you'll make it. Maybe you won't.
                        </p>
                        <p className="text-sm md:text-base text-red-200/90">
                            But one thing's for sure: It'll take longer. It'll be harder. And you'll make the same mistakes I already made.
                        </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-900/40 to-green-800/40 border border-green-600/50 rounded-lg p-4 md:p-6 backdrop-blur-sm">
                        <h4 className="text-lg md:text-xl font-bold text-green-300 mb-4">
                            Option 2: You say "Yes" and get the shortcut.
                        </h4>
                        <p className="text-sm md:text-base text-green-200/90 mb-4">
                            In 6 months, you could be at 100K+ followers. With brand deals in your DMs. With a system that works for you.
                        </p>
                        <p className="text-sm md:text-base text-green-300 font-semibold">
                            What's it going to be?
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default UpsellGuaranteeSection;
