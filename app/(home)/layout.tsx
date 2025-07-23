// File: F:\client-demos\Elvenstoic-upgraded\app\(home)\layout.tsx

import React from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import CookieConsent from "@/components/cookie-consent"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
      <CookieConsent />
    </div>
  )
}
