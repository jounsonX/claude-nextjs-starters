import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { TechStackSection } from "@/components/sections/tech-stack"
import { CTASection } from "@/components/sections/cta"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TechStackSection />
      <CTASection />
    </>
  )
}
