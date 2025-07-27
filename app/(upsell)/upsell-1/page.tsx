"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Clock, Lock } from "lucide-react";
import Upsell1Popup from "@/components/upsell/UpsellsPopup";
import { useRouter } from "next/navigation";
import UpsellHeroSection from "@/components/upsell/UpsellHeroSection";
import UpsellGuaranteeSection from "@/components/upsell/UpsellGuaranteeSection";
import UpsellContentSection from "@/components/upsell/UpsellContentSection";
import Image from "next/image";

const Upsell1Page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDecline = () => {
    setShowPopup(true);
  };

  const handleAccept = () => {
    setIsLoading(true);
    // Redirect to CopeCart checkout for Upsell 1 (197€ Cinematic Studio Growth System)
    // Replace with your actual CopeCart product URL for Upsell 1
    const copeCartUrl = "https://copecart.com/products/c6f1ba46/checkout?upsell=1&price=197";
    window.location.href = copeCartUrl;
  };

  const handlePopupAccept = () => {
    // When user accepts from popup, redirect to CopeCart (same as main accept)
    setIsLoading(true);
    const copeCartUrl = "https://copecart.com/products/c6f1ba46/checkout?upsell=1&price=197";
    window.location.href = copeCartUrl;
  };

  const handlePopupDecline = () => {
    // When user declines from popup, redirect to upsell-2-page
    router.push("/upsell-2-page");
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

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="text-center mb-12 px-4"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            YES! I Want The Complete Growth System That Created 1,000,000+ Followers
          </h3>

          <p className="text-base md:text-lg font-semibold text-yellow-100 mb-6">
            Unlock Cinematic Studio Growth System for Just €197
          </p>

          {/* responsive price box */}
          <div className="bg-white/5 border-2 border-dashed border-yellow-400 rounded-xl p-4 sm:p-6 max-w-xl mx-auto shadow-xl mb-6 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 sm:mb-6">
              <p className="text-sm sm:text-base md:text-lg text-white font-medium">
                Regular Price{" "}
                <span className="line-through text-red-400">€497</span>
              </p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 font-bold text-lg sm:text-xl md:text-2xl">
                Today Only €197
              </p>
            </div>

            <motion.div
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="relative group w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-200 z-0" />
              <button
                onClick={handleAccept} 
                disabled={isLoading}
                className="relative z-10 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 disabled:opacity-70 disabled:cursor-not-allowed text-gray-900 font-bold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg transition-colors duration-300 w-full inline-flex items-center justify-center gap-2 md:gap-3 border border-yellow-400/50"
              >
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">
                  {isLoading ? "PROCESSING..." : "UPGRADE NOW FOR ONLY €197"}
                </span>
              </button>
            </motion.div>

            {/* Payment Icons */}
            <div className="flex justify-center mt-4 sm:mt-6">
              <Image
                src="/upsell-1/cards.png"
                alt="Payment Methods"
                width={220}
                height={30}
                className="h-auto w-full max-w-[240px]"
                priority
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-6 text-sm text-yellow-100 mb-6">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-yellow-400" />
              Instant Access
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-yellow-400" />
              60-Day Money-Back Guarantee
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-yellow-400" />
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
            Secure Your Cinematic Studio Growth System
          </h3>

          <p className="text-lg md:text-xl text-blue-100 mb-4">
            The Exact System for Explosive Instagram Growth
          </p>

          <p className="text-base md:text-lg text-blue-200 mb-6">
            Regular Price:{" "}
            <span className="line-through text-blue-300">€497</span>{" "}
            &nbsp;•&nbsp;
            <span className="text-red-500 font-semibold text-xl md:text-2xl">
              Today Only: €197
            </span>
          </p>

          <div className="space-y-5">
            <motion.div
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="relative inline-block group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-80 group-hover:opacity-100 transition duration-300 z-0" />
              <button
                onClick={handleAccept}
                disabled={isLoading}
                className="relative z-10 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-lg md:text-xl px-8 md:px-12 py-4 rounded-xl transition-all duration-300 shadow-lg border border-blue-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                🚀 {isLoading ? "PROCESSING..." : "YES! UPGRADE MY ORDER NOW"}
              </button>
            </motion.div>

            <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
              <Clock className="w-4 h-4" />
              <span>
                This exclusive offer vanishes when you leave this page
              </span>
            </div>

            <button
              onClick={handleDecline}
              disabled={isLoading}
              className="block mx-auto text-red-400 hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed underline text-sm transition-colors duration-300"
            >
              No thanks, I'll pass on this one-time opportunity
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
              onAccept={handlePopupAccept}
              onDecline={handlePopupDecline}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Upsell1Page;
