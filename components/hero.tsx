"use client"

import { Download, Play, Music } from "lucide-react"
import { AnimatedBackground } from "./animated-background"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 sm:py-32">
      <AnimatedBackground />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        />
        <div
          className="absolute top-3/4 left-1/6 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "6s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-8 animate-fade-in">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full cursor-pointer hover:scale-110 transition-transform">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full cursor-pointer hover:scale-110 transition-transform">
              <Music className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance animate-fade-in-up">
            Download Videos & Audio
            <span className="text-primary block">Instantly</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in-up animation-delay-200">
            Paste any video or audio URL and download in your preferred format. Fast, secure, and completely free. No
            registration required.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up animation-delay-400">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground hover:scale-105 transition-transform">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Free & Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground hover:scale-105 transition-transform">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              <span>No Registration</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground hover:scale-105 transition-transform">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
              <span>High Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
