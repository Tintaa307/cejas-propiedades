import About from "@/components/about/About"
import Contact from "@/components/contact/Contact"
import Map from "@/components/map/Map"
import Works from "@/components/works/Works"
import Services from "@/components/services/Services"
import Features from "@/components/features/Features"
import Landing from "@/components/landing/Landing"
import Sections from "@/components/properties-routes/Sections"

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Works />
      <Features />
      {/* <Services /> */}
      <Map />
      <Sections />
      <Contact />
    </>
  )
}
