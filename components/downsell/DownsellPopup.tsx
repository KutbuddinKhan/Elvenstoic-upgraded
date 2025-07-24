'use client';

import React, { useEffect } from 'react';
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
  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Handle backdrop click (click outside modal)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle close button click with event stop propagation
  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700/50 rounded-xl shadow-2xl p-4 md:p-6 w-full max-w-4xl max-h-[95vh] overflow-y-auto backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid opacity-5 rounded-xl"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-red-800/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-32 h-32 md:w-64 md:h-64 bg-yellow-800/10 rounded-full blur-3xl"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={handleCloseClick}
          className="absolute top-3 right-3 md:top-4 md:right-4 text-slate-400 hover:text-slate-200 transition-colors z-20 p-1 bg-slate-800/50 rounded-full hover:bg-slate-700/50"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 md:w-12 md:h-12 text-red-400 flex-shrink-0" />
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-400 text-center sm:text-left">
                🛑 ARE YOU ABSOLUTELY INSANE?!
              </h1>
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-white mb-2 leading-tight">
              You're About to Walk Away From My ENTIRE 1.000.000+ Follower System...
            </h2>
            <h3 className="text-base md:text-xl font-bold text-red-400">
              For Less Than What You'd Spend on a Pair of Shoes?!
            </h3>
          </div>

          {/* Reality Check */}
          <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 border border-yellow-600/50 rounded-lg p-4 md:p-6 mb-6 backdrop-blur-sm">
            <h3 className="text-lg md:text-xl font-bold text-yellow-300 mb-4">
              Listen, I need to check if you understand what just happened:
            </h3>
            <div className="space-y-3 md:space-y-4 text-yellow-200/90 text-sm md:text-base">
              <p>
                I just offered you <strong className="font-bold">€1,782 worth of growth strategies for €97.</strong>
              </p>
              <p>
                That's not a typo. That's <strong className="font-bold">NINETY-SEVEN EUROS.</strong>
              </p>
              <div>
                <p className="mb-2 font-semibold">That's literally:</p>
                <ul className="list-disc ml-4 md:ml-6 space-y-1 text-sm md:text-base">
                  <li>Less than a night out</li>
                  <li>Less than a tank of gas</li>
                  <li>Less than your monthly Netflix + Spotify</li>
                </ul>
              </div>
              <p className="">
                But unlike those things, <strong>this actually PAYS YOU BACK.</strong>
              </p>
            </div>
          </div>

          {/* Warning Section */}
          <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-600/50 rounded-lg p-4 md:p-6 mb-6 backdrop-blur-sm">
            <h3 className="text-lg md:text-xl font-bold text-red-300 mb-4">Let Me Be Crystal Clear:</h3>
            <p className="text-red-200/90 mb-4 text-sm md:text-base">
              <strong className="text-red-300">After you close this page, the price goes back to €497.</strong><br />
              Forever. No exceptions. No special links. No secret codes.
            </p>
            <p className="text-red-200/90 text-sm md:text-base">
              This €97 price will NEVER exist again in the history of my business.
            </p>
            <div className="bg-red-800/30 border border-red-600/50 rounded-lg p-3 md:p-4 mt-4">
              <p className="text-red-300 font-bold text-sm md:text-base">
                You are literally 1 click away from either:
              </p>
              <ul className="list-disc ml-4 md:ml-6 text-red-200/90 mt-2 space-y-1 text-sm md:text-base">
                <li>❌ The biggest regret of your creator journey</li>
                <li>✅ The smartest investment you'll ever make</li>
              </ul>
            </div>
          </div>

          {/* Real Talk */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 md:p-6 mb-6 text-slate-200 backdrop-blur-sm">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Real Talk: Do You Know What €97 Gets You?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h4 className="font-semibold text-slate-300 mb-2">Normally €97 gets you:</h4>
                <ul className="list-disc ml-4 md:ml-6 space-y-1 text-sm md:text-base text-slate-300">
                  <li>Maybe 2-3 Uber Eats orders</li>
                  <li>A mediocre pair of headphones</li>
                  <li>Half a night at a hotel</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">OR... The exact system that generates:</h4>
                <ul className="list-disc ml-4 md:ml-6 space-y-1 text-sm md:text-base text-green-300">
                  <li>80,000+ followers per month</li>
                  <li>50M+ monthly reach</li>
                  <li>5-figure brand deals</li>
                  <li>A business that runs while you sleep</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-center font-semibold text-white text-base md:text-lg">
              Which one moves your life forward?
            </p>
          </div>

          {/* Harsh Truth */}
          <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 border-l-4 border-purple-500 pl-4 md:pl-6 py-4 md:py-6 mb-6 backdrop-blur-sm rounded-r-lg">
            <p className="text-base md:text-lg font-semibold text-purple-300 mb-2">
              I'm going to say something harsh but true:
            </p>
            <div className="space-y-2 text-sm md:text-base text-purple-200/90">
              <p>
                If you can't invest €97 in your own growth...<br />
                If you can't bet €97 on yourself...<br />
                Maybe you're not as serious about success as you thought.
              </p>
              <p className=" text-purple-300">
                <strong>Because every successful creator I know?</strong><br />
                They would have KILLED for this opportunity at this price.
              </p>
            </div>
          </div>

          {/* Final Choices */}
          {/* Final Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10 px-4"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              Final Time - Your Two Choices
            </h2>

            {/* Final Choices */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onAccept();
                }}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-base md:text-lg font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg w-full transition duration-300 border border-green-500/50 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur-sm opacity-0 group-hover:opacity-75 transition duration-200 -z-10" />
                💚 YES! I'M NOT CRAZY - GIVE ME THE SYSTEM FOR €97
              </motion.button>

              <p className="text-sm text-green-300 italic">Thank god. You scared me for a second there.</p>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDecline();
                }}
                className="bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-slate-200 text-sm md:text-base font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-300 border border-slate-600/50 w-full"
              >
                ❌ No, I Want to Stay Small
              </button>

              <p className="text-sm text-slate-400 italic">I hope you don't regret this decision for the rest of your life.</p>

              <p className="text-xs md:text-sm text-slate-500 italic mt-3 px-2">
                This pop-up will close in a couple seconds and never appear again. Choose wisely.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Downsell1Popup;
