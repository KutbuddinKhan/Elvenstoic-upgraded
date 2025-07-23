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
      <DialogContent className="w-[95vw] max-w-3xl max-h-[90vh] overflow-y-auto bg-red-50 border border-red-200 rounded-xl shadow-xl p-4 sm:p-6 md:p-8 text-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 text-center">
            Are You 100% Sure You Want to Leave 1 Million Followers on the Table??
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-5 text-base sm:text-lg md:text-xl">
          <p>
            I just offered you the <span className="font-bold">"Cinematic Studio VIP Growth System"</span> for a one-time investment of <span className="font-bold">€197</span>.
          </p>

          <p>
            And as a <span className="font-bold text-green-700">FREE Bonus</span>, I also wanted to give you the exact blueprint that took me from 0 to 1,000,000+ followers – the same system that's generating 80,000+ new followers every single month.
          </p>

          <p className="italic font-semibold text-red-700">
            Plus I gave you a crazy <u>"Transform Your Growth or Pay NOTHING" Guarantee!!</u>
          </p>

          <Separator />

          <div>
            <p className="font-semibold mb-2">Here's what's about to happen:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>In 6 months from now, you'll be in one of two places:</li>
              <li><strong>Option A:</strong> Still stuck at the same follower count</li>
              <li><strong>Option B:</strong> Sitting at 100K+, getting DMs, finally monetizing</li>
            </ul>
          </div>

          <p className="text-red-700 font-semibold">
            The brutal truth? 81% of people upgrade when they see what's inside.
          </p>

          <p className="italic">
            Having amazing content without a growth system is like having a Ferrari without fuel.
          </p>

          <Separator />

          <div>
            <h3 className="font-bold mb-2">One Last Time – Here's What You're About to Miss:</h3>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <p className="font-semibold">
              <span className="text-gray-900">Total Value:</span> €497<br />
              <span className="text-gray-900">Your One-Time Price:</span>{' '}
              <span className="text-red-600 font-bold text-lg sm:text-xl">€197</span>
            </p>
          </div>

          <p className="font-semibold text-gray-800">
            I get it – €197 feels like a lot right now. But ask yourself:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What's the cost of staying stuck for another year?</li>
            <li>What's the cost of creating amazing content that nobody sees?</li>
            <li>What's the cost of watching others grow while you're still figuring it out?</li>
          </ul>

          <p className="text-purple-800 font-semibold">
            This system pays for itself with your first brand deal.
          </p>

          <p className="font-bold text-gray-900">
            Take it and transform your Instagram forever, or leave it and keep struggling:
          </p>
        </div>

        <DialogFooter className="flex flex-col gap-4 mt-6">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-base font-bold py-3" onClick={onAccept}>
            🔓 YES, Add The VIP System To My Order Now!
          </Button>
          <Button variant="secondary" className="w-full text-sm font-semibold py-2" onClick={onDecline}>
            NO, I'll Stay Where I Am
          </Button>
        </DialogFooter>

        <p className="text-sm text-center text-gray-500 italic mt-6">
          Remember: This page will NEVER appear again. This is your only chance.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default Upsell1Popup;
