import About from "@/components/about/About"
import Contact from "@/components/contact/Contact"
import Map from "@/components/map/Map"
import Works from "@/components/works/Works"
import Features from "@/components/features/Features"
import Sections from "@/components/properties-routes/Sections"
import Landing from "@/components/landing/Landing"

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
