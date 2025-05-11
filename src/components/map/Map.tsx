"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { RiMapPinLine } from "@remixicon/react"
import { AnimatePresence, motion } from "framer-motion"
import Button from "../button/Button"
import CardContent from "./CardContent"
import { useRouter } from "next/navigation"

const variants = {
  open: {
    opacity: 1,
    zIndex: 10,
    transition: { duration: 0.3, type: "tween" },
  },
  closed: {
    opacity: 0,
    zIndex: -10,
    transition: { duration: 0.3, type: "tween" },
  },
}

const Map = ({ work }: { work?: string }) => {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const [location, setLocation] = useState("")
  const locations = [
    {
      name: "El Retiro",
      className:
        "absolute top-2/3 mt-12 -ml-10 left-1/3 w-max h-max rounded-full flex items-center justify-center",
      image: "/images/desarrollos/work-retiro.svg",
      logo: "",
      surface: "",
      price: "",
      location: "",
      pathname: "/retiro",
    },
    {
      name: "Pueblo Chico",
      className:
        "absolute top-3/4 mt-[84px] -ml-[108px] left-1/3 w-max h-max rounded-full flex items-center justify-center",
      image: "/images/desarrollos/work-pueblo-chico.svg",
      logo: "",
      surface: "",
      price: "",
      location: "",
      pathname: "/pueblo",
    },
    {
      name: "Las Gardenias",
      className:
        "absolute top-[58%] left-[42%] w-max h-max rounded-full flex items-center justify-center",
      image: "/images/desarrollos/work-gardenias.svg",
      logo: "",
      surface: "",
      price: "",
      location: "",
      pathname: "/gardenias",
    },
    {
      name: "La Cañada",
      className:
        "absolute top-1/2 mt-4 left-[36%] w-max h-max rounded-full flex items-center justify-center",
      image: "/images/desarrollos/work-canada.svg",
      logo: "",
      surface: "",
      price: "",
      location: "",
      pathname: "/canada",
    },
    {
      name: "La Comarca",
      className:
        "absolute top-[48%] left-1/3 w-max h-max rounded-full flex items-center justify-center",
      image: "/images/desarrollos/work-comarca.svg",
      logo: "",
      surface: "",
      price: "",
      location: "",
      pathname: "/comarca",
    },
    {
      name: "Las Magnolias",
      className:
        "absolute top-3/4 mt-[84px] -ml-[38px] left-1/3 w-max h-max rounded-full flex items-center justify-center",
      image: "/images/desarrollos/work-magnolias.jpg",
      logo: "",
      surface: "",
      price: "",
      location: "",
      pathname: "/magnolias",
    },
    {
      name: "La Estación",
      className:
        "absolute top-[69%] mt-[84px] -ml-[5px] left-1/3 w-max h-max rounded-full flex items-center justify-center",
      image: "/images/desarrollos/work-estacion.svg",
      logo: "",
      surface: "",
      price: "",
      location: "",
      pathname: "/estacion",
    },
  ]

  useEffect(() => {
    if (work) {
      setLocation(work)
    }
  }, [work])

  return (
    <section
      id="ubicacion"
      className="w-full h-max flex items-center justify-center py-16 bg-primary_green max-md:hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="relative mx-auto flex items-center justify-center">
          <Image
            src={"/mapa-nuevo.png"}
            alt="Mapa de ubicaciones"
            width={1920}
            height={1080}
            className="drop-shadow-lg border-2 border-cream/30 rounded-md"
          />
          {locations.map((loc, index) => (
            <div
              key={index}
              className={loc.className}
              onMouseLeave={() => {
                setIsHovered(false)
                setLocation("")
              }}
            >
              <div className="relative w-max h-max">
                <RiMapPinLine
                  onMouseEnter={() => {
                    setIsHovered(true)
                    setLocation(loc.name)
                  }}
                  className="text-[#bf0909] cursor-pointer hover:scale-110 transition-transform"
                  size={30}
                />
                <AnimatePresence>
                  <motion.div
                    variants={variants}
                    initial={"closed"}
                    animate={
                      isHovered && location === loc.name ? "open" : "closed"
                    }
                    exit={"closed"}
                    className="absolute -top-60 left-7 w-[580px] h-[380px] bg-cream shadow-lg rounded-xl border-2 border-primary_green flex items-center justify-center flex-col"
                  >
                    <header className="relative w-full h-28 border-b-2 border-primary_green flex items-center justify-center">
                      <h5 className="text-primary_green text-2xl font-bold uppercase">
                        {loc.name}
                      </h5>
                    </header>
                    <main className="w-full h-max flex items-center justify-center flex-row">
                      <article className="w-1/2 h-full flex items-center justify-center">
                        <Image
                          src={loc.image || "/placeholder.svg"}
                          alt={`Imagen de ${loc.name}`}
                          width={250}
                          height={250}
                          className="w-[270px] h-[255px] rounded-md border-2 border-primary_green mt-1 object-cover"
                        />
                      </article>
                      <article className="w-1/2 h-full flex items-center justify-center flex-col gap-1">
                        <div className="w-[97%] h-max flex items-start justify-center flex-row gap-1">
                          <CardContent
                            title="Lotes"
                            content="275m2 a 310m2"
                            className="rounded-tl-md rounded-tr-none bg-primary_green/10 border-primary_green"
                          />
                          <CardContent
                            title="Ubicacion"
                            content="Cañuelas"
                            className="bg-primary_green/10 border-primary_green"
                          />
                        </div>
                        <CardContent
                          title="Desde"
                          content="1000 USD"
                          className="w-[97%] rounded-b-md rounded-tr-none bg-primary_green/10 border-primary_green"
                        />
                        <Button
                          onClick={() => router.push(loc.pathname)}
                          className="bg-primary_green text-cream w-[97%] rounded-md h-11 hover:bg-primary_green/90 transition-colors"
                        >
                          Ver Desarrollo
                        </Button>
                      </article>
                    </main>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile alternative content */}
      <div className="hidden md:block w-full max-w-xl mx-auto px-4 text-center">
        <p className="text-cream text-lg mb-6">
          Aquí puedes ver el mapa interactivo con todas nuestras ubicaciones.
        </p>
        <div className="grid grid-cols-1 gap-4">
          {locations.map((loc, index) => (
            <Button
              key={index}
              onClick={() => router.push(loc.pathname)}
              className="bg-cream text-primary_green w-full py-3 rounded-md hover:bg-cream/90 transition-colors"
            >
              {loc.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Map
