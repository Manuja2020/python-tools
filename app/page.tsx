import { Hero } from "@/components/hero"
import { Downloader } from "@/components/downloader"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Downloader />
      <Features />
      <FAQ />
    </div>
  )
}
