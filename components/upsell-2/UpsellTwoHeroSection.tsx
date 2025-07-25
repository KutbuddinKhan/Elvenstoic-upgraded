"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Star, DollarSign, Clock } from "lucide-react";
import Image from "next/image";

const Upsell2HeroSection = () => {
  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          You Have The Content. You Have The Growth.{" "}
          <span className="text-green-400">Now Get The MONEY.</span>
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Turn Your Instagram Following Into a Real Business That Pays You Every
          Single Month
        </p>
        {/* <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-6">
          <p className="text-lg font-semibold text-amber-200">
            This is NOT part of Cinematic Studio Growth System - This is the
            MONETIZATION layer.
          </p>
        </div> */}
      </motion.div>

      {/* Reality Check Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-600/50 p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-red-300 mb-4">
          Real talk for a second... 🚨
        </h2>
        <div className="space-y-3 text-red-200/90">
          <p>
            How many creators do you know with 50K, 100K, even 500K followers...
          </p>
          <p className="font-semibold">Who are still broke?</p>
          <p>
            They post every day. They get millions of views. Their content is
            fire.
          </p>
          <p className="font-semibold text-xl text-red-300">
            But their bank account? Empty.
          </p>
        </div>
        <div className="mt-6 bg-slate-800/50 rounded-lg p-4">
          <p className="text-red-200 font-semibold">
            Meanwhile, I'm sitting here with a faceless brand, making over
            €30,000 in the last 90 days from multiple different income streams.
          </p>
          <p className="text-red-300 mt-2">
            Not from sponsorships I have to beg for.
          </p>
          <p className="text-red-300">Not from selling my soul to brands.</p>
          <p className="text-xl font-bold text-white mt-2">
            From a system. A real business. Built on Instagram.
          </p>
        </div>
      </motion.div>

      {/* Understanding Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-bold text-white mb-6 text-center">
          Here's What Most Creators Don't Understand:
        </h3>
        <div className="bg-blue-900/20 rounded-lg p-8">
          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                1
              </div>
              <span className="text-blue-300">
                Growing an audience is only STEP ONE.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                2
              </div>
              <span className="text-blue-300">
                Having great content is only STEP TWO.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                3
              </div>
              <span className="text-green-300 font-semibold">
                The REAL game?
              </span>
            </div>
          </div>
          <div className="mt-6 bg-slate-800/50 rounded-lg p-6">
            <p className=" text-white mb-2">
              Turning those followers into customers. Systems. Revenue streams.
              A business that runs while you sleep.
            </p>
            <p className="text-lg font-semibold text-gray-300">
              That's what separates hobbyists from{" "}
              <strong className="text-white font-bold">CEOs</strong>.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Revenue Proof Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg p-8 mb-12 border border-green-800/30"
      >
        <h3 className="text-3xl font-bold text-green-300 mb-6 text-center">
          Let Me Show You Something:
        </h3>

        {/* ✅ Updated aspect ratios for better mobile experience */}
        <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden mt-4 bg-transparent aspect-[5/6] sm:aspect-[4/3] lg:aspect-[16/9]">
          <Image
            src="/upsell-2/let-me-show-you.png"
            alt="Growth 18m Views"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            priority
          />
        </div>

        <h4 className="text-2xl font-bold text-green-300 mb-6 mt-8">
          My Last 90 Days:
        </h4>

        <div className="grid md:grid-cols-2 gap-4 text-lg mb-6">
          <div className="flex items-center gap-3">
            <DollarSign className="w-6 h-6 text-green-400" />
            <span className="font-semibold text-green-200">
              €27,345.07 in total revenue
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-green-400" />
            <span className="font-semibold text-green-200">
              €1,120 notifications while sleeping
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-green-400" />
            <span className="font-semibold text-green-200">
              $2,500 from a single brand deal
            </span>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-lg p-6">
          <p className="text-lg text-green-300 mb-2">
            All from Instagram. All without showing my face. All systematic.
          </p>
          <p className="text-lg text-green-300 mb-2">
            This isn't luck. This isn't a one-time thing.
          </p>
          <p className="text-lg font-semibold text-green-300">
            This is what happens when you have{" "}
            <strong className="text-xl">THE SYSTEM</strong>.
          </p>
        </div>
      </motion.div>



      {/* Product Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mb-12"
      >
        <h3 className="text-4xl font-bold text-white mb-4">
          Introducing: Cinematic Studio Beginner Friendly Monetization System
        </h3>
        <p className="text-xl text-gray-300 mb-6 font-bold">
          The Complete Business System Behind My €10K/Month Creator Brand
        </p>
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-6">
          <p className="text-lg  text-amber-200 mb-2">
            This isn't another "make money online" course.
          </p>
          <p className="text-lg text-amber-200">
            This is the EXACT playbook I use. Every day. To turn content into
            cash.
          </p>
          <p className="text-xl font-semibold text-amber-200 mt-2">
            No theory. No fluff. Just pure, proven systems.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Upsell2HeroSection;
