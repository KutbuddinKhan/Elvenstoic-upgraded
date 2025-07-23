'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Lock } from 'lucide-react';
import Upsell1Popup from '@/components/upsell/UpsellsPopup';
import { useRouter } from 'next/navigation';
import UpsellHeroSection from '@/components/upsell/UpsellHeroSection';
import UpsellGuaranteeSection from '@/components/upsell/UpsellGuaranteeSection';
import UpsellContentSection from '@/components/upsell/UpsellContentSection';
import Image from 'next/image';

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
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-800/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-purple-800/10 rounded-full blur-3xl"></div>
            </div>

            {/* Alert Bar */}
            <div className="relative z-10 bg-red-600 text-white text-center py-3 px-4">
                <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
                    <Clock className="w-4 h-4" />
                    STOP! Your Order Is NOT Complete Yet...
                </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
                {/* Hero Section Component */}
                <UpsellHeroSection />

                {/* Content Section Component */}
                <UpsellContentSection />

                {/* CTA Section */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="text-center mb-12 px-4"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                        YES! I Want The Complete System That Took You to <span>1.000.000+ Followers</span>
                    </h3>
                    <p className="text-lg md:text-xl text-blue-100/80 mb-8">
                        Upgrade My Cinematic Studio to VIP for Just €197
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative group mb-6 inline-block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-200 z-0" />

                        <button
                            onClick={handleAccept}
                            className="relative z-10 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 rounded-lg transition-colors duration-300 inline-flex items-center gap-3 border border-green-500/50"
                        >
                            <Lock className="w-5 md:w-6 h-5 md:h-6" />
                            UPGRADE NOW FOR ONLY €197
                        </button>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm text-blue-100/70 mb-8">
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400" />
                            Instant Access
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400" />
                            60-Day Money-Back Guarantee
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400" />
                            Only Available on This Page
                        </span>
                    </div>
                </motion.div> */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="text-center mb-12 px-4"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                        YES! I Want the Complete System That Took me to <span className="underline text-yellow-300">1,000,000+ Followers</span>
                    </h3>

                    <p className="text-base md:text-lg text-blue-100/80 mb-6">
                        Get a <span className="font-semibold">proven step-by-step blueprint</span>  to make your
                        first €1,000 with Instagram in the next 14 days.
                    </p>

                    <div className="bg-white/5 border border-green-600 rounded-xl p-6 max-w-md mx-auto shadow-xl mb-6">
                        <p className="text-base md:text-lg text-white font-medium mb-2">
                            Regular Price <span className="line-through text-red-400">€497</span> &nbsp;-&nbsp;
                            <span className="text-green-600 font-bold text-xl md:text-2xl">Today Only €197</span>
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group mb-4 inline-block"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-200 z-0" />
                            <button
                                onClick={handleAccept}
                                className="relative z-10 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 rounded-lg transition-colors duration-300 inline-flex items-center gap-3 border border-green-500/50"
                            >
                                <Lock className="w-5 md:w-6 h-5 md:h-6" />
                                Add to Cart — €197
                            </button>
                        </motion.div>

                        {/* Payment Icons */}
                        <div className="flex justify-center mt-4">
                            <Image
                                src="/upsell-1/cards.png"
                                alt="Payment Methods"
                                width={220}
                                height={30}
                                className="h-auto w-auto max-w-[240px]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm text-blue-100/70 mb-6">
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400" />
                            Instant Access
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400" />
                            60-Day Money-Back Guarantee
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400" />
                            Available Only on This Page
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
                    className="text-center mb-12 px-4"
                >
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                        Secure Your <span className="text-blue-300">Cinematic Studio VIP</span> Upgrade
                    </h3>

                    <p className="text-lg md:text-xl text-blue-100 mb-4">
                        The Proven System Behind Explosive Instagram Growth
                    </p>

                    <p className="text-base md:text-lg text-blue-200 mb-6">
                        Regular Price: <span className="line-through text-blue-300">€497</span> &nbsp;•&nbsp;
                        <span className="text-red-500 font-semibold text-xl md:text-2xl">
                            Today Only: €197
                        </span>
                    </p>

                    <div className="space-y-5">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative inline-block group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-80 group-hover:opacity-100 transition duration-300 z-0" />
                            <button
                                onClick={handleAccept}
                                className="relative z-10 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 text-white font-semibold text-lg md:text-xl px-8 md:px-12 py-4 rounded-xl transition-all duration-300 shadow-lg border border-blue-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                🚀 YES! UPGRADE MY ORDER NOW
                            </button>
                        </motion.div>

                        <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
                            <Clock className="w-4 h-4" />
                            <span>This exclusive offer vanishes when you leave this page</span>
                        </div>

                        <button
                            onClick={handleDecline}
                            className="block mx-auto text-red-400 hover:text-red-500 underline text-sm transition-colors duration-300"
                        >
                            No thanks, I’ll pass on this one-time opportunity
                        </button>
                    </div>
                </motion.div>


            </div>

            {showPopup && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-x-hidden overflow-y-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full max-w-3xl mx-auto"
                    >
                        <Upsell1Popup
                            isOpen={showPopup}
                            onClose={() => setShowPopup(false)}
                            onAccept={() => router.push('/upsell-2')}
                            onDecline={() => router.push('/downsell-1-page')}
                        />
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Upsell1Page;
