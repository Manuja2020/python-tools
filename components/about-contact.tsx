"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, HelpCircle, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const contactOptions = [
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Questions about our service or business partnerships",
    contact: "hello@y2mate-downloaders.com",
    action: "Send Email",
  },
  {
    icon: HelpCircle,
    title: "Technical Support",
    description: "Need help with downloads or technical issues?",
    contact: "support@y2mate-downloaders.com",
    action: "Get Support",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Questions about data privacy and security practices",
    contact: "privacy@y2mate-downloaders.com",
    action: "Contact Privacy Team",
  },
  {
    icon: MessageSquare,
    title: "Feedback",
    description: "Share your thoughts and suggestions for improvement",
    contact: "feedback@y2mate-downloaders.com",
    action: "Send Feedback",
  },
]

export function AboutContact() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            We'd love to hear from you. Choose the best way to reach our team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{option.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{option.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground font-mono">{option.contact}</span>
                        <Button variant="outline" size="sm">
                          {option.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-muted/50 rounded-lg p-8"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">Response Time</h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We typically respond to all inquiries within 24 hours during business days. For urgent technical issues, our
            support team is available around the clock to ensure your downloading experience remains smooth and
            uninterrupted.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
