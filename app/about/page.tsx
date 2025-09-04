import { AboutHero } from "@/components/about-hero"
import { AboutMission } from "@/components/about-mission"
import { AboutFeatures } from "@/components/about-features"
import { AboutTeam } from "@/components/about-team"
import { AboutContact } from "@/components/about-contact"

export const metadata = {
  title: "About Us - Y2Mate Downloaders",
  description:
    "Learn about Y2Mate Downloaders - the modern, secure, and fast way to download videos and audio content.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutMission />
      <AboutFeatures />
      <AboutTeam />
      <AboutContact />
    </div>
  )
}
