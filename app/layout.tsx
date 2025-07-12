import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import Navigation from "@/components/Navigation"
import DarkModeToggle from "@/components/DarkModeToggle"
import { ThemeContextProvider } from "@/contexts/ThemeContextProvider"
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sibhi - Portfolio",
  description:
    "Welcome to my corner of the internet where I turn coke into code and bugs into features. Warning: May contain traces of actual competence.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all duration-300 relative min-h-screen`}
      >
        <ThemeContextProvider>
          <div className="backdrop-blur-md sticky top-0 transition-all duration-300 z-50 bg-white/80 dark:bg-background/80 border-b border-gray-200 dark:border-border">
            <div className="flex justify-between items-center max-w-4xl mx-auto px-4 py-4">
              <DarkModeToggle />
              <Navigation />
            </div>
          </div>
          <main className="max-w-2xl mx-auto px-4">{children}</main>
          <div className="max-w-2xl mx-auto px-4">
            <Footer />
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
