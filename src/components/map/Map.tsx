"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Button from "../button/Button"
import CardContent from "./CardContent"
import { useRouter } from "next/navigation"
import { RiMapPinFill } from "@remixicon/react"

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
        "absolute top-2/3 md:top-2/3 md:mt-8 lg:mt-12 md:-ml-6 lg:-ml-10 md:left-[30%] lg:left-1/3 left-[28%] mt-8 -ml-6 w-max h-max rounded-full flex items-center justify-center",
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
        "absolute top-3/4 md:top-3/4 md:mt-12 lg:mt-[84px] md:-ml-16 lg:-ml-[108px] md:left-[30%] lg:left-1/3 left-[28%] mt-16 -ml-20 w-max h-max rounded-full flex items-center justify-center",
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
        "absolute top-[58%] md:top-[58%] md:left-[38%] lg:left-[42%] left-[38%] w-max h-max rounded-full flex items-center justify-center",
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
        "absolute top-1/2 md:top-1/2 md:mt-2 lg:mt-4 md:left-[32%] lg:left-[36%] left-[32%] mt-2 w-max h-max rounded-full flex items-center justify-center",
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
        "absolute top-[48%] md:top-[48%] md:left-[30%] lg:left-1/3 left-[28%] w-max h-max rounded-full flex items-center justify-center",
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
        "absolute top-3/4 md:top-3/4 md:mt-12 lg:mt-[84px] md:-ml-6 lg:-ml-[38px] md:left-[30%] lg:left-1/3 left-[28%] mt-16 -ml-8 w-max h-max rounded-full flex items-center justify-center",
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
        "absolute top-[69%] md:top-[69%] md:mt-12 lg:mt-[84px] md:-ml-1 lg:-ml-[5px] md:left-[30%] lg:left-1/3 left-[28%] mt-16 -ml-1 w-max h-max rounded-full flex items-center justify-center",
      image: "/images/desarrollos/work-estacion.svg",
      logo: "",
      surface: "",
      price: "",
      location: "",
      pathname: "/estacion",
    },
    {
      name: "La Cañada II",
      className:
        "absolute top-[45%] md:top-[45%] md:left-[30%] lg:left-[32%] left-[28%] w-max h-max rounded-full flex items-center justify-center",
      image: "/images/desarrollos/work-canada2.svg",
      logo: "",
      surface: "796,87m²",
      price: "Consultar",
      location: "Barrio de Peluffo, Ruta 3 km 55",
      pathname: "/canada2",
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
      <div className="w-full max-w-[1440px] 2xl:max-w-7xl mx-auto px-4">
        <div className="relative mx-auto flex items-center justify-center">
          <Image
            src={"/new-mapa.jpg"}
            alt="Mapa de ubicaciones"
            width={1920}
            height={1080}
            className="w-full h-auto drop-shadow-lg border-2 border-cream/30 rounded-md"
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
                <RiMapPinFill
                  onMouseEnter={() => {
                    setIsHovered(true)
                    setLocation(loc.name)
                  }}
                  className="text-[#bf0909] cursor-pointer hover:scale-110 transition-transform w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
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
                    className="absolute -top-60 md:-top-60 md:left-7 left-1/2 -translate-x-1/2 md:translate-x-0 w-[calc(100vw-2rem)] max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[580px] h-auto min-h-[260px] md:min-h-[300px] lg:h-[380px] max-h-[85vh] bg-cream shadow-lg rounded-xl border-2 border-primary_green flex items-center justify-center flex-col overflow-hidden"
                  >
                    <header className="relative w-full h-20 md:h-20 lg:h-24 border-b-2 border-primary_green flex items-center justify-center px-2">
                      <h5 className="text-primary_green text-base md:text-lg lg:text-xl font-bold uppercase text-center">
                        {loc.name}
                      </h5>
                    </header>
                    <main className="w-full h-max flex items-center justify-center flex-col md:flex-row p-1.5 md:p-2 lg:p-3">
                      <article className="w-full md:w-1/2 h-full flex items-center justify-center">
                        <Image
                          src={loc.image || "/placeholder.svg"}
                          alt={`Imagen de ${loc.name}`}
                          width={250}
                          height={250}
                          className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[270px] h-auto max-h-[120px] sm:max-h-[140px] md:max-h-[200px] lg:max-h-[285px] rounded-md border-2 border-primary_green mt-1 object-cover"
                        />
                      </article>
                      <article className="w-full md:w-1/2 h-full flex items-center justify-center flex-col gap-0.5 md:gap-1 px-1 md:px-1.5 lg:px-0 mt-1 md:mt-0">
                        <div className="w-full h-max flex items-start justify-center flex-row gap-0.5 md:gap-1 overflow-hidden">
                          <CardContent
                            title="Lotes"
                            content="275m2 a 310m2"
                            className="rounded-tl-md rounded-tr-none bg-primary_green/10 border-primary_green flex-shrink"
                          />
                          <CardContent
                            title="Ubicacion"
                            content="Cañuelas"
                            className="bg-primary_green/10 border-primary_green flex-shrink"
                          />
                        </div>
                        <CardContent
                          title="Desde"
                          content="1000 USD"
                          className="w-full rounded-b-md rounded-tr-none bg-primary_green/10 border-primary_green"
                        />
                        <Button
                          onClick={() => router.push(loc.pathname)}
                          className="bg-primary_green text-cream w-full rounded-md h-8 md:h-9 lg:h-11 text-xs md:text-sm lg:text-base hover:bg-primary_green/90 transition-colors mt-0.5 md:mt-1"
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
      <div className="hidden xl:block w-[500px] 2xl:max-w-xl mx-auto px-4 text-center">
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
