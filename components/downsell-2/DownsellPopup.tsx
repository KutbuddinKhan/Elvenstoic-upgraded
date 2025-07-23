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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-10 h-10 text-red-600" />
            <h1 className="text-3xl font-bold text-red-700">
              ARE YOU SERIOUSLY WALKING AWAY FROM €197?!
            </h1>
          </div>
          <h2 className="text-xl font-bold text-red-600">
            This Is The DUMBEST Financial Decision You'll Ever Make.
          </h2>
        </div>

        {/* Countdown */}
        <div className="bg-red-600 text-white rounded-lg p-4 text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">This popup closes in:</span>
          </div>
          <div className="text-3xl font-bold">{countdown} seconds</div>
          <p className="text-sm opacity-90">Make the smart move before it's gone.</p>
        </div>

        {/* Breakdown Section */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-yellow-900 mb-3">
            Think About This:
          </h3>
          <p className="text-yellow-800">
            You’re about to reject a payment plan of <strong>€97</strong>. That's literally:
          </p>
          <ul className="list-disc ml-6 mt-2 text-yellow-800 space-y-1">
            <li>2 Uber Eats orders</li>
            <li>1 tank of gas</li>
            <li>3 drinks at a bar</li>
          </ul>
          <p className="mt-3 font-semibold text-yellow-900">
            Except those things disappear. This system pays you forever.
          </p>
        </div>

        {/* Harsh Truth */}
        <div className="bg-red-50 border border-red-300 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-red-900 mb-2">Let’s Be Real:</h3>
          <p className="text-red-800 mb-2">
            If you can't invest €97 x 3 in your growth, <strong>you're choosing to stay stuck.</strong>
          </p>
          <p className="text-red-700">
            Every successful creator would have begged for this opportunity. Winners invest in winning systems.
          </p>
        </div>

        {/* Final Warning */}
        <div className="bg-black text-white rounded-lg p-6 text-center mb-6">
          <h3 className="text-2xl font-bold text-red-400 mb-3">🚨 LAST CHANCE. NO MORE OFFERS.</h3>
          <p className="mb-1">Close this popup and:</p>
          <ul className="space-y-1 mb-4">
            <li>• The offer is GONE</li>
            <li>• The price becomes €497 forever</li>
            <li>• No payment plans will return</li>
            <li>• You'll ask yourself "what if?" for months</li>
          </ul>
          <p className="text-yellow-300 font-bold text-lg">
            Is €100K in lost revenue worth your pride?
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4 mt-8">
          {/* YES Button */}
          <Button 
            onClick={onAcceptFull}
            className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-6 rounded-lg transition-all"
          >
            ✅ YES - Give Me The System for €197!
          </Button>
          <p className="text-center text-green-800 font-medium text-base">
            Finally. Let's turn your content into cash.
          </p>

          {/* PAYMENT PLAN Button */}
          <Button
            onClick={onAcceptPlan}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-6 rounded-lg transition-all"
          >
            💳 PAYMENT PLAN – 3x €97
          </Button>
          <p className="text-center text-blue-800 font-medium text-base">
            Same access. Easier on your budget.
          </p>

          {/* NO Option (styled like a link) */}
          <div className="text-center">
            <button
              onClick={onDecline}
              className="text-red-600 hover:underline text-base font-semibold transition-all"
            >
              ❌ No, I Choose to Stay Broke
            </button>
            <p className="text-sm text-gray-500 italic mt-1">
              This is goodbye. There's no coming back.
            </p>
          </div>
        </div>


        {/* Countdown Reminder */}
        <div className="text-sm text-red-700 text-center mt-4">
          <strong>Auto-closing in {countdown} seconds...</strong>
        </div>
      </motion.div>
    </div>
  )
}

export default Downsell2Popup
