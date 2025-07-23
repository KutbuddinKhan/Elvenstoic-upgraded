"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Carousel from "./Carousel";
import ImageCarousel from "./Carousel";
import Image from "next/image";

interface ImageData {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const modules = [
  {
    number: 1,
    title: "The €8K Product Launch System",
    icon: "🚀",
    description: "See exactly how I made €8,000 in 72 hours from ONE launch.",
    features: [
      "My complete launch timeline & Strategy (10 days before to 3 days after)",
      "Every single Story, Post, and Reel I used (with my templates)",
      "The psychological triggers that made people BUY",
      "My DM Automation scripts that converted browsers into buyers",
      "The pricing strategy that maximized revenue",
    ],
    result: "This module alone has made me over €30,000 this year.",
    image: "/upsell-2/module-1.jpg",
  },
  // ... rest of the modules array
];

const bonuses = [
  {
    title: "Complete Swipe File",
    icon: "📱",
    description: "Every email, DM, and promo post that's made me money",
  },
  {
    title: "Live Launch Breakdown",
    icon: "🎬",
    description:
      "Watch me plan and execute a 2 Days €4K Promo Launch in real-time",
  },
];

const targetAudience = [
  { text: "You have an audience (or are building one)", isFor: true },
  { text: 'You\'re tired of creating content for "exposure"', isFor: true },
  { text: "You want a REAL business, not just likes", isFor: true },
  { text: "You're ready to join the 1% who actually make money", isFor: true },
  { text: 'This is NOT for people who want "get rich quick"', isFor: false },
  { text: "This is NOT for people afraid of selling", isFor: false },
  { text: "This is NOT for people who won't implement", isFor: false },
];

const galleryImages: ImageData[] = [
  // ... gallery images array
];

const UpsellTwoContentSection = () => {
  return (
    <>
      {/* Modules Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          Here's Exactly What You're Getting:
        </h3>
        <div className="space-y-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-2xl">{module.icon}</span>
                  MODULE {module.number}: {module.title}
                </h4>
              </div>
              <p className="text-gray-300 mb-4 font-semibold">
                {module.description}
              </p>
              <ul className="space-y-2 mb-4">
                {module.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              {module.image && (
                <div className="mb-4">
                  <Image
                    src={module.image}
                    alt={module.title}
                    width={800}
                    height={450}
                    className="rounded-lg w-full h-auto object-contain"
                    priority
                  />
                </div>
              )}
              <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-3">
                <p className="text-green-300 font-semibold">{module.result}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bonuses Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          🎁 EXCLUSIVE BONUSES:
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-6"
            >
              <h4 className="text-lg font-bold text-amber-200 flex items-center gap-2 mb-2">
                <span className="text-xl">{bonus.icon}</span>
                Bonus #{index + 1}: {bonus.title}
              </h4>
              <p className="text-amber-200">{bonus.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* System Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-slate-800/30 rounded-lg p-8 mb-12 border border-slate-700"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          This Is NOT Part of Cinematic Studio or VIP
        </h3>
        <p className="text-lg text-gray-300 mb-4 text-center font-semibold">
          Let me be crystal clear:
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-700/50">
            <h4 className="font-bold text-blue-300 mb-2">Cinematic Studio</h4>
            <p className="text-blue-200">Create stunning content</p>
          </div>
          <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-700/50">
            <h4 className="font-bold text-purple-300 mb-2">
              VIP Growth System
            </h4>
            <p className="text-purple-200">Build a massive following</p>
          </div>
          <div className="bg-green-900/30 rounded-lg p-4 border border-green-700/50">
            <h4 className="font-bold text-green-300 mb-2">Studio Pro</h4>
            <p className="text-green-200">Turn that following into $$$$$</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-300 mb-2">
            You can have the best content in the world...
          </p>
          <p className="text-lg text-gray-300 mb-2">
            You can have 1 million followers...
          </p>
          <p className="text-xl font-bold text-red-400">
            But without THIS system, you're just creating for free.
          </p>
        </div>
      </motion.div>

      {/* Target Audience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.4 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          Who Is This For?
        </h3>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <div className="space-y-3">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {item.isFor ? (
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                )}
                <span
                  className={`text-lg ${
                    item.isFor ? "text-green-300" : "text-red-300"
                  }`}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <ImageCarousel images={galleryImages} />
          <p className="text-sm text-gray-400 mt-2">
            Click any image above to view it in full screen and browse through
            all the materials
          </p>
        </div>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.6 }}
        className="mb-12"
      >
        {/* Image Carousel Component */}
      </motion.div>
    </>
  );
};

export default UpsellTwoContentSection;
