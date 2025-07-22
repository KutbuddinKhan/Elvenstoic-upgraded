"use client"
import { motion } from "framer-motion"
import { Shield, Clock, TrendingUp, CheckCircle } from "lucide-react"

const Downsell2GuaranteeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="mb-12"
    >
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 border-2 border-green-300">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-green-900 mb-4">My Iron-Clad 60-Day Money-Back Guarantee</h3>
          <p className="text-xl text-green-800 font-semibold">
            I'm so confident this will change your life, I'll take ALL the risk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 text-center border border-green-200">
            <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h4 className="font-bold text-green-800 mb-2">60 Full Days</h4>
            <p className="text-green-700 text-sm">Take 2 full months to implement and see results</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border border-green-200">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h4 className="font-bold text-green-800 mb-2">Test Everything</h4>
            <p className="text-green-700 text-sm">Use every template, strategy, and system</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border border-green-200">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h4 className="font-bold text-green-800 mb-2">No Questions</h4>
            <p className="text-green-700 text-sm">Don't like it? Get every penny back instantly</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-400">
          <h4 className="text-xl font-bold text-green-900 mb-4 text-center">Here's How Confident I Am:</h4>
          <div className="space-y-3 text-lg text-green-800">
            <p>✅ If you don't make your €197 back in the first 30 days...</p>
            <p>✅ If you don't see a clear path to €10K/month...</p>
            <p>✅ If you don't feel this was the best investment you ever made...</p>
            <p>✅ If you're not completely blown away by the quality...</p>
          </div>
          <div className="bg-green-100 rounded-lg p-4 mt-4">
            <p className="text-2xl font-bold text-green-900 text-center">Just email me and I'll refund every cent.</p>
            <p className="text-green-800 text-center mt-2">
              No hoops to jump through. No questions asked. No hard feelings.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 mb-2">That means you can get the entire system...</p>
          <p className="text-xl font-bold text-purple-800 mb-2">Test it for 60 days...</p>
          <p className="text-2xl font-bold text-green-900">And if it doesn't work, you pay NOTHING.</p>
          <p className="text-lg text-gray-600 mt-4 italic">
            I'm literally betting €197 that this will change your life. The only question is: Are you willing to bet on
            yourself?
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Downsell2GuaranteeSection
