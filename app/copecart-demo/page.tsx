// app/cinematic-studio/page.tsx
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CinematicStudioPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div className="w-full">
          <Image
            src="/images/cinematic-toolkit.webp" 
            alt="Cinematic Studio"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Right: Content */}
        <div>
            <h1 className="text-4xl font-bold mb-4">For Demo</h1>
          <h1 className="text-3xl font-bold mb-4">
            Cinematic Studio (New Version) Lifetime Access
          </h1>
          <p className="text-muted-foreground mb-4">
            This is your exclusive access to the upgraded version of Cinematic Studio now with new modules,
            community access & lifetime deal.
          </p>
          <p className="text-muted-foreground mb-6">
            The exact blueprint that built the Elevenstoic brand to 1M+ followers and consistent 5-figure months.
          </p>

          <h2 className="text-xl font-semibold mb-2">What's included:</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-6">
            <li>Brand Identity Mastery</li>
            <li>Viral Editing Lab</li>
            <li>Cinematic Toolkit</li>
            <li>Premium Clip Vault (700+ assets)</li>
            <li>Creator Monetization Blueprint</li>
            <li><strong>NEW:</strong> AI Assistant Blueprint</li>
          </ul>

          <a
          href="/upsell-1"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold px-6 py-2 text-lg">
              Buy Now Lifetime Access
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
