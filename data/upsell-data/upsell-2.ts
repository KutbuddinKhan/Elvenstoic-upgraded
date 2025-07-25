interface Module {
  number: number;
  title: string;
  icon: string;
  description: string;
  features: string[];
  result: string;
  image?: string;
}

interface Bonus {
  title: string;
  icon: string;
  description: string;
  features?: string[];
  result?: string;
  image?: string;
}

export const modules = [
  {
    number: 1,
    title: "The €8K Product Launch System",
    icon: "🚀",
    description: "See exactly how I made €8,000 in 72 hours from ONE launch.",
    features: [
      "My complete launch timeline & Strategy (10 days before to 3 days after)",
      "Every single Story, Post, and Reel I used (with my templates)",
      "The psychological triggers that made people BUY",
      "My DM Automation scripts that converted browsers into buyers",
      "The pricing strategy that maximized revenue",
    ],
    result: "This module alone has made me over €30,000 this year.",
    image: "/upsell-2/module-1.jpg",
  },
  {
    number: 2,
    title: "The Promo Engine Framework",
    icon: "🎯",
    description: "Never wonder 'what should I post today?' again.",
    features: [
      "My complete Notion promotion calendar system",
      "How to promote without being 'salesy'",
      "The 80/20 content strategy that maximizes sales",
      "The 'soft sell' method that feels natural",
    ],
    result: "This system lets me promote daily without losing followers.",
  },
  {
    number: 3,
    title: "Scale Without Burnout",
    icon: "🧠",
    description: "Build a business that grows without consuming your life.",
    features: [
      "The mindset shift from creator to CEO",
      "Systems for consistent €10K months",
      "How to work 2-3 hours/day (not 12)",
      "My complete automation stack",
      "Building recurring revenue streams",
    ],
    result: "Because what's the point of money without freedom?",
  },
  
  // {
  //   number: 4,
  //   title: "The Newsletter Money Machine",
  //   icon: "📧",
  //   description: "Turn your followers into an email list that prints money.",
  //   features: [
  //     "My complete email funnel (from opt-in to purchase)",
  //     "The exact 7-email sequence that converts at 12%",
  //     "How to monetize through newsletter ads (€500-2000/month)",
  //     "Automated sequences that sell while you sleep",
  //     "My actual email templates (just swap your info)",
  //   ],
  //   result: "Currently generating €2-3K per month on autopilot.",
  //   image: "/upsell-2/module-2.png",
  // },
];

export const targetAudience = [
  { text: "You have an audience (or are building one)", isFor: true },
  { text: 'You\'re tired of creating content for "exposure"', isFor: true },
  { text: "You want a REAL business, not just likes", isFor: true },
  { text: "You're ready to join the 1% who actually make money", isFor: true },
  { text: 'This is NOT for people who want "get rich quick"', isFor: false },
  { text: "This is NOT for people afraid of selling", isFor: false },
  { text: "This is NOT for people who won't implement", isFor: false },
];


export const bonuses = [
  {
    title: "The Newsletter Money Machine",
    icon: "📧",
    description: "Turn your followers into an email list that prints money.",
    features: [
      "My complete email funnel (from opt-in to purchase)",
      "The exact 7-email sequence that converts at 12%",
      "How to monetize through newsletter ads (€500-2000/month)",
      "Automated sequences that sell while you sleep",
      "My actual email templates (just swap your info)",
    ],
    result: "Currently generating €2-3K per month on autopilot.",
    image: "/upsell-2/module-2.png",
  },
  {
    title: "Complete Swipe File",
    icon: "📱",
    description: "Every email, DM, and promo post that's made me money",
  },
  {
    title: "Live Launch Breakdown",
    icon: "🎬",
    description: "Watch me plan and execute a 2 Days €4K Promo Launch in real-time",
  },
  
];