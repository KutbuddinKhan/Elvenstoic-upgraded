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

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handlePopupAccept = () => {
        setShowPopup(false);
        window.location.href = '/upsell-2'; // Or CopeCart downsell URL
    };

    const handlePopupDecline = () => {
        setShowPopup(false);
        router.push('/thank-you'); // Or wherever declined users should go
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-800/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-purple-800/10 rounded-full blur-3xl"></div>
            </div>

            {/* Alert Bar */}
            <div className="relative z-10 bg-orange-600 text-white text-center py-3 px-4">
                <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
                    <AlertTriangle className="w-4 h-4" />
                    WAIT! Special One-Time Offer Inside...
                </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
                {/* Hero Section Component */}
                <Downsell1HeroSection />

                {/* Content Section Component */}
                <Downsell1ContentSection />

                {/* Final CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="text-center mb-12 px-4"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Two Buttons. Two Futures.
                    </h3>
                    <p className="text-lg md:text-xl text-blue-100/80 mb-8">
                        The Clock Is Ticking - Every Minute You Wait, Someone Else Is Growing
                    </p>

                    <div className="space-y-4 md:space-y-5">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group inline-block"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-200 z-0" />
                            <button
                                onClick={handleAccept}
                                className="relative z-10 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 rounded-lg transition-colors duration-300 inline-flex items-center gap-3 border border-green-500/50"
                            >
                                ✅ YES - Give me the growth system behind 1.000.000 followers for 97€
                            </button>
                        </motion.div>

                        <p className="text-base md:text-lg text-green-400 font-semibold">
                            Smart move. Let's build your empire together.
                        </p>

                        <button
                            onClick={handleDecline}
                            className="block mx-auto text-red-400 hover:text-red-500 underline text-sm transition-colors duration-300 mt-6"
                        >
                            ❌ No Thanks - I'll Pass on This Final Offer
                        </button>

                        <div className="flex items-center justify-center gap-2 text-sm text-red-400 mt-6">
                            <span>I understand. But remember - this chance won't come again.
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* PS Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.4 }}
                    className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 md:p-6 text-center backdrop-blur-sm"
                >
                    <div className="space-y-4 text-sm md:text-base text-blue-100/80">
                        <p className="font-semibold">
                            <strong className="text-white">P.S.</strong> - I'm only offering this because I believe in you. You bought Cinematic Studio. You're reading this. You're SO close to breakthrough. Don't stop now. Not when the system that changed everything is right here for less than a nice dinner.
                        </p>
                        <p className="font-semibold">
                            <strong className="text-white">P.P.S.</strong> - Seriously, €97 is less than what most people spend on coffee in a month. But this investment? It pays you back for YEARS. The choice is yours, but choose wisely. Your future self is watching.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <Downsell1Popup
                    isOpen={showPopup}
                    onClose={handleClosePopup}
                    onAccept={handlePopupAccept}
                    onDecline={handlePopupDecline}
                />
            )}
        </div>
    );
};

export default Downsell1Page;
