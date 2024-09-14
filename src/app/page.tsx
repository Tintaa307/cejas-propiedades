import About from "@/components/about/About"
import Contact from "@/components/contact/Contact"
import Map from "@/components/map/Map"
import Works from "@/components/works/Works"
import Features from "@/components/features/Features"
import Sections from "@/components/properties-routes/Sections"
import HeroSection from "@/components/hero/HeroSection"
import Services from "@/components/services/Services"

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Works />
      <Features />
      <Services />
      <Map />
      <Sections />
      <Contact />
    </>
  )
}
