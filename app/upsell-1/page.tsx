'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Lock } from 'lucide-react';
import Upsell1Popup from '@/components/upsell/UpsellsPopup';
import { useRouter } from 'next/navigation';
import UpsellHeroSection from '@/components/upsell/UpsellHeroSection';
import UpsellGuaranteeSection from '@/components/upsell/UpsellGuaranteeSection';
import UpsellContentSection from '@/components/upsell/UpsellContentSection';


const Upsell1Page = () => {
    const [showPopup, setShowPopup] = useState(false);
    const router = useRouter();

    const handleDecline = () => {
        setShowPopup(true);
    };

    const handleAccept = () => {
        // Handle upgrade to VIP - redirect to CopeCart or next step
        // window.location.href = '/upsell-2'; // Or CopeCart upgrade URL
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-red-50">
            {/* Alert Bar */}
            <div className="bg-red-600 text-white text-center py-3 px-4">
                <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
                    <Clock className="w-4 h-4" />
                    STOP! Your Order Is NOT Complete Yet...
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Hero Section Component */}
                <UpsellHeroSection />
                
                 {/* Content Section Component */}
                <UpsellContentSection />


                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        YES! I Want The Complete System That Took You to 1M+ Followers
                    </h3>
                    <p className="text-xl text-gray-700 mb-8">
                        Upgrade My Cinematic Studio to VIP for Just €197
                    </p>

                    <button
                        onClick={handleAccept}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-4 rounded-lg mb-6 transition-colors duration-300 inline-flex items-center gap-3"
                    >
                        <Lock className="w-6 h-6" />
                        UPGRADE NOW FOR ONLY €197
                    </button>

                    <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-8">
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            Instant Access
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            60-Day Money-Back Guarantee
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            Only Available on This Page
                        </span>
                    </div>
                </motion.div>

                {/* Guarantee Section Component */}
                <UpsellGuaranteeSection />

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.8 }}
                    className="text-center mb-8"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Secure Your Cinematic Studio VIP Upgrade Now
                    </h3>
                    <p className="text-xl text-gray-700 mb-6">
                        The Exact System for Explosive Instagram Growth
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        Regular Price: <span className="line-through">€497</span> • Today Only: <span className="text-red-600 font-bold text-2xl">€197</span>
                    </p>

                    <div className="space-y-4">
                        <button
                            onClick={handleAccept}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-12 py-4 rounded-lg transition-colors duration-300 inline-flex items-center gap-3"
                        >
                            🚀 YES! UPGRADE MY ORDER NOW
                        </button>

                        <div className="flex items-center justify-center gap-2 text-sm text-red-600">
                            <Clock className="w-4 h-4" />
                            <span>This offer disappears when you leave this page</span>
                        </div>

                        <button
                            onClick={handleDecline}
                            className="block mx-auto text-gray-500 hover:text-gray-700 underline text-sm transition-colors duration-300"
                        >
                            No thanks, I'll pass on this one-time opportunity
                        </button>
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

                        <Upsell1Popup
                            isOpen={showPopup}
                            onClose={() => setShowPopup(false)}
                            onAccept={() => {
                                router.push('/upsell-2-page');
                            }}
                            onDecline={() => {
                                router.push('/downsell-1-page');
                            }}
                        />

                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Upsell1Page;
