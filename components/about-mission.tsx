"use client"

import { Target, Users, Globe, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide the fastest, most reliable, and user-friendly video and audio downloading experience on the web.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description:
      "Every feature we build is designed with our users in mind, prioritizing simplicity and effectiveness.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Making content accessible to everyone, everywhere, regardless of platform or geographic location.",
  },
  {
    icon: Heart,
    title: "Privacy First",
    description: "We believe your data is yours. We don't store, track, or sell any of your personal information.",
  },
]

export function AboutMission() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance animate-fade-in">
            Our Values & Mission
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in-up animation-delay-200">
            Built on principles of simplicity, security, and user empowerment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={value.title} className="animate-fade-in-up" style={{ animationDelay: `${400 + index * 100}ms` }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
