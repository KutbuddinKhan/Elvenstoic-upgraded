'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import { AlertTriangle, Clock, X } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
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
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000)
      return () => clearTimeout(timer)
    } else if (countdown === 0) {
      onDecline()
    }
  }, [isOpen, countdown, onDecline])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 backdrop-blur-sm"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-10 h-10 text-red-500" />
            <h1 className="text-2xl md:text-3xl font-bold text-red-400 text-balance">
              😱 ARE YOU SERIOUSLY WALKING AWAY FROM €197?!
            </h1>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-red-300 text-balance">
            This Is The DUMBEST Financial Decision You'll Ever Make.
          </h2>
        </div>

        {/* Countdown */}
        <div className="bg-gradient-to-r from-red-900/60 to-red-800/60 border border-red-600/50 text-white rounded-lg p-4 text-center mb-6 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">This popup closes in:</span>
          </div>
          <div className="text-3xl font-bold text-red-300">{countdown} seconds</div>
          <p className="text-sm text-red-200/90">Choose wisely before it's gone forever.</p>
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-slate-200">
          <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 border border-yellow-600/50 rounded-lg p-5 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 text-yellow-300">STOP AND THINK:</h3>
            <p className="text-yellow-200/90">You're about to reject a payment plan of <strong className="text-yellow-300">€97</strong>.</p>
            <p className="text-lg font-bold mt-2 mb-2 text-yellow-300">€97.</p>
            <p className="text-yellow-200/90">That's literally:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-yellow-200/80">
              <li>2 Uber Eats orders</li>
              <li>1 tank of gas</li>
              <li>3 drinks at a bar</li>
            </ul>
            <p className="mt-3 text-yellow-200/90">Except those things are <em>GONE</em> after you use them.</p>
            <p className="mt-3 font-semibold text-yellow-300">This system? Pays you back FOREVER.</p>
          </div>

          <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-600/50 rounded-lg p-5 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-blue-300 mb-3">Let Me Put This in Perspective:</h3>
            <p className='font-semibold text-blue-200'>You're saying NO to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-blue-200/90">
              <li>A proven €10K/month system</li>
              <li>Templates that made me €27,345</li>
              <li>The exact blueprint for €8K launches</li>
              <li>A 3-payment plan of just €97</li>
            </ul>
            <p className="mt-3 text-blue-200/90">To <strong className="text-blue-300">"save" what?</strong> The price of a video game you'll play for 2 weeks?</p>
            <p className="mt-2 font-semibold text-blue-300">
              Meanwhile, this system could make you €100,000+ over the next year.
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-600/50 rounded-lg p-5 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-red-300 mb-2">Here's The Harsh Truth:</h3>
            <p className="text-red-200/90">If you can't invest €97 x 3 in your own business...</p>
            <p className="font-semibold mt-1 text-red-300">You've already decided to fail.</p>
            <p className="mt-2 text-red-200/90">Every successful creator I know would have <strong className="text-red-300">KILLED</strong> for this opportunity.</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-red-200/80">
              <li>They would have borrowed the money.</li>
              <li>They would have sold something.</li>
              <li>They would have found a way.</li>
            </ul>
            <p className="mt-2 text-red-300 font-medium">Because winners invest in winning systems.</p>
          </div>

          <div className="bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-600/50 text-white rounded-lg p-6 text-center backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-3">🚨 THIS IS IT. THE END. NO MORE CHANCES.</h3>
            <p className="mb-2 text-slate-200">When you close this pop-up:</p>
            <ul className="space-y-1 mb-4 text-slate-300">
              <li>• This offer is DEAD</li>
              <li>• The price goes to €497 FOREVER</li>
              <li>• No payment plans will EVER exist again</li>
              <li>• You'll spend the next year wondering "what if?"</li>
            </ul>
            <p className="text-yellow-400 font-bold text-lg md:text-xl">
              Is your pride really worth €100,000 in lost revenue?
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-4">
            I'm Begging You – Don't Be Stupid:
          </h3>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4 mt-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-200 z-0" />
            <Button
              onClick={onAcceptPlan}
              className="relative z-10 w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-sm sm:text-lg font-bold py-4 sm:py-6 px-3 rounded-lg transition-all whitespace-normal break-words leading-snug text-center border border-green-500/50"
            >
              💚 WAIT! I WANT THE PAYMENT PLAN - 3x €97
            </Button>
          </motion.div>
          <p className="text-center text-green-400 font-medium text-sm sm:text-base">
            Thank god. You scared me there.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-200 z-0" />
            <Button
              onClick={onAcceptFull}
              className="relative z-10 w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black text-sm sm:text-lg font-bold py-4 sm:py-6 px-3 rounded-lg transition-all whitespace-normal break-words leading-snug text-center border border-yellow-500/50"
            >
              💰 ACTUALLY, JUST GIVE ME EVERYTHING FOR €197
            </Button>
          </motion.div>
          <p className="text-center text-yellow-400 font-medium text-sm sm:text-base">
            Smart. Save €94 with one payment.
          </p>

          <div className="text-center">
            <button
              onClick={onDecline}
              className="text-red-400 hover:text-red-300 hover:underline text-sm font-semibold transition-all"
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
      </motion.div>
    </div>
  )
}

export default Downsell2Popup
