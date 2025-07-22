'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';// Import the ImageGallery component
import Carousel from './Carousel';
import ImageCarousel from './Carousel';
import Image from 'next/image';

// Type definitions for the image data
interface ImageData {
    id: string
    src: string
    alt: string
    width: number
    height: number
}

const modules = [
    {
        number: 1,
        title: 'The €8K Product Launch System',
        icon: '🚀',
        description: 'See exactly how I made €8,000 in 72 hours from ONE launch.',
        features: [
            'My complete launch timeline & Strategy (10 days before to 3 days after)',
            'Every single Story, Post, and Reel I used (with my templates)',
            'The psychological triggers that made people BUY',
            'My DM Automation scripts that converted browsers into buyers',
            'The pricing strategy that maximized revenue',
        ],
        result: 'This module alone has made me over €30,000 this year.',
        image: '/upsell-2/module-1.jpg',
    },
    {
        number: 2,
        title: 'The Newsletter Money Machine',
        icon: '📧',
        description: 'Turn your followers into an email list that prints money.',
        features: [
            'My complete email funnel (from opt-in to purchase)',
            'The exact 7-email sequence that converts at 12%',
            'How to monetize through newsletter ads (€500-2000/month)',
            'Automated sequences that sell while you sleep',
            'My actual email templates (just swap your info)',
        ],
        result: 'Currently generating €2-3K per month on autopilot.',
        image: '/upsell-2/module-2.jpg',
    },
    {
        number: 3,
        title: 'The Promo Engine Framework',
        icon: '🎯',
        description: 'Never wonder "what should I post today?" again.',
        features: [
            'My complete Notion promotion calendar system',
            'How to promote without being "salesy"',
            'The 80/20 content strategy that maximizes sales',
            'The "soft sell" method that feels natural',
        ],
        result: 'This system lets me promote daily without losing followers.',
    },
    {
        number: 4,
        title: 'Scale Without Burnout',
        icon: '🧠',
        description: 'Build a business that grows without consuming your life.',
        features: [
            'The mindset shift from creator to CEO',
            'Systems for consistent €10K months',
            'How to work 2-3 hours/day (not 12)',
            'My complete automation stack',
            'Building recurring revenue streams',
        ],
        result: "Because what's the point of money without freedom?",
    },
];

const bonuses = [
    {
        title: 'Complete Swipe File',
        icon: '📱',
        description: 'Every email, DM, and promo post that\'s made me money'
    },
    {
        title: 'Live Launch Breakdown',
        icon: '🎬',
        description: 'Watch me plan and execute a 2 Days €4K Promo Launch in real-time'
    }
];

const targetAudience = [
    { text: 'You have an audience (or are building one)', isFor: true },
    { text: 'You\'re tired of creating content for "exposure"', isFor: true },
    { text: 'You want a REAL business, not just likes', isFor: true },
    { text: 'You\'re ready to join the 1% who actually make money', isFor: true },
    { text: 'This is NOT for people who want "get rich quick"', isFor: false },
    { text: 'This is NOT for people afraid of selling', isFor: false },
    { text: 'This is NOT for people who won\'t implement', isFor: false }
];

// Sample images for the gallery - replace with your actual upsell/downsell material images
// Gallery images data
const galleryImages: ImageData[] = [
    {
        id: '1',
        src: '/upsell-2/c1.png',
        alt: 'Dashboard Overview - Main product interface',
        width: 1920,
        height: 1080,
    },
    {
        id: '2',
        src: '/upsell-2/c2.jpg',
        alt: 'Launch Timeline Strategy - Step by step process',
        width: 1080,
        height: 1920,
    },
    {
        id: '3',
        src: '/upsell-2/c3.jpg',
        alt: 'Email Templates - Conversion focused designs',
        width: 1600,
        height: 900,
    },
    {
        id: '4',
        src: '/upsell-2/c4.jpg',
        alt: 'Promotion Calendar - Notion system overview',
        width: 1200,
        height: 800,
    },
    {
        id: '5',
        src: '/upsell-2/c5.jpg',
        alt: 'Automation Setup - Complete workflow diagram',
        width: 1920,
        height: 1200,
    },
    {
        id: '6',
        src: '/upsell-2/c6.jpg',
        alt: 'Sales Funnel Breakdown - Visual conversion path',
        width: 1920,
        height: 1200,
    },
    {
        id: '7',
        src: '/upsell-2/c7.jpg',
        alt: 'Revenue Results - Actual earnings screenshots',
        width: 1920,
        height: 1200,
    },
    {
        id: '8',
        src: '/upsell-2/c8.jpg',
        alt: 'Content Strategy Framework - 80/20 approach',
        width: 1920,
        height: 1200,
    },
    {
        id: '9',
        src: '/upsell-2/c9.jpg',
        alt: 'DM Automation Scripts - Conversion templates',
        width: 1920,
        height: 1200,
    },
    {
        id: '10',
        src: '/upsell-2/c10.jpg',
        alt: 'Pricing Strategy Guide - Revenue optimization',
        width: 1920,
        height: 1200,
    },
    {
        id: '11',
        src: '/upsell-2/c11.png',
        alt: 'Newsletter Funnel Setup - Email marketing system',
        width: 1920,
        height: 1200,
    },
    {
        id: '12',
        src: '/upsell-2/c12.png',
        alt: 'Promotion System - Daily content strategy',
        width: 1920,
        height: 1200,
    },
    {
        id: '13',
        src: '/upsell-2/c13.png',
        alt: 'Scale Without Burnout - CEO mindset framework',
        width: 1920,
        height: 1200,
    },
];


const UpsellTwoContentSection = () => {
    return (
        <>
            {/* Modules Section */}
            {/* Modules Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mb-12"
            >
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Here's Exactly What You're Getting:
                </h3>
                <div className="space-y-8">
                    {modules.map((module, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <h4 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                                    <span className="text-2xl">{module.icon}</span>
                                    MODULE {module.number}: {module.title}
                                </h4>
                            </div>
                            <p className="text-gray-700 mb-4 font-semibold">{module.description}</p>
                            <ul className="space-y-2 mb-4">
                                {module.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            {module.image && (
                                <div className="mb-4">
                                    <Image
                                        src={module.image}
                                        alt={module.title}
                                        width={800}
                                        height={450}
                                        className="rounded-lg w-full h-auto object-contain"
                                        priority
                                    />
                                </div>
                            )}
                            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                <p className="text-green-800 font-semibold">{module.result}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Bonuses Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mb-12"
            >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    🎁 EXCLUSIVE BONUSES:
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {bonuses.map((bonus, index) => (
                        <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-yellow-800 flex items-center gap-2 mb-2">
                                <span className="text-xl">{bonus.icon}</span>
                                Bonus #{index + 1}: {bonus.title}
                            </h4>
                            <p className="text-yellow-700">{bonus.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* System Breakdown */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-gray-50 rounded-lg p-8 mb-12"
            >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    This Is NOT Part of Cinematic Studio or VIP
                </h3>
                <p className="text-lg text-gray-700 mb-4 text-center font-semibold">Let me be crystal clear:</p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-blue-100 rounded-lg p-4">
                        <h4 className="font-bold text-blue-800 mb-2">Cinematic Studio</h4>
                        <p className="text-blue-700">Create stunning content</p>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-4">
                        <h4 className="font-bold text-purple-800 mb-2">VIP Growth System</h4>
                        <p className="text-purple-700">Build a massive following</p>
                    </div>
                    <div className="bg-green-100 rounded-lg p-4">
                        <h4 className="font-bold text-green-800 mb-2">Studio Pro</h4>
                        <p className="text-green-700">Turn that following into $$$$$</p>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-lg text-gray-700 mb-2">You can have the best content in the world...</p>
                    <p className="text-lg text-gray-700 mb-2">You can have 1 million followers...</p>
                    <p className="text-xl font-bold text-red-600">But without THIS system, you're just creating for free.</p>
                </div>
            </motion.div>

            {/* Target Audience Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                className="mb-12"
            >
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Who Is This For?
                </h3>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="space-y-3">
                        {targetAudience.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                {item.isFor ? (
                                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                ) : (
                                    <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                                )}
                                <span className={`text-lg ${item.isFor ? 'text-green-700' : 'text-red-700'}`}>
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    <ImageCarousel images={galleryImages} />
                    <p className="text-sm text-gray-600">
                        Click any image above to view it in full screen and browse through all the materials
                    </p>
                </div>

            </motion.div>


            {/* Carousel */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.6 }}
                className="mb-12"
            >
                {/* Image Carousel Component */}
            </motion.div>
        </>
    );
};

export default UpsellTwoContentSection;