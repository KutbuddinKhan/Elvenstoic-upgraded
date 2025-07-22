'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Upsell1PopupProps {
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onClose: () => void;
}

const Upsell1Popup: React.FC<Upsell1PopupProps> = ({
  isOpen,
  onAccept,
  onDecline,
  onClose,
}) => {
  const features = [
    'The 0-1M Follower Blueprint (exactly how I did it)',
    '80K+ Monthly Growth Strategies (what\'s working RIGHT NOW)',
    'Viral Content Planning System (never guess again)',
    'The Algorithm Domination Formula (get pushed by Instagram)',
    'Content Velocity System (grow faster with less effort)',
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[95vw] max-w-2xl max-h-[95vh] overflow-y-auto overflow-x-hidden bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 md:p-6 text-gray-800 mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-red-800 mb-2 sm:mb-4 text-center leading-tight">
            Are You 100% Sure You Want to Leave 1 Million Followers on the Table??
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base md:text-lg">
          <p className="break-words">
            I just offered you the <span className="font-bold">"Cinematic Studio VIP Growth System"</span> for a one-time investment of <span className="font-bold">€197</span>.
          </p>
          
          <p className="break-words">
            And as a <span className="font-bold text-green-700">FREE Bonus</span>, I also wanted to give you the exact blueprint that took me from 0 to 1,000,000+ followers – the same system that's generating 80,000+ new followers every single month.
          </p>
          
          <p className="italic font-semibold text-red-700 break-words">
            Plus I gave you a crazy <u>"Transform Your Growth or Pay NOTHING" Guarantee!!</u>
          </p>

          <Separator />

          <div>
            <p className="font-semibold text-gray-900 mb-2 break-words">Here's what's about to happen:</p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2">
              <li className="break-words">In 6 months from now, you'll be in one of two places:</li>
              <li className="break-words"><span className="font-bold">Option A:</span> Still stuck at the same follower count, wondering why your cinematic content isn't growing...</li>
              <li className="break-words"><span className="font-bold">Option B:</span> Sitting at 100K+ followers, getting daily DMs about collaborations, finally monetizing your passion – all because you said YES today.</li>
            </ul>
          </div>

          <p className="text-red-700 font-semibold break-words">
            The brutal truth? 81% of people upgrade when they see what's inside the VIP System.
          </p>
          
          <p className="italic break-words">
            Having amazing content without a growth system is like having a Ferrari without fuel.
          </p>

          <Separator />

          <div>
            <h3 className="font-bold text-gray-900 mb-2 break-words">One Last Time – Here's What You're About to Miss:</h3>
            <ul className="space-y-1 sm:space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span className="break-words text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 sm:mt-4">
            <p className="font-semibold break-words">
              <span className="text-gray-900">Total Value:</span> €497<br />
              <span className="text-gray-900">Your One-Time Price:</span> <span className="text-red-600 font-bold text-lg sm:text-xl">€197</span>
            </p>
          </div>

          <div className="mt-3 sm:mt-4">
            <p className="font-semibold text-gray-800 break-words">I get it – €197 feels like a lot right now. But ask yourself:</p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 mt-2">
              <li className="break-words">What's the cost of staying stuck for another year?</li>
              <li className="break-words">What's the cost of creating amazing content that nobody sees?</li>
              <li className="break-words">What's the cost of watching others grow while you're still figuring it out?</li>
            </ul>
          </div>

          <p className="text-purple-800 font-semibold break-words">
            This system pays for itself with your first brand deal.
          </p>

          <p className="font-bold text-gray-900 break-words">
            Take it and transform your Instagram forever, or leave it and keep struggling:
          </p>
        </div>

        <DialogFooter className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base font-bold py-2 sm:py-3 px-3" onClick={onAccept}>
            🔓 YES, Add The VIP System To My Order Now!
          </Button>
          <Button variant="secondary" className="w-full text-sm sm:text-base font-semibold py-2 sm:py-3 px-3" onClick={onDecline}>
            NO, I'll Stay Where I Am
          </Button>
        </DialogFooter>

        <p className="text-xs sm:text-sm text-center text-gray-500 italic mt-4 sm:mt-6 break-words">
          Remember: This page will NEVER appear again. This is your only chance.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default Upsell1Popup;
