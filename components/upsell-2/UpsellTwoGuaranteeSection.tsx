"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const UpsellTwoGuaranteeSection: React.FC = () => {
  return (
    <>
      {/* Brutal Truth Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.6 }}
        className="bg-red-900/20 border border-red-700/50 rounded-lg p-8 mb-12"
      >
        <h3 className="text-3xl font-bold text-red-300 mb-6">
          The Brutal Truth About Creator Economy:
        </h3>
        <div className="space-y-4 text-lg">
          <p className="text-red-200">
            <span className="font-bold text-2xl text-white">99%</span> of
            creators will NEVER make a full-time income.
          </p>
          <p className="text-red-200">Not because they lack talent.</p>
          <p className="text-red-200">Not because they lack followers.</p>
          <p className="text-xl font-bold text-red-300">
            Because they lack a MONETIZATION SYSTEM.
          </p>
          <div className="bg-slate-800/50 rounded-lg p-4 mt-6">
            <p className="text-red-200 mb-2">
              They're hoping brands will save them.
            </p>
            <p className="text-red-200 mb-2">
              They're waiting for the algorithm to bless them.
            </p>
            <p className="text-red-200 mb-2">
              They're creating content for FREE.
            </p>
            <p className="text-red-300 mb-2 text-xl font-bold">
              Meanwhile, smart creators are building real businesses.
            </p>
            <p className="text-red-300">Which one do you want to be?</p>
          </div>
        </div>
      </motion.div>

      {/* What Happens Next Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.8 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          Here's What Happens Next:
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-xl font-bold text-red-300 mb-4">
              Option 1: You say no and keep creating for free.
            </h4>
            <p className="text-red-200 mb-2">
              Maybe a brand will email you someday.
            </p>
            <p className="text-red-200 mb-2">
              Maybe you'll figure it out yourself.
            </p>
            <p className="text-red-300 font-semibold">Maybe.</p>
          </div>
          <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
            <h4 className="text-xl font-bold text-green-300 mb-4">
              Option 2: You invest €297 in a proven system.
            </h4>
            <p className="text-green-200 mb-2">
              In 30 days, you could make your first €1,000.
            </p>
            <p className="text-green-200 mb-2">
              In 90 days, you could hit €10K/month.
            </p>
            <p className="text-green-300 font-semibold">
              In 6 months, you could have a real business.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 inline-block">
            <p className="text-xl text-blue-300 mb-2">The math is simple:</p>
            <p className="text-lg text-blue-200 mb-2">
              €297 investment → €8,000 return (just from copying my launch)
            </p>
            <p className="text-xl font-bold text-blue-300">
              That's a 3,033% ROI.
            </p>
            <p className="text-lg text-blue-300 mt-2">
              Where else can you get returns like that?
            </p>
          </div>
        </div>
      </motion.div>

      {/* Critical Warning Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3.0 }}
        className="bg-red-900/20 border border-red-700/50 rounded-lg p-8 mb-12"
      >
        <h3 className="text-3xl font-bold text-red-300 mb-6">
          ⚠️ CRITICAL: This Page Self-Destructs When You Leave
        </h3>
        <p className="text-xl font-bold text-red-300 mb-6">
          This is a ONE-TIME offer.
        </p>
        <div className="space-y-3 text-lg text-red-200 mb-6">
          <div className="flex items-center gap-3">
            <X className="w-5 h-5 text-red-400" />
            <span>It's NOT on my website</span>
          </div>
          <div className="flex items-center gap-3">
            <X className="w-5 h-5 text-red-400" />
            <span>You WON'T get an email about it</span>
          </div>
          <div className="flex items-center gap-3">
            <X className="w-5 h-5 text-red-400" />
            <span>There's NO secret link to find it later</span>
          </div>
          <div className="flex items-center gap-3">
            <X className="w-5 h-5 text-red-400" />
            <span>Once you leave, it's gone FOREVER</span>
          </div>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-4">
          <p className="text-lg text-red-200 mb-2">
            After this page, the price goes to{" "}
            <strong className="text-white">€497</strong>.
          </p>
          <p className="text-lg text-red-200 mb-2">
            And honestly? Even at €497 it's a steal.
          </p>
          <p className="text-xl font-bold text-red-300">
            But right now, right here, you get everything for €297.
          </p>
        </div>
      </motion.div>

      {/* Guarantee Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3.2 }}
        className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-8 mb-12"
      >
        <h3 className="text-3xl font-bold text-blue-300 mb-6">
          My "Make Money or Money Back" Guarantee
        </h3>
        <p className="text-lg text-blue-200 mb-4">
          I'm so confident this system will transform your business that I'll
          make you this promise:
        </p>
        <p className="text-blue-300 mb-4 text-xl font-bold">
          Implement the system for 60 days.
        </p>
        <p className="text-lg text-blue-200 mb-4">
          If you don't make AT LEAST €1,000 using my strategies...
        </p>
        <p className="text-xl font-bold text-blue-300 mb-4">
          I'll refund every cent AND you keep the entire system.
        </p>
        <p className="text-lg text-blue-200 mb-4">
          That's how sure I am this works.
        </p>
        <p className="text-blue-300 mb-4 text-xl font-bold">
          You literally cannot lose.
        </p>
      </motion.div>

      {/* Bottom Line Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3.4 }}
        className="bg-slate-800/70 text-white rounded-lg p-8 mb-12 border border-slate-700"
      >
        <h3 className="text-3xl font-bold mb-6">The Bottom Line:</h3>
        <div className="space-y-4 text-lg">
          <p>You've come this far.</p>
          <p>You've invested in creating great content.</p>
          <p>Maybe you've invested in growing your audience.</p>
          <p className="text-xl font-bold text-amber-400">
            Now invest in actually making money from it.
          </p>
          <p className="mt-6">Because at the end of the day...</p>
          <div className="pl-6 space-y-2">
            <p>Likes don't pay bills.</p>
            <p>Views don't buy freedom.</p>
            <p>Followers don't fund your dreams.</p>
          </div>
          <p className="text-xl font-bold text-amber-400 mt-6">
            But a monetization system? That changes everything.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default UpsellTwoGuaranteeSection;
