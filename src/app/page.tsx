import About from "@/components/about/About"
import Contact from "@/components/contact/Contact"
import Footer from "@/components/footer/Footer"
import Map from "@/components/map/Map"
import Properties from "@/components/properties/Properties"
import Search from "@/components/search/Search"
import Works from "@/components/works/Works"
import Services from "@/components/services/Services"
import Features from "@/components/features/Features"
import Landing from "@/components/landing/Landing"

export default function Home() {
  return (
    <>
      <Landing />
      <Search />
      <About />
      <Works />
      <Features />
      <Services />
      <Map />
      {/* <Properties /> */}
      <Contact />
    </>
  )
}
