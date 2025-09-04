"use client"

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
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance animate-fade-in-up">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty animate-fade-in-up animation-delay-200">
            Everything you need to know about our downloader
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-400">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
