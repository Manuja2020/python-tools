"use client"

import { Download, Shield, Zap } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-8 animate-fade-in">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance animate-fade-in-up animation-delay-200">
            About Y2Mate
            <span className="text-primary block">Downloaders</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto text-pretty animate-fade-in-up animation-delay-400">
            We're on a mission to make downloading videos and audio content simple, fast, and secure. Since 2024, we've
            been helping millions of users access their favorite content with just a few clicks.
          </p>
        </div>
      </div>
    </section>
  )
}
