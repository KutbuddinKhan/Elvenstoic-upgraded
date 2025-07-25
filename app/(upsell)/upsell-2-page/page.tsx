"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Clock, RocketIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Upsell2HeroSection from "@/components/upsell-2/UpsellTwoHeroSection";
import UpsellTwoContentSection from "@/components/upsell-2/UpsellTwoContentSection";
import UpsellTwoGuaranteeSection from "@/components/upsell-2/UpsellTwoGuaranteeSection";
import Upsell2Popup from "@/components/upsell-2/UpsellTwoPopup";
import Image from "next/image";

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
          STOP! You're Only 1 Step Away From a €10K/Month Creator Business...
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
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
          className="text-center mb-12 px-4"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            YES! Turn My Following Into a{" "}
            <span className="underline">€10K/Month Business</span>
          </h3>

          <p className="text-base md:text-lg font-semibold text-blue-100/80 mb-6">
            Get The Cinematic Studio Beginner Friendly Monetization System
          </p>

          {/* Price Box */}
          <div className="bg-white/5 border-2 border-dashed border-yellow-400 rounded-xl p-4 sm:p-6 max-w-xl mx-auto shadow-xl mb-6 w-full">
            <p className="text-base md:text-lg text-yellow-400 font-medium mb-2">
              One-Time Investment: €297
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full"
            >
              <div className="relative w-full rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 blur-sm opacity-75 group-hover:opacity-100 transition duration-200" />

                <button
                  onClick={handleAccept}
                  className="relative z-10 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold text-xs sm:text-sm md:text-base px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 md:gap-3 border border-yellow-400/50"
                >
                  <RocketIcon className="w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-center">
                    Unlock the Beginner friendly monetization System now
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Payment Icons */}
            <div className="flex justify-center mt-4">
              <Image
                src="/upsell-1/cards.png"
                alt="Payment Methods"
                width={220}
                height={30}
                className="h-auto w-full max-w-[240px]"
              />
            </div>
          </div>


          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-6 text-sm text-blue-100/70 mb-6">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-yellow-400" />
              Instant Access
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-yellow-400" />
              Lifetime Updates
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-yellow-400" />
              60-Day Guarantee
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm text-amber-400">
              <Clock className="w-4 h-4" />
              <span>This page self-destructs when you leave</span>
            </div>

            <button
              onClick={handleDecline}
              className="block mx-auto text-red-400 hover:text-red-500 underline text-sm transition-colors duration-300"
            >
              No thanks, I'll keep creating for free
            </button>
          </div>

          {/* P.S. Section */}
          <div className="mt-8 bg-amber-900/10 border border-amber-800/30 rounded-lg p-6">
            <p className="text-sm text-amber-200 mb-2">
              P.S. - In the time it took you to read this page, I probably made
              another €50 from automated systems. That's the power of having a
              real monetization engine. The question is: When will you build
              yours?
            </p>
            <p className="text-sm text-amber-100">
              P.P.S. - Remember: €297 is less than what most creators spend on
              equipment they don't need. But this? This actually pays you back.
              Every. Single. Month.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-x-hidden overflow-y-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-3xl mx-auto"
          >
            <Upsell2Popup
              isOpen={showPopup}
              onClose={() => setShowPopup(false)}
              onAccept={() => {
                // Handle final acceptance
                window.location.href = "/checkout"; // Or CopeCart URL
              }}
              onDecline={() => {
                router.push("/downsell-2-page");
              }}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Upsell2Page;
