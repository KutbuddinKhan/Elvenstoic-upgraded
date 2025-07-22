'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Downsell2HeroSection from '@/components/downsell-2/Downsell-Herosection';
import Downsell2ContentSection from '@/components/downsell-2/DownsellContentSection';
import Downsell2GuaranteeSection from '@/components/downsell-2/DownsellGurantee';

const Downsell2Page = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
    const router = useRouter();

    // Timer countdown
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    // Redirect when timer expires
                    router.push('/thank-you-page');
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleDecline = () => {
        setShowPopup(true);
    };

    const handleAcceptFull = () => {
        // Handle full payment - redirect to CopeCart or checkout
        window.location.href = '/checkout-downsell-full'; // €197 full payment
    };

    const handleAcceptPlan = () => {
        // Handle payment plan - redirect to CopeCart or checkout
        window.location.href = '/checkout-downsell-plan'; // 3x €97 payment plan
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-red-50">
            {/* Alert Bar */}
            <div className="bg-red-600 text-white text-center py-3 px-4">
                <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
                    <AlertTriangle className="w-4 h-4" />
                    🚨 EMERGENCY OFFER: I'm Breaking My Own Rules Here...
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Hero Section */}
                <Downsell2HeroSection />

                {/* Content Section */}
                <Downsell2ContentSection />

                {/* Timer Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-red-600 text-white rounded-lg p-6 text-center mb-8 sticky top-4 z-10"
                >
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <Clock className="w-5 h-5" />
                        <span className="font-bold">OFFER EXPIRES IN:</span>
                    </div>
                    <div className="text-4xl font-bold">{formatTime(timeLeft)}</div>
                    <p className="text-sm mt-2 opacity-90">This page self-destructs when timer hits zero!</p>
                </motion.div>

                

                {/* Guarantee Section */}
                <Downsell2GuaranteeSection />

                {/* Final CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.0 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        Two Roads. Two Futures. One Decision.
                    </h3>
                    
                    <div className="space-y-4">
                        <button
                            onClick={handleAcceptFull}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-8 py-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-3"
                        >
                            ✅ YES - Give Me The System for €197!
                            <span className="text-sm">(Save €94)</span>
                        </button>
                        
                        <button
                            onClick={handleAcceptPlan}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-3 rounded-lg transition-colors duration-300"
                        >
                            💳 PAYMENT PLAN: 3x €97
                            <span className="block text-sm opacity-90">Same access. Easier on your budget.</span>
                        </button>

                        <button
                            onClick={handleDecline}
                            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold px-8 py-2 rounded-lg transition-colors duration-300 text-sm"
                        >
                            ❌ No, I Choose to Stay Broke
                        </button>
                    </div>
                </motion.div>

                {/* P.S. Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
                >
                    <p className="text-sm font-semibold text-yellow-800 mb-2">
                        P.S. - I'm literally losing money at this price. The only reason I'm doing this is because I believe in you. You've proven you're serious by making it this far. Don't let fear win. Not when you're THIS close to breakthrough.
                    </p>
                    <p className="text-sm text-yellow-700">
                        P.P.S. - In 6 months, €197 will feel like nothing compared to the thousands you'll be making. But right now, I know it feels big. That's why I added the payment plan. No more excuses. Time to become the creator who actually gets paid.
                    </p>
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
                        {/* <Downsell2Popup
                            isOpen={showPopup}
                            onClose={() => setShowPopup(false)}
                            onAcceptFull={() => {
                                window.location.href = '/checkout-downsell-full';
                            }}
                            onAcceptPlan={() => {
                                window.location.href = '/checkout-downsell-plan';
                            }}
                            onDecline={() => {
                                router.push('/thank-you-page');
                            }}
                        /> */}
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Downsell2Page;
