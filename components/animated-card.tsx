"use client"

import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  flipOnHover?: boolean
}

export function AnimatedCard({ children, className, delay = 0, flipOnHover = false }: AnimatedCardProps) {
  return (
    <div
      className={`animate-fade-in-up hover:scale-105 active:scale-95 transition-all duration-300 ${flipOnHover ? "hover:rotate-1" : ""} ${className || ""}`}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">{children}</Card>
    </div>
  )
}
