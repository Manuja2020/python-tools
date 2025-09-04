"use client"

import { motion } from "framer-motion"
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-6"
            >
              Why Choose Our Platform?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty"
            >
              We've built the most comprehensive and user-friendly downloading platform with cutting-edge technology and
              a focus on user experience. Here's what makes us different:
            </motion.p>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
