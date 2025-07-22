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
        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Here's My Final Challenge:</h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <Target className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
            <div className="space-y-3 text-lg">
              <p className="font-semibold text-blue-900">Give me 30 days with this system.</p>
              <p className="text-blue-800">If you don't make your investment back using just ONE of my strategies...</p>
              <p className="text-blue-800">If you don't feel like this was the best €197 you ever spent...</p>
              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <p className="text-xl font-bold text-green-800 text-center">I'll refund every cent. No questions.</p>
              </div>
              <p className="text-lg font-semibold text-purple-800">You have nothing to lose. And €10K/month to gain.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Clock Ticking Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-red-600 text-white rounded-lg p-8 mb-12"
      >
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <Clock className="w-8 h-8" />
            The Clock Is Literally Ticking:
          </h3>
          <p className="text-xl font-semibold opacity-90">
            This page has a timer. When it hits zero, this offer dies forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-red-700 rounded-lg p-4 text-center">
            <div className="text-lg font-bold mb-2">No extensions</div>
            <div className="text-sm opacity-90">When it's gone, it's gone</div>
          </div>
          <div className="bg-red-700 rounded-lg p-4 text-center">
            <div className="text-lg font-bold mb-2">No exceptions</div>
            <div className="text-sm opacity-90">Rules are rules</div>
          </div>
          <div className="bg-red-700 rounded-lg p-4 text-center">
            <div className="text-lg font-bold mb-2">No sob stories</div>
            <div className="text-sm opacity-90">Decision time is now</div>
          </div>
        </div>

        <div className="bg-red-800 rounded-lg p-6">
          <h4 className="text-xl font-bold mb-4">After this:</h4>
          <ul className="space-y-2 text-lg">
            <li>• The price goes back to €497</li>
            <li>• Payment plans disappear forever</li>
            <li>• You're on your own</li>
          </ul>
          <div className="mt-6 bg-white text-red-800 rounded-lg p-4">
            <p className="font-bold text-center">While you're reading this, someone just bought it.</p>
            <p className="font-bold text-center text-lg">They'll be making money next month. Will you?</p>
          </div>
        </div>
      </motion.div>

      {/* Social Proof Mini Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gray-50 rounded-lg p-6 mb-8"
      >
        <div className="text-center mb-4">
          <AlertCircle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <h4 className="text-lg font-semibold text-gray-800">What Other Creators Are Saying About Missing Out:</h4>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
            <p className="text-gray-700 italic">
              "I saw this offer 6 months ago and didn't take it. Now I'm still struggling to make €500/month while
              watching others succeed."
            </p>
            <p className="text-sm text-gray-500 mt-2">- Sarah K., 45K followers</p>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
            <p className="text-gray-700 italic">
              "I thought €297 was too much. Now I've spent €2000 on courses that don't work. I should have just bought
              this."
            </p>
            <p className="text-sm text-gray-500 mt-2">- Mike R., 78K followers</p>
          </div>
        </div>
      </motion.div>

      {/* Comparison Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Let's Put This €197 Investment in Perspective:
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-red-800 mb-4 text-center">What €197 Usually Gets You:</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <X className="w-4 h-4 text-red-500" />
                <span className="text-red-700">1 month gym membership (no guarantee you'll use it)</span>
              </li>
              <li className="flex items-center gap-3">
                <X className="w-4 h-4 text-red-500" />
                <span className="text-red-700">2 nights out at restaurants</span>
              </li>
              <li className="flex items-center gap-3">
                <X className="w-4 h-4 text-red-500" />
                <span className="text-red-700">Half a designer bag</span>
              </li>
              <li className="flex items-center gap-3">
                <X className="w-4 h-4 text-red-500" />
                <span className="text-red-700">1 pair of sneakers</span>
              </li>
            </ul>
            <p className="text-red-600 font-semibold mt-4 text-center">All gone after you use them once</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-green-800 mb-4 text-center">What €197 Gets You Here:</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-700">A system that made €27,345 in 90 days</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-700">Templates for €8K product launches</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-700">Automated systems that work 24/7</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-700">Potential to earn €10K+ monthly</span>
              </li>
            </ul>
            <div className="bg-green-100 rounded-lg p-3 mt-4">
              <p className="text-green-800 font-bold text-center">Pays you back FOREVER</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* What You're Really Choosing Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-12"
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">What You're Really Choosing Between:</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border-2 border-red-300">
            <h4 className="text-xl font-bold text-red-800 mb-4 text-center">🚫 Path 1: Stay Where You Are</h4>
            <ul className="space-y-3 text-red-700">
              <li>• Keep creating content for free</li>
              <li>• Hope brands notice you someday</li>
              <li>• Watch other creators make money</li>
              <li>• Wonder "what if?" for the next year</li>
              <li>• Stay dependent on algorithm luck</li>
            </ul>
            <div className="bg-red-100 rounded-lg p-3 mt-4">
              <p className="text-red-800 font-bold text-center">Cost: Your dreams + €0 revenue</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-green-300">
            <h4 className="text-xl font-bold text-green-800 mb-4 text-center">✅ Path 2: Become a CEO</h4>
            <ul className="space-y-3 text-green-700">
              <li>• Turn followers into customers</li>
              <li>• Build automated revenue streams</li>
              <li>• Make money while you sleep</li>
              <li>• Have a real business, not just a hobby</li>
              <li>• Control your financial future</li>
            </ul>
            <div className="bg-green-100 rounded-lg p-3 mt-4">
              <p className="text-green-800 font-bold text-center">Investment: €197 → €10K+/month</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-purple-800">The choice is yours. But choose quickly.</p>
        </div>
      </motion.div>
    </>
  )
}

export default Downsell2ContentSection
