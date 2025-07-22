'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Lock, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Upsell2HeroSection from '@/components/upsell-2/UpsellTwoHeroSection';
import UpsellTwoContentSection from '@/components/upsell-2/UpsellTwoContentSection';
import UpsellTwoGuaranteeSection from '@/components/upsell-2/UpsellTwoGuaranteeSection';
import Upsell2Popup from '@/components/upsell-2/UpsellTwoPopup';

const Upsell2Page = () => {
    const [showPopup, setShowPopup] = useState(false);
    const router = useRouter();

    const handleDecline = () => {
        setShowPopup(true);
    };

    const handleAccept = () => {
        // Handle upgrade to Studio Pro - redirect to CopeCart or next step
        // window.location.href = '/checkout'; // Or CopeCart upgrade URL
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
            {/* Alert Bar */}
            <div className="bg-red-600 text-white text-center py-3 px-4">
                <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
                    <Clock className="w-4 h-4" />
                    STOP! You're Only 1 Step Away From a €10K/Month Creator Business...
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Hero Section Component */}
                <Upsell2HeroSection />

                {/* Content Section Component */}
                <UpsellTwoContentSection />



                {/* Guarantee Section Component */}
                <UpsellTwoGuaranteeSection />


                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        YES! Turn My Following Into a €10K/Month Business
                    </h3>
                    <p className="text-xl text-gray-700 mb-4">
                        Get Studio Pro - The Monetization Engine
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        One-Time Investment: <span className="text-green-600 font-bold text-2xl">€297</span>
                    </p>

                    <button
                        onClick={handleAccept}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-4 rounded-lg mb-6 transition-colors duration-300 inline-flex items-center gap-3"
                    >
                        🚀 UNLOCK THE MONETIZATION ENGINE NOW
                    </button>

                    <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-8">
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            Instant Access
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            Lifetime Updates
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            60-Day Guarantee
                        </span>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-2 text-sm text-red-600">
                            <Clock className="w-4 h-4" />
                            <span>This page self-destructs when you leave</span>
                        </div>

                        <button
                            onClick={handleDecline}
                            className="block mx-auto text-gray-500 hover:text-gray-700 underline text-sm transition-colors duration-300"
                        >
                            No thanks, I'll keep creating for free
                        </button>
                    </div>

                    {/* P.S. Section */}
                    <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <p className="text-sm font-semibold text-yellow-800 mb-2">
                            P.S. - In the time it took you to read this page, I probably made another €50 from automated systems. That's the power of having a real monetization engine. The question is: When will you build yours?
                        </p>
                        <p className="text-sm text-yellow-700">
                            P.P.S. - Remember: €297 is less than what most creators spend on equipment they don't need. But this? This actually pays you back. Every. Single. Month.
                        </p>
                    </div>
                </motion.div>
            </div>





            {/* Popup Modal */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <Upsell2Popup
                            isOpen={showPopup}
                            onClose={() => setShowPopup(false)}
                            onAccept={() => {
                                // Handle final acceptance
                                window.location.href = '/checkout'; // Or CopeCart URL
                            }}
                            onDecline={() => {
                                router.push('/downsell-2-page');
                            }}
                        />
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Upsell2Page;