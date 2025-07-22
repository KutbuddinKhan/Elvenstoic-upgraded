'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Downsell1HeroSection from '@/components/downsell/DownsellHeroSection';
import Downsell1ContentSection from '@/components/downsell/DownsellContentSection';
import Downsell1Popup from '@/components/downsell/DownsellPopup';

const Downsell1Page = () => {
    const [showPopup, setShowPopup] = useState(false);
    const router = useRouter();

    const handleDecline = () => {
        setShowPopup(true);
    };

    const handleAccept = () => {
        // Handle upgrade to VIP at downsell price - redirect to CopeCart or next step
        window.location.href = '/upsell-2'; // Or CopeCart downsell URL
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
            {/* Alert Bar */}
            <div className="bg-orange-600 text-white text-center py-3 px-4">
                <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
                    <AlertTriangle className="w-4 h-4" />
                    WAIT! Special One-Time Offer Inside...
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Hero Section Component */}
                <Downsell1HeroSection />
                
                {/* Content Section Component */}
                <Downsell1ContentSection />

                {/* Final CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        Two Buttons. Two Futures.
                    </h3>
                    <p className="text-xl text-gray-700 mb-8">
                        The Clock Is Ticking - Every Minute You Wait, Someone Else Is Growing
                    </p>

                    <div className="space-y-4">
                        <button
                            onClick={handleAccept}
                            className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-4 rounded-lg transition-colors duration-300 inline-flex items-center gap-3"
                        >
                            ✅ YES - Give Me The VIP System for €97!
                        </button>
                        
                        <p className="text-lg text-green-600 font-semibold">
                            Smart move. Let's build your empire together.
                        </p>

                        <div className="flex items-center justify-center gap-2 text-sm text-orange-600 mt-6">
                            <Clock className="w-4 h-4" />
                            <span>This €97 price will NEVER exist again</span>
                        </div>

                        <button
                            onClick={handleDecline}
                            className="block mx-auto text-gray-500 hover:text-gray-700 underline text-sm transition-colors duration-300 mt-6"
                        >
                            ❌ No Thanks - I'll Pass on This Final Offer
                        </button>
                    </div>
                </motion.div>

                {/* PS Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.4 }}
                    className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center"
                >
                    <div className="space-y-4 text-gray-700">
                        <p className="font-semibold">
                            <strong>P.S.</strong> - I'm only offering this because I believe in you. You bought Cinematic Studio. You're reading this. You're SO close to breakthrough. Don't stop now. Not when the system that changed everything is right here for less than a nice dinner.
                        </p>
                        <p className="font-semibold">
                            <strong>P.P.S.</strong> - Seriously, €97 is less than what most people spend on coffee in a month. But this investment? It pays you back for YEARS. The choice is yours, but choose wisely. Your future self is watching.
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
                        <Downsell1Popup
                            isOpen={showPopup}
                            onClose={() => setShowPopup(false)}
                            onAccept={() => {
                                window.location.href = '/upsell-2'; // Or CopeCart downsell URL
                            }}
                            onDecline={() => {
                                router.push('/thank-you'); // Or wherever declined users should go
                            }}
                        />
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Downsell1Page;