import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { FacilitiesSection } from "@/components/sections/FacilitiesSection"
import { TeamSection } from "@/components/sections/TeamSection"
import { StoreSection } from "@/components/sections/StoreSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <FacilitiesSection />
        <TeamSection />
        <StoreSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
