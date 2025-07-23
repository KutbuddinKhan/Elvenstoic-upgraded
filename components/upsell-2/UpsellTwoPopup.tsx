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

interface Upsell2PopupProps {
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onClose: () => void;
}

const Upsell2Popup: React.FC<Upsell2PopupProps> = ({
  isOpen,
  onAccept,
  onDecline,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[95vw] max-w-3xl max-h-[90vh] overflow-y-auto bg-yellow-50 border border-yellow-200 rounded-xl shadow-xl p-4 sm:p-6 md:p-8 text-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-800 text-center leading-snug">
            WAIT! Are You REALLY Going to Keep Working for FREE?!
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-5 text-base sm:text-lg md:text-xl">
          <p className="text-center font-semibold text-red-700">
            You're About to Leave <u>€10,000/Month</u> on the Table... To Save €297?!
          </p>

          <p>I need to ask you something serious:</p>
          <p>
            <strong>Do you know what the #1 regret of failed creators is?</strong><br />
            <em>"I wish I had learned how to monetize sooner."</em>
          </p>

          <p>
            They spent <strong>YEARS</strong> building an audience.<br />
            Posted <strong>THOUSANDS</strong> of pieces of content.<br />
            Got <strong>MILLIONS</strong> of views.<br />
            And made <span className="font-bold text-red-700">ZERO euros.</span>
          </p>

          <Separator />

          <div>
            <p className="font-bold">Let's Do Some Quick Math:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>A system that made me <strong>€8,000 in 3 days</strong></li>
              <li>Templates that generate <strong>€3-5K/month</strong> on autopilot</li>
              <li>The exact strategy behind <strong>€27,345 in 90 days</strong></li>
            </ul>
            <p className="mt-3">
              What you're "saving": <strong>€297</strong><br />
              That's like refusing <strong>€10,000</strong> to save €300.<br />
              <span className="text-red-700 font-bold">Does that sound smart to you?</span>
            </p>
          </div>

          <Separator />

          <div>
            <p className="font-bold">Here's What's Going to Happen:</p>
            <span className="text-base">In 6 months, you'll be in one of two places:</span>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Place 1:</strong> Still posting for likes, hoping for brand deals</li>
              <li><strong>Place 2:</strong> Running a real creator business, waking up to payments</li>
            </ul>
            <p className="mt-2">The only difference? <strong>This decision. Right now.</strong></p>
          </div>

          <p className="font-bold">I'm Going to Be Brutally Honest:</p>
          <p className="text-red-800 font-semibold italic">
            If you can't invest €297 to learn how to make €10K/month... you're not a creator. You're a hobbyist.
          </p>
          <p>Real entrepreneurs invest in systems that pay them back.</p>
          <p className="text-purple-800 font-semibold">
            This system has a 3,033% ROI.<br />
            Show me ANY other investment that returns 30x.
          </p>

          <Separator />

          <div>
            <h3 className="font-bold">Last Chance. I Mean It.</h3>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Price goes to <strong>€497 forever</strong></li>
              <li>You’ll NEVER see this offer again</li>
              <li>You’ll be left to figure it out alone</li>
            </ul>
            <p className="mt-2 text-red-700 font-semibold">
              While you're struggling to monetize... I'll be making another €50 from the same system.
            </p>
          </div>

          <Separator />

          <div className="space-y-2">
            <p className="text-center font-bold text-lg">
              Two Buttons. Two Futures:
            </p>
            <p className="text-center text-green-700 font-semibold">
              💰 YES! I Want to Make Real Money - Give Me The System!
            </p>
            <p className="text-center text-red-600 italic">
              ❌ No, I Prefer Working for Free. I hope you don’t regret this forever...
            </p>
          </div>
        </div>

        <DialogFooter className="flex flex-col gap-4 mt-6">
          <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white text-base font-bold py-3"
            onClick={onAccept}
          >
            💰 YES! Give Me The Monetization Engine
          </Button>
          <Button
            variant="secondary"
            className="w-full text-sm font-semibold py-2"
            onClick={onDecline}
          >
            ❌ No, I Prefer Working for Free
          </Button>
        </DialogFooter>

        <p className="text-sm text-yellow-800 mt-6 italic text-center">
          P.S. – Every minute you wait, another creator is implementing these systems and making the money that could be yours. Don't let fear of investing €297 cost you €100,000+ in future revenue.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default Upsell2Popup;
