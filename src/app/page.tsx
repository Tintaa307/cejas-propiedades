import About from "@/components/about/About"
import Information from "@/components/information/Information"
import Landing from "@/components/Landing/Landing"
import Map from "@/components/map/Map"
import Navbar from "@/components/navbar/Navbar"
import Properties from "@/components/properties/Properties"
import Search from "@/components/search/Search"
import Works from "@/components/works/Works"

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Search />
      <About />
      <Works />
      <Map />
      <Information />
      <Properties />
    </>
  )
}
