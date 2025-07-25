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
     <DialogContent className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700 rounded-xl shadow-xl px-4 sm:px-6 md:px-8 py-6 text-white backdrop-blur-sm">

        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-400 text-center leading-tight">
            Are You 100% Sure You Want to Leave 1 Million Followers on the Table??
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-4 md:space-y-5 text-sm sm:text-base md:text-lg">
          <p className="text-blue-100/80">
            I just offered you the <span className="font-bold text-white">"Cinematic Studio VIP Growth System"</span> for a one-time investment of <span className="font-bold text-white">€197</span>.
          </p>

          <p className="text-blue-100/80">
            And as a <span className="font-bold text-green-400">FREE Bonus</span>, I also wanted to give you the exact blueprint that took me from 0 to 1,000,000+ followers - the same system that's generating 80,000+ new followers every single month.
          </p>

          <p className="italic font-semibold text-red-400">
            Plus I gave you a crazy <u>"Transform Your Growth or Pay NOTHING" Guarantee!!</u>
          </p>

          <Separator className="bg-slate-700" />

          <div>
            <p className="font-semibold mb-2 text-white">Here's what's about to happen:</p>
            <ul className="list-disc pl-6 space-y-2 text-blue-100/80">
              <li>In 6 months from now, you'll be in one of two places:</li>
              <li><strong className="text-white">Option A:</strong> Still stuck at the same follower count</li>
              <li><strong className="text-white">Option B:</strong> Sitting at 100K+, getting DMs, finally monetizing</li>
            </ul>
          </div>

          <p className="text-red-400 font-semibold">
            The brutal truth? 81% of people upgrade when they see what's inside.
          </p>

          <p className="italic text-blue-100/80">
            Having amazing content without a growth system is like having a Ferrari without fuel.
          </p>

          <Separator className="bg-slate-700" />

          <div>
            <h3 className="font-bold mb-2 text-white">One Last Time - Here's What You're About to Miss:</h3>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-blue-100/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <p className="font-semibold text-white mb-2">
              <span className="text-blue-100/80">Total Value:</span> €497<br />
              <span className="text-blue-100/80">Your One-Time Price:</span>{' '}
              <span className="text-red-400 font-bold text-lg sm:text-xl">€197</span>
            </p>
          </div>

          <p className="font-semibold text-white">
            I get it – €197 feels like a lot right now. But ask yourself:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-blue-100/80">
            <li>What's the cost of staying stuck for another year?</li>
            <li>What's the cost of creating amazing content that nobody sees?</li>
            <li>What's the cost of watching others grow while you're still figuring it out?</li>
          </ul>

          <p className="text-purple-400 font-semibold">
            This system pays for itself with your first brand deal.
          </p>

          <p className="font-bold text-white">
            Take it and transform your Instagram forever, or leave it and keep struggling:
          </p>
        </div>

        <DialogFooter className="flex flex-col gap-4 mt-6">
          <Button 
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-sm md:text-base font-bold py-3 transition-all duration-300" 
            onClick={onAccept}
          >
            🔓 YES, Add The Growth System To My Order Now!
          </Button>
          <Button 
            variant="secondary" 
            className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 text-sm font-semibold py-2 transition-all duration-300" 
            onClick={onDecline}
          >
            NO, I'll Stay Where I Am
          </Button>
        </DialogFooter>

        <p className="text-xs md:text-sm text-center text-blue-100/60 italic mt-6">
          Remember: This page will NEVER appear again. This is your only chance.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default Upsell1Popup;
