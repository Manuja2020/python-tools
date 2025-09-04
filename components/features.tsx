"use client"

import { Shield, Zap, Globe, Download, Music, Video } from "lucide-react"
import { CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/animated-card"

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your privacy is our priority. No data is stored on our servers.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Download your content in seconds with our optimized servers.",
  },
  {
    icon: Globe,
    title: "Universal Support",
    description: "Works with all major video and audio platforms worldwide.",
  },
  {
    icon: Download,
    title: "Multiple Formats",
    description: "Choose from various quality options and file formats.",
  },
  {
    icon: Music,
    title: "Audio Extraction",
    description: "Extract high-quality audio from any video content.",
  },
  {
    icon: Video,
    title: "HD Quality",
    description: "Download videos in up to 4K resolution when available.",
  },
]

export function Features() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance animate-fade-in-up">
            Why Choose Our Downloader?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in-up animation-delay-200">
            Experience the fastest and most reliable way to download your favorite content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard key={feature.title} delay={index * 0.1} flipOnHover={true}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg hover:rotate-12 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
