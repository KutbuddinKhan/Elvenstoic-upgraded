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
import { motion } from 'framer-motion';

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
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAccept = () => {
    setIsLoading(true);
    // Redirect to CopeCart checkout for Upsell 2 (297€ Studio Pro Monetization System)
    const copeCartUrl = "https://copecart.com/products/c6f1ba46/checkout?upsell=2&price=297";
    window.location.href = copeCartUrl;
  };

  const handleDecline = () => {
    setIsLoading(true);
    onDecline(); // This will navigate to downsell-1 page
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[95vw] max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700 rounded-xl shadow-xl p-4 sm:p-6 md:p-8 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400 text-center leading-snug">
            WAIT! Are You REALLY Going to Keep Working for FREE?!
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-5 text-sm sm:text-base md:text-lg">
          <p className="text-center font-semibold text-red-400">
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
            And made <span className="font-bold text-red-400">ZERO euros.</span>
          </p>

          <Separator className="bg-slate-700" />

          <div>
            <p className="font-bold text-white">Let's Do Some Quick Math:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>A system that made me <strong className="text-green-400">€8,000 in 3 days</strong></li>
              <li>Templates that generate <strong className="text-green-400">€3-5K/month</strong> on autopilot</li>
              <li>The exact strategy behind <strong className="text-green-400">€27,345 in 90 days</strong></li>
            </ul>
            <p className="mt-3">
              What you're "saving": <strong className="text-red-400">€297</strong><br />
              That's like refusing <strong className="text-red-400">€10,000</strong> to save €300.<br />
              <span className="text-red-400 font-bold">Does that sound smart to you?</span>
            </p>
          </div>

          <Separator className="bg-slate-700" />

          <div>
            <p className="font-bold text-white">Here's What's Going to Happen:</p>
            <span className="text-base text-blue-100/80">In 6 months, you'll be in one of two places:</span>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong className="text-white">Place 1:</strong> Still posting for likes. Still hoping for brand deals. Still working for free. Watching other creators live your dream life while you wonder "what if?"
              </li>
              <li><strong className="text-white">Place 2:</strong> Running a real creator business. Waking up to payment notifications. Turning down brand deals because your own products make more. Living the life you always imagined.
              </li>
            </ul>
            <p className="mt-2 text-white"><strong>The only difference? This decision. Right now.
            </strong></p>
          </div>

          <p className="text-2xl font-bold text-white">I'm Going to Be Brutally Honest:</p>
          <p className="text-red-400 font-semibold italic">
            If you can't invest €297 to learn how to make €10K/month...
            <br /> you're not a creator. You're a hobbyist.
          </p>
          <p>Real entrepreneurs invest in systems that pay them back.</p>
          <p className="text-purple-400 font-semibold">
            This system has a <span className="text-green-400">3,033% ROI</span>.<br />
            Show me ANY other investment that returns 30x.
          </p>
          <p className='mt-1 text-purple-400 font-semibold'>I'll wait.</p>

          <Separator className="bg-slate-700" />

          <div>
            <h3 className="font-bold text-white">Last Chance. I Mean It.</h3>
            <p className='mt-2 text-red-400 font-semibold'>After you close this pop-up:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li className="text-red-400">Price goes to <strong>€497 forever</strong></li>
              <li className="text-red-400">You'll NEVER see this offer again</li>
              <li className="text-red-400">You'll be left to figure it out alone</li>
            </ul>
            <p className="mt-2 text-red-400 font-semibold">
              While you're struggling to monetize... <br />
              I'll be making another €50 from the automated systems you just rejected.
            </p>
          </div>

          <Separator className="bg-slate-700" />
        </div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-4 px-4"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-6">
            Two Buttons. Two Futures:
          </h2>

          {/* Final Choices */}
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAccept();
              }}
              disabled={isLoading}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:opacity-70 disabled:cursor-not-allowed text-white text-base md:text-lg font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg w-full transition duration-300 border border-green-500/50 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur-sm opacity-0 group-hover:opacity-75 transition duration-200 -z-10" />
              💰 {isLoading ? "PROCESSING..." : "YES! I Want to Make Real Money - Give Me The System!"}
            </motion.button>

            <p className="text-sm text-green-300 italic">Smart choice. Let's build your €10K/month business.</p>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleDecline();
              }}
              disabled={isLoading}
              className="bg-slate-700/50 hover:bg-slate-600/50 disabled:opacity-70 disabled:cursor-not-allowed text-slate-300 hover:text-slate-200 text-sm md:text-base font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-300 border border-slate-600/50 w-full"
            >
              {isLoading ? "PROCESSING..." : "❌ No, I Prefer Working for Free"}
            </button>

            <p className="text-sm text-slate-400 italic">I hope you don't regret this forever...</p>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default Upsell2Popup;
