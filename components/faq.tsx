"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is this service completely free?",
    answer:
      "Yes, our downloader is 100% free to use. There are no hidden fees, subscriptions, or premium features. You can download as many videos and audio files as you want.",
  },
  {
    question: "What video platforms are supported?",
    answer:
      "We support all major video platforms including YouTube, Vimeo, Dailymotion, Facebook, Instagram, TikTok, and many more. If you have a direct video URL, chances are we can download it.",
  },
  {
    question: "What file formats can I download?",
    answer:
      "You can download videos in MP4, WebM, and other formats in various quality options (720p, 1080p, 4K when available). For audio, we support MP3, M4A, and other popular formats.",
  },
  {
    question: "Do you store my downloaded files?",
    answer:
      "No, we don't store any of your downloaded files on our servers. The download process is direct from the source to your device, ensuring your privacy and security.",
  },
  {
    question: "Is there a download limit?",
    answer:
      "There are no artificial limits on the number of downloads. However, we may implement fair usage policies to ensure the service remains fast and available for everyone.",
  },
  {
    question: "Can I download copyrighted content?",
    answer:
      "You are responsible for ensuring you have the right to download and use any content. We recommend only downloading content you own or have permission to use.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground text-pretty"
          >
            Everything you need to know about our downloader
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
