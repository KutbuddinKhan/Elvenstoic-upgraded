'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Downsell2HeroSection from '@/components/downsell-2/Downsell-Herosection';
import Downsell2ContentSection from '@/components/downsell-2/DownsellContentSection';
import Downsell2Popup from '@/components/downsell-2/DownsellPopup';

const Downsell2Page = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
    const [isTimerActive, setIsTimerActive] = useState(true);
    const router = useRouter();

    // Prevent body scroll when popup is open
    useEffect(() => {
        if (showPopup) {
            // Store current scroll position
            const scrollY = window.scrollY;
            
            // Apply styles to prevent scrolling
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
            
            return () => {
                // Restore scroll position and remove fixed positioning
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [showPopup]);

    // Timer countdown with proper cleanup
    useEffect(() => {
        if (!isTimerActive) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    setIsTimerActive(false);
                    // Small delay before redirect to ensure state updates
                    setTimeout(() => {
                        router.push('/thank-you-page');
                    }, 100);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router, isTimerActive]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleDecline = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleAcceptFull = () => {
        // Stop timer when user accepts
        setIsTimerActive(false);
        setShowPopup(false);
        // Handle full payment - redirect to CopeCart or checkout
        window.location.href = '/checkout-downsell-full'; // €197 full payment
    };

    const handleAcceptPlan = () => {
        // Stop timer when user accepts
        setIsTimerActive(false);
        setShowPopup(false);
        // Handle payment plan - redirect to CopeCart or checkout
        window.location.href = '/checkout-downsell-plan'; // 3x €97 payment plan
    };

    const handleFinalDecline = () => {
        setIsTimerActive(false);
        setShowPopup(false);
        router.push('/thank-you-page');
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
                    🚨 EMERGENCY OFFER: I'm Breaking My Own Rules Here...
                </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
                {/* Hero Section */}
                <Downsell2HeroSection />

                {/* Content Section */}
                <Downsell2ContentSection />

                {/* Timer Section - Fixed positioning and z-index issues */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-4 md:p-6 text-center mb-8 shadow-2xl border border-orange-500/50"
                    style={{
                        position: 'sticky',
                        top: '20px',
                        zIndex: 50
                    }}
                >
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <Clock className="w-5 h-5 animate-pulse" />
                        <span className="font-bold text-sm md:text-base">OFFER EXPIRES IN:</span>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2 font-mono">
                        {formatTime(timeLeft)}
                    </div>
                    <p className="text-xs md:text-sm opacity-90">
                        This page self-destructs when timer hits zero!
                    </p>
                    {timeLeft <= 60 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-2 text-yellow-300 font-bold text-sm"
                        >
                            ⚠️ FINAL WARNING: Less than 1 minute left!
                        </motion.div>
                    )}
                </motion.div>

                {/* Final CTA Section - Fixed button interactions and mobile responsiveness */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.0 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                        Two Roads. Two Futures. One Decision.
                    </h3>

                    <div className="space-y-6 max-w-lg mx-auto px-4">
                        {/* Full Payment Button - Fixed click handling */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleAcceptFull}
                            disabled={timeLeft <= 0}
                            className="relative group w-full overflow-hidden rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-75 group-hover:opacity-100 transition duration-200" />
                            <div className="relative z-10 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-sm sm:text-base lg:text-xl py-3 sm:py-4 px-4 sm:px-6 lg:px-12 transition-colors duration-300 border border-green-500/50 rounded-lg">
                                ✅ YES - Give Me The System for €197!
                            </div>
                        </motion.button>
                        
                        <p className="text-sm md:text-base lg:text-lg text-green-400 font-semibold">
                            Finally. Let's turn your content into cash.
                        </p>

                        {/* Payment Plan Button - Fixed click handling */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleAcceptPlan}
                            disabled={timeLeft <= 0}
                            className="relative group w-full overflow-hidden rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-75 group-hover:opacity-100 transition duration-200" />
                            <div className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm sm:text-base lg:text-lg py-3 px-4 sm:px-6 lg:px-12 transition-colors duration-300 border border-blue-500/50 rounded-lg">
                                💳 PAYMENT PLAN: 3x €97
                            </div>
                        </motion.button>
                        
                        <p className="text-sm md:text-base lg:text-lg text-blue-400 font-semibold">
                            Same access. Easier on your budget.
                        </p>

                        {/* Scarcity + Decline - Fixed spacing and responsive text */}
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-orange-400 text-center">
                                <Clock className="w-4 h-4 flex-shrink-0" />
                                <span>This €197 price will NEVER exist again</span>
                            </div>

                            <button
                                onClick={handleDecline}
                                disabled={timeLeft <= 0}
                                className="block mx-auto text-red-400 hover:text-red-500 underline text-sm transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                ❌ No, I Choose to Stay Broke
                            </button>
                            
                            <p className="text-xs sm:text-sm text-slate-400 italic">
                                This is goodbye. There's no coming back.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* P.S. Section - Improved mobile spacing */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 md:p-6 text-left md:text-center backdrop-blur-sm"
                >
                    <div className="space-y-4 text-sm md:text-base text-blue-100/80 leading-relaxed">
                        <p className="font-medium">
                            <strong className="text-white">P.S.</strong> - I'm literally losing money at this price. The only reason I'm doing this is because I believe in you. You've proven you're serious by making it this far. Don't let fear win. Not when you're THIS close to breakthrough.
                        </p>
                        <p className="font-medium">
                            <strong className="text-white">P.P.S.</strong> - In 6 months, €197 will feel like nothing compared to the thousands you'll be making. But right now, I know it feels big. That's why I added the payment plan. No more excuses. Time to become the creator who actually gets paid.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <Downsell2Popup
                    isOpen={showPopup}
                    onClose={handleClosePopup}
                    onAcceptFull={handleAcceptFull}
                    onAcceptPlan={handleAcceptPlan}
                    onDecline={handleFinalDecline}
                />
            )}
        </div>
    );
};

export default Downsell2Page;
