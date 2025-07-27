"use client"

import React from 'react';
import { CheckCircle, Mail, Zap, Clock, Star } from 'lucide-react';

const ThankYouPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-800/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-purple-800/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
                        <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                        Boom! You Just Made The Best Investment Of Your Creator Journey 🎉
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">
                        Welcome to the Cinematic Studio family!
                    </h2>

                    <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        You're not just another customer to me. You're a visionary who understands that creating scroll-stopping content is the key to building a legendary brand.
                    </p>
                </div>

                {/* Email Notice */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
                    <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-slate-200 mb-2">
                                <strong>To access your products, we sent all the details to your inbox right now.</strong>
                            </p>
                            <p className="text-slate-300 mb-2">
                                Look for: <span className="text-blue-400 font-semibold">"Access Cinematic Studio"</span> in your inbox (check spam if needed).
                            </p>
                            <p className="text-slate-400 text-sm">
                                This email contains your login details for the members area where all your purchased products are waiting for you.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <p className="text-xl text-slate-200 font-medium">
                        But before you dive in, I need 2 minutes of your time to ensure you get MAXIMUM results...
                    </p>
                </div>

                {/* Main Steps */}
                <div className="max-w-6xl mx-auto space-y-8">

                    {/* Step 1 */}
                    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
                        <div className="flex items-start space-x-4 mb-6">
                            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                1
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex flex-col sm:flex-row sm:items-center">
                                    <span>📋 Tell Me About Your Creator Dreams</span>
                                    <span className="text-blue-400 text-sm sm:text-lg sm:ml-2 mt-1 sm:mt-0">(2 mins)</span>
                                </h3>


                                <p className="text-slate-200 mb-4 leading-relaxed">
                                    I've prepared a quick form to understand exactly where you are and where you want to be. This helps me tailor future content, tutorials, and updates specifically for YOUR success.
                                </p>

                                <div className="bg-slate-800/50 border border-slate-600/50 rounded-xl p-4 mb-6">
                                    <p className="text-slate-200 mb-2">
                                        <strong>Why this matters:</strong> The creators who fill this out grow 3x faster because I can send them exactly what they need, when they need it.
                                    </p>
                                </div>

                                <a href="https://form.typeform.com/to/GIermSYB?typeform-source=www.google.com" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                                        CLICK HERE TO SHARE YOUR VISION
                                    </button>
                                </a>
                                <p className="text-slate-400 text-sm mt-2 italic">
                                    Takes just 2 minutes and unlocks personalized growth tips
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                2
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    📧 Check Your Email & Access Your Products
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-slate-200 mb-4">
                                            <strong>What's happening right now:</strong> Your login credentials are being sent to the email you used for this purchase.
                                        </p>

                                        <div className="bg-slate-800/50 border border-slate-600/50 rounded-xl p-4 mb-4">
                                            <p className="text-blue-400 font-semibold mb-2">Email Subject to look for:</p>
                                            <p className="text-white font-bold">"Access Cinematic Studio"</p>
                                        </div>

                                        <div className="space-y-2 text-slate-300">
                                            <p><strong>This email contains:</strong></p>
                                            <ul className="space-y-1 ml-4">
                                                <li>• Your unique login details for the members area</li>
                                                <li>• Direct access link to your dashboard</li>
                                                <li>• All your purchased products in one place</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="bg-slate-800/50 border border-slate-600/50 rounded-xl p-4 mb-4">
                                            <p className="text-yellow-400 font-semibold mb-2">Important:</p>
                                            <p className="text-slate-300 text-sm">
                                                If you already have a Cinematic Studio account, your new products will be automatically added to your existing account.
                                            </p>
                                        </div>

                                        <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                                            <p className="text-red-400 font-semibold mb-2">Can't find the email?</p>
                                            <ul className="space-y-1 text-slate-300 text-sm">
                                                <li>• Check your spam/promotions folder</li>
                                                <li>• Make sure you're checking the right email address</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            💡 While You Wait For Your Email...
                        </h3>

                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div className="text-center">
                                <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <Star className="w-8 h-8 text-green-400" />
                                </div>
                                <p className="text-3xl font-bold text-green-400">300%</p>
                                <p className="text-slate-300 text-sm">Engagement Increase</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <Clock className="w-8 h-8 text-blue-400" />
                                </div>
                                <p className="text-3xl font-bold text-blue-400">30</p>
                                <p className="text-slate-300 text-sm">Days Average</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <Zap className="w-8 h-8 text-purple-400" />
                                </div>
                                <p className="text-3xl font-bold text-purple-400">24hr</p>
                                <p className="text-slate-300 text-sm">Quick Results</p>
                            </div>
                        </div>

                        <p className="text-slate-200 mb-4 leading-relaxed">
                            <strong>Did you know?</strong> The average Cinematic Studio member sees a 300% increase in engagement within their first 30 days. But the ones who implement within 24 hours? They see results in less than a week.
                        </p>

                        <div className="text-center">
                            <p className="text-xl text-white font-semibold mb-2">
                                Your journey to 1M followers starts with the next video you create.
                            </p>
                            <p className="text-blue-400 font-medium">
                                And now you have everything you need to make it legendary.
                            </p>
                        </div>
                    </div>

                    {/* Support Section */}
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            ⚡ Need Help? We've Got You
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-slate-200 mb-2">
                                    <strong>Email:</strong> <span className="text-blue-400">hello@elevenstoic.com</span>
                                </p>
                                <p className="text-slate-200 mb-2">
                                    <strong>Response Time:</strong> Within 24 hours
                                </p>
                                <p className="text-slate-200">
                                    <strong>Priority Support:</strong> Just mention you're a new member
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-4">
                                <p className="text-slate-200 leading-relaxed">
                                    Remember: You're not just buying a product. You're joining a movement of creators who want to build something cool.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Message */}
                    <div className="text-center space-y-6">
                        <p className="text-2xl text-white font-semibold">
                            Let's create something legendary together.
                        </p>

                        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6 max-w-2xl mx-auto">
                            <p className="text-xl text-white font-semibold mb-2">
                                Welcome to the family,
                            </p>
                            <p className="text-lg text-slate-200 mb-1">
                                <strong>Richard</strong>
                            </p>
                            <p className="text-slate-400 italic">
                                Founder, Cinematic Studio
                            </p>
                        </div>

                        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 max-w-3xl mx-auto">
                            <p className="text-slate-200">
                                <strong>P.S.</strong> - Seriously, fill out that quick form. The insights I get help me create exactly what YOU need to succeed. Plus, you might get selected for exclusive beta features... 👀
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional CSS for grid pattern */}
            <style jsx>{`
        .bg-grid {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
        </div>
    );
};

export default ThankYouPage;