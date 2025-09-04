"use client"

import { motion } from "framer-motion"
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={flipOnHover ? { rotateY: 5, scale: 1.02 } : { scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">{children}</Card>
    </motion.div>
  )
}
