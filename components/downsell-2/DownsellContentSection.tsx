"use client"
import { motion } from "framer-motion"
import { Target, Clock, AlertCircle, Check, X } from "lucide-react"

const Downsell2ContentSection = () => {
  return (
    <>
      {/* Final Challenge Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Here's My Final Challenge:</h3>
        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-600/50 rounded-lg p-6 md:p-8 backdrop-blur-sm">
          <div className="flex items-start gap-4 mb-6">
            <Target className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
            <div className="space-y-3 text-base md:text-lg">
              <p className="font-semibold text-blue-200">Give me 30 days with this system.</p>
              <p className="text-blue-200/90">If you don't make your investment back using just ONE of my strategies...</p>
              <p className="text-blue-200/90">If you don't feel like this was the best €197 you ever spent...</p>
              <div className="bg-slate-800/50 rounded-lg p-4 md:p-6 border-2 border-green-500/50 backdrop-blur-sm">
                <p className="text-lg md:text-xl font-bold text-green-400 text-center">I'll refund every cent. No questions.</p>
              </div>
              <p className="text-lg md:text-xl font-semibold text-purple-300">You have nothing to lose. And €10K/month to gain.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Clock Ticking Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-600/50 text-white rounded-lg p-6 md:p-8 mb-12 backdrop-blur-sm"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <Clock className="w-8 h-8" />
            The Clock Is Literally Ticking:
          </h3>
          <p className="text-lg md:text-xl font-semibold text-red-200/90">
            This page has a timer. When it hits zero, this offer dies forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6">
          <div className="bg-red-800/50 border border-red-600/50 rounded-lg p-4 text-center backdrop-blur-sm">
            <div className="text-lg font-bold mb-2 text-red-200">No extensions</div>
            <div className="text-sm text-red-200/80">When it's gone, it's gone</div>
          </div>
          <div className="bg-red-800/50 border border-red-600/50 rounded-lg p-4 text-center backdrop-blur-sm">
            <div className="text-lg font-bold mb-2 text-red-200">No exceptions</div>
            <div className="text-sm text-red-200/80">Rules are rules</div>
          </div>
          <div className="bg-red-800/50 border border-red-600/50 rounded-lg p-4 text-center backdrop-blur-sm">
            <div className="text-lg font-bold mb-2 text-red-200">No sob stories</div>
            <div className="text-sm text-red-200/80">Decision time is now</div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 md:p-6 backdrop-blur-sm">
          <h4 className="text-xl md:text-2xl font-bold mb-4 text-red-300">After this:</h4>
          <ul className="space-y-2 text-base md:text-lg text-red-200/90">
            <li>• The price goes back to €497</li>
            <li>• Payment plans disappear forever</li>
            <li>• You're on your own</li>
          </ul>
          <div className="mt-6 bg-gradient-to-r from-orange-900/40 to-orange-800/40 border border-orange-600/50 text-orange-200 rounded-lg p-4 md:p-6 backdrop-blur-sm">
            <p className="font-bold text-center text-base md:text-lg">While you're reading this, someone just bought it.</p>
            <p className="font-bold text-center text-lg md:text-xl text-orange-300">They'll be making money next month. Will you?</p>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Downsell2ContentSection