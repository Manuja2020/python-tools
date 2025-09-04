"use client"

import { CheckCircle } from "lucide-react"

const features = [
  "Support for 1000+ video and audio platforms",
  "Multiple format options (MP4, MP3, WebM, M4A)",
  "High-quality downloads up to 4K resolution",
  "No registration or account required",
  "100% free with no hidden costs",
  "Advanced security and privacy protection",
  "Lightning-fast download speeds",
  "Mobile-friendly responsive design",
  "Regular updates and improvements",
  "24/7 reliable service availability",
]

export function AboutFeatures() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-6 animate-fade-in">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty animate-fade-in-up animation-delay-200">
              We've built the most comprehensive and user-friendly downloading platform with cutting-edge technology and
              a focus on user experience. Here's what makes us different:
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4 animate-fade-in animation-delay-400">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${500 + index * 50}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
