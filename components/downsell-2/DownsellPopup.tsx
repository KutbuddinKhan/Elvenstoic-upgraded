'use client'

import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { AlertTriangle, Clock, X } from 'lucide-react'
import { motion } from 'framer-motion'

interface Downsell2PopupProps {
  isOpen: boolean
  onAcceptFull: () => void
  onAcceptPlan: () => void
  onDecline: () => void
  onClose: () => void
}

const Downsell2Popup: React.FC<Downsell2PopupProps> = ({
  isOpen,
  onAcceptFull,
  onAcceptPlan,
  onDecline,
  onClose,
}) => {
  const [countdown, setCountdown] = useState(20)
  const [isLoading, setIsLoading] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  // Auto-close popup after 20 seconds
  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000)
      return () => clearTimeout(timer)
    } else if (countdown === 0) {
      onClose()
    }
  }, [isOpen, countdown, onClose])

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

  const handleAcceptFullClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    onAcceptFull();
  };

  const handleAcceptPlanClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    onAcceptPlan();
  };

  const handleDeclineClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onDecline();
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <motion.div
        ref={popupRef}
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 backdrop-blur-sm"
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
          <div className="text-center mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-red-500 flex-shrink-0" />
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-400 text-center sm:text-left leading-tight">
                😱 ARE YOU SERIOUSLY WALKING AWAY FROM €197?!
              </h1>
            </div>
            <h2 className="text-base md:text-lg lg:text-xl font-bold text-red-300 text-center leading-tight">
              This Is The DUMBEST Financial Decision You'll Ever Make.
            </h2>
          </div>

          {/* Countdown */}
          <div className="bg-gradient-to-r from-red-900/60 to-red-800/60 border border-red-600/50 text-white rounded-lg p-4 text-center mb-6 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="font-semibold text-sm md:text-base">This popup closes in:</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-red-300">{countdown} seconds</div>
            <p className="text-xs md:text-sm text-red-200/90">Choose wisely before it's gone forever.</p>
          </div>

          {/* Main Content */}
          <div className="space-y-4 md:space-y-6 text-slate-200">
            <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 border border-yellow-600/50 rounded-lg p-4 md:p-5 backdrop-blur-sm">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-yellow-300">STOP AND THINK:</h3>
              <p className="text-sm md:text-base text-yellow-200/90">You're about to reject a payment plan of <strong className="text-yellow-300">€197</strong>.</p>
              <p className="text-base md:text-lg font-bold mt-2 mb-2 text-yellow-300">€197.</p>
              <p className="text-sm md:text-base text-yellow-200/90">That's literally:</p>
              <ul className="list-disc ml-4 md:ml-6 mt-2 space-y-1 text-xs md:text-base text-yellow-200/80">
                <li>2 Uber Eats orders</li>
                <li>1 tank of gas</li>
                <li>3 drinks at a bar</li>
              </ul>
              <p className="mt-3 text-sm md:text-base text-yellow-200/90">Except those things are <em>GONE</em> after you use them.</p>
              <p className="mt-3 font-semibold text-sm md:text-base text-yellow-300">This system? Pays you back FOREVER.</p>
            </div>

            <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-600/50 rounded-lg p-4 md:p-5 backdrop-blur-sm">
              <h3 className="text-lg md:text-xl font-bold text-blue-300 mb-3">Let Me Put This in Perspective:</h3>
              <p className='font-semibold text-sm md:text-base text-blue-200'>You're saying NO to:</p>
              <ul className="list-disc ml-4 md:ml-6 mt-2 space-y-1 text-xs md:text-base text-blue-200/90">
                <li>A proven €10K/month system</li>
                <li>Templates that made me €27,345</li>
                <li>The exact blueprint for €8K launches</li>
                <li>A 3-payment plan of just €97</li>
              </ul>
              <p className="mt-3 text-sm md:text-base text-blue-200/90">To <strong className="text-blue-300">"save" what?</strong> The price of a video game you'll play for 2 weeks?</p>
              <p className="mt-2 font-semibold text-sm md:text-base text-blue-300">
                Meanwhile, this system could make you €100,000+ over the next year.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-600/50 rounded-lg p-4 md:p-5 backdrop-blur-sm">
              <h3 className="text-lg md:text-xl font-bold text-red-300 mb-2">Here's The Harsh Truth:</h3>
              <p className="text-sm md:text-base text-red-200/90">If you can't invest €197 x 3 in your own business...</p>
              <p className="font-semibold mt-1 text-sm md:text-base text-red-300">You've already decided to fail.</p>
              <p className="mt-2 text-sm md:text-base text-red-200/90">Every successful creator I know would have <strong className="text-red-300">KILLED</strong> for this opportunity.</p>
              <ul className="list-disc ml-4 md:ml-6 mt-2 space-y-1 text-xs md:text-base text-red-200/80">
                <li>They would have borrowed the money.</li>
                <li>They would have sold something.</li>
                <li>They would have found a way.</li>
              </ul>
              <p className="mt-2 text-sm md:text-base text-red-300 font-medium">Because winners invest in winning systems.</p>
            </div>

            <div className="bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-600/50 text-white rounded-lg p-4 md:p-6 text-center backdrop-blur-sm">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-red-400 mb-3">🚨 THIS IS IT. THE END. NO MORE CHANCES.</h3>
              <p className="mb-2 text-sm md:text-base text-slate-200">When you close this pop-up:</p>
              <ul className="space-y-1 mb-4 text-xs md:text-base text-slate-300">
                <li>• This offer is DEAD</li>
                <li>• The price goes to €497 FOREVER</li>
                <li>• No payment plans will EVER exist again</li>
                <li>• You'll spend the next year wondering "what if?"</li>
              </ul>
              <p className="text-yellow-400 font-bold text-base md:text-lg lg:text-xl">
                Is your pride really worth €100,000 in lost revenue?
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-8 text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-400 mb-4">
              I'm Begging You – Don't Be Stupid:
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4 mt-6 md:mt-8">
            {/* Full Payment Button */}
            <motion.div
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="relative group w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-200 z-0" />
              <button
                onClick={handleAcceptFullClick}
                disabled={isLoading}
                className="relative z-10 w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 disabled:opacity-70 disabled:cursor-not-allowed text-black text-sm sm:text-base lg:text-lg font-bold py-3 sm:py-4 md:py-6 px-3 rounded-lg transition-all whitespace-normal break-words leading-snug text-center border border-yellow-500/50"
              >
                💰 {isLoading ? "PROCESSING PAYMENT..." : "ACTUALLY, JUST GIVE ME EVERYTHING FOR €197"}
              </button>
            </motion.div>
            <p className="text-center text-yellow-400 font-medium text-sm sm:text-base">
              Smart. Save €94 with one payment.
            </p>

            {/* Payment Plan Button */}
            {/* <motion.div
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="relative group w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-200 z-0" />
              <button
                onClick={handleAcceptPlanClick}
                disabled={isLoading}
                className="relative z-10 w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm sm:text-base lg:text-lg font-bold py-3 sm:py-4 md:py-6 px-3 rounded-lg transition-all whitespace-normal break-words leading-snug text-center border border-green-500/50"
              >
                💚 {isLoading ? "PROCESSING PAYMENT..." : "WAIT! I WANT THE PAYMENT PLAN - 3x €97"}
              </button>
            </motion.div>
            <p className="text-center text-green-400 font-medium text-sm sm:text-base">
              Thank god. You scared me there.
            </p> */}

            <div className="text-center">
              <button
                onClick={handleDeclineClick}
                disabled={isLoading}
                className="text-red-400 hover:text-red-300 hover:underline disabled:opacity-50 disabled:cursor-not-allowed text-sm font-semibold transition-all"
              >
                💔 No, I Want to Stay Poor
              </button>
              <p className="text-xs text-slate-400 italic mt-1">
                I feel sorry for your future self.
              </p>
            </div>
          </div>

          {/* Countdown Reminder */}
          <div className="text-sm text-red-400 text-center mt-4">
            <strong>This pop-up closes in {countdown} seconds. Choose wisely.</strong>
          </div>

          {/* Final Warning */}
          <div className="mt-4 bg-red-900/20 border border-red-600/30 rounded-lg p-3 md:p-4">
            <p className="text-xs md:text-sm text-red-300 font-semibold text-center">
              ⚠️ FINAL WARNING: After this popup closes, you'll pay €497+ for this system. 
              This €197/€291 offer dies with this popup.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Downsell2Popup;
