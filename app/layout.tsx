import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import "./globals.css"

export const metadata: Metadata = {
  title: "Y2Mate Downloaders - Download Videos & Audio",
  description: "Modern video and audio downloader. Paste any URL and download in MP4, MP3, and other formats.",
  generator: "v0.app",
  keywords: ["video downloader", "audio downloader", "mp4", "mp3", "youtube downloader"],
  openGraph: {
    title: "Y2Mate Downloaders - Download Videos & Audio",
    description: "Modern video and audio downloader. Paste any URL and download in MP4, MP3, and other formats.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="text/javascript"
          src="//pl27559325.revenuecpmgate.com/bf/fc/ac/bffcac13858d8ce6ee9eda60ec5b4dcd.js"
        ></script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <main className="min-h-screen">{children}</main>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
