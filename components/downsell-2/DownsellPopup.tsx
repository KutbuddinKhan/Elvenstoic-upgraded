"use client"

import type * as React from "react"
import { useState, useEffect } from "react"
import { AlertTriangle, Clock } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface Downsell2PopupProps {
  isOpen: boolean
  onAcceptFull: () => void
  onAcceptPlan: () => void
  onDecline: () => void
  onClose: () => void
}

const Downsell2Popup: React.FC<Downsell2PopupProps> = ({ isOpen, onAcceptFull, onAcceptPlan, onDecline, onClose }) => {
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (countdown === 0) {
      onDecline()
    }
  }, [isOpen, countdown, onDecline])

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[95vw] max-w-3xl max-h-[95vh] overflow-y-auto overflow-x-hidden bg-red-50 border-2 border-red-300 rounded-lg p-4 sm:p-6 text-gray-800 mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-900 mb-4 text-center leading-tight flex items-center justify-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            ARE YOU SERIOUSLY WALKING AWAY FROM €197?!
          </DialogTitle>
          <p className="text-xl font-bold text-red-800 text-center">
            This Is The DUMBEST Financial Decision You'll Ever Make.
          </p>
        </DialogHeader>

        <div className="space-y-6 text-sm sm:text-base md:text-lg">
          {/* Countdown Timer */}
          <div className="bg-red-600 text-white rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold">This pop-up closes in:</span>
            </div>
            <div className="text-3xl font-bold">{countdown} seconds</div>
            <p className="text-sm opacity-90">Choose wisely.</p>
          </div>

          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
            <h3 className="font-bold text-yellow-900 mb-2">STOP AND THINK:</h3>
            <p className="text-yellow-800">
              You're about to reject a payment plan of <strong>€97</strong>. €97. That's literally:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-yellow-700">
              <li>2 Uber Eats orders</li>
              <li>1 tank of gas</li>
              <li>3 drinks at a bar</li>
            </ul>
            <p className="text-yellow-800 mt-2 font-semibold">
              Except those things are GONE after you use them. This system? Pays you back FOREVER.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="font-bold text-gray-900 mb-3">Let Me Put This in Perspective:</h3>
            <p className="mb-2">You're saying NO to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>A proven €10K/month system</li>
              <li>Templates that made me €27,345</li>
              <li>The exact blueprint for €8K launches</li>
              <li>A 3-payment plan of just €97</li>
            </ul>
            <p className="font-semibold text-red-700">
              To "save" what? The price of a video game that you'll play for 2 weeks?
            </p>
            <p className="text-lg font-bold text-purple-800 mt-2">
              Meanwhile, this system could make you €100,000+ over the next year.
            </p>
          </div>

          <Separator />

          <div className="bg-red-100 border border-red-300 rounded-lg p-4">
            <h3 className="font-bold text-red-900 mb-3">Here's The Harsh Truth:</h3>
            <p className="text-red-800 mb-2">
              If you can't invest €97 x 3 in your own business... <strong>You've already decided to fail.</strong>
            </p>
            <p className="text-red-700">
              Every successful creator I know would have KILLED for this opportunity. They would have borrowed the
              money. They would have sold something. They would have found a way.
            </p>
            <p className="text-red-800 font-semibold mt-2">Because winners invest in winning systems.</p>
          </div>

          <div className="bg-black text-white rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-4 text-red-400">🚨 THIS IS IT. THE END. NO MORE CHANCES.</h3>
            <p className="mb-2">When you close this pop-up:</p>
            <ul className="space-y-1 mb-4">
              <li>• This offer is DEAD</li>
              <li>• The price goes to €497 FOREVER</li>
              <li>• No payment plans will EVER exist again</li>
              <li>• You'll spend the next year wondering "what if?"</li>
            </ul>
            <p className="text-xl font-bold text-yellow-400">Is your pride really worth €100,000 in lost revenue?</p>
          </div>

          <div className="text-center">
            <p className="text-xl font-bold text-purple-800 mb-4">I'm Begging You - Don't Be Stupid:</p>
          </div>
        </div>

        <DialogFooter className="flex flex-col gap-3 mt-6">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4"
            onClick={onAcceptPlan}
          >
            💚 WAIT! I WANT THE PAYMENT PLAN - 3x €97
            <span className="block text-sm opacity-90">Thank god. You scared me there.</span>
          </Button>

          <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4"
            onClick={onAcceptFull}
          >
            💰 ACTUALLY, JUST GIVE ME EVERYTHING FOR €197
            <span className="block text-sm opacity-90">Smart. Save €94 with one payment.</span>
          </Button>

          <Button
            variant="destructive"
            className="w-full bg-gray-600 hover:bg-gray-700 text-white text-sm font-semibold py-2"
            onClick={onDecline}
          >
            💔 No, I Want to Stay Poor
            <span className="block text-xs opacity-90">I feel sorry for your future self.</span>
          </Button>
        </DialogFooter>

        <div className="text-sm text-red-800 mt-4 space-y-2 text-center">
          <p className="font-semibold">Auto-closing in {countdown} seconds...</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Downsell2Popup
