'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';

interface Downsell1PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
}

const Downsell1Popup: React.FC<Downsell1PopupProps> = ({
  isOpen,
  onClose,
  onAccept,
  onDecline,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="relative bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-12 h-12 text-red-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-red-600">
              🛑 ARE YOU ABSOLUTELY INSANE?!
            </h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            You're About to Walk Away From My ENTIRE 1M Follower System...
          </h2>
          <h3 className="text-xl font-bold text-red-600">
            For Less Than What You'd Spend on a Pair of Shoes?!
          </h3>
        </div>

        {/* Reality Check */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-yellow-800 mb-4">
            Listen, I need to check if you understand what just happened:
          </h3>
          <div className="space-y-4 text-yellow-700 text-base">
            <p>
              I just offered you <strong>€1,782 worth of growth strategies for €97.</strong>
            </p>
            <p>
              That's not a typo. That's <strong>NINETY-SEVEN EUROS.</strong>
            </p>
            <div>
              That's literally:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Less than a night out</li>
                <li>Less than a tank of gas</li>
                <li>Less than your monthly Netflix + Spotify</li>
              </ul>
            </div>
            <p>
              But unlike those things, <strong>this actually PAYS YOU BACK.</strong>
            </p>
          </div>
        </div>

        {/* Warning Section */}
        <div className="bg-red-50 border border-red-300 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-red-800 mb-4">Let Me Be Crystal Clear:</h3>
          <p className="text-red-700 mb-4">
            <strong>After you close this page, the price goes back to €497.</strong><br />
            Forever. No exceptions. No special links. No secret codes.
          </p>
          <p className="text-red-700">
            This €97 price will NEVER exist again in the history of my business.
          </p>
          <p className="mt-4 text-red-800 font-bold">
            You are literally 1 click away from either:
          </p>
          <ul className="list-disc ml-6 text-red-700 mt-2 space-y-1">
            <li>❌ The biggest regret of your creator journey</li>
            <li>✅ The smartest investment you'll ever make</li>
          </ul>
        </div>

        {/* Real Talk */}
        <div className="bg-gray-100 rounded-lg p-6 mb-6 text-gray-800">
          <h3 className="text-xl font-bold mb-4">Real Talk: Do You Know What €97 Gets You?</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Maybe 2-3 Uber Eats orders</li>
            <li>A mediocre pair of headphones</li>
            <li>Half a night at a hotel</li>
            <li>
              <strong>OR...</strong> The exact system that generates:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>80,000+ followers per month</li>
                <li>50M+ monthly reach</li>
                <li>5-figure brand deals</li>
                <li>A business that runs while you sleep</li>
              </ul>
            </li>
          </ul>
          <p className="mt-4">
            <strong>Which one moves your life forward?</strong>
          </p>
        </div>

        {/* Harsh Truth */}
        <div className="bg-white text-gray-900 border-l-4 border-red-500 pl-4 py-4 mb-6">
          <p className="text-lg font-semibold">
            I'm going to say something harsh but true:
          </p>
          <p className="mt-2">
            If you can't invest €97 in your own growth...<br />
            If you can't bet €97 on yourself...<br />
            Maybe you're not as serious about success as you thought.
          </p>
          <p className="mt-2">
            Because every successful creator I know?<br />
            <strong>They would have KILLED for this opportunity at this price.</strong>
          </p>
        </div>

        {/* Final Choices */}
        <div className="text-center space-y-4">
          <button
            onClick={onAccept}
            className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-3 px-6 rounded-lg w-full transition duration-300"
          >
            💚 YES! I'M NOT CRAZY - GIVE ME THE SYSTEM FOR €97
          </button>
          <button
            onClick={onDecline}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            ❌ No, I Want to Stay Small
          </button>
          <p className="text-sm text-gray-500 italic mt-2">
            This pop-up will close in a couple seconds and never appear again. Choose wisely.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Downsell1Popup;
