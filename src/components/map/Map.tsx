"use client"

import Image from "next/image"
import React, { useState } from "react"
import { RiMapPinLine } from "@remixicon/react"
import { AnimatePresence, motion } from "framer-motion"
import Button from "../button/Button"
import CardContent from "./CardContent"

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
      pathname: "retiro",
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
      pathname: "pueblo",
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
      pathname: "gardenias",
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
      pathname: "canada",
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
      pathname: "comarca",
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
      pathname: "magnolias",
    },
    {
      name: "La Estacion",
      className:
        "absolute top-[69%] mt-[84px] -ml-[5px] left-1/3 w-max h-max rounded-full flex items-center justify-center",
      image: "/images/desarrollos/work-estacion.svg",
      logo: "",
      surface: "",
      price: "",
      location: "",
      pathname: "estacion",
    },
  ]

  return (
    <div className="w-full h-max flex items-center justify-center">
      <div className="relative w-max h-max">
        <Image
          src={"/images/mapa-cejas-big.jpg"}
          alt="image-empty"
          width={1920}
          height={1080}
          className="my-24 drop-shadow-[0_0_8px_#d9d9d9] border-[#d9d9d9] border-[1px]"
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
                className="text-black animate-pulse animation-delay-150 cursor-pointer"
                size={30}
              />
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial={"closed"}
                  animate={
                    !work
                      ? isHovered && loc.name === location
                        ? "open"
                        : "closed"
                      : work === loc.pathname
                      ? "open"
                      : "closed"
                  }
                  exit={"closed"}
                  className={
                    "absolute -top-60 left-7 w-[580px] h-[380px] bg-white shadow-[0_0_5px_#d9d9d9] rounded-[21px] border-[1px] border-black flex items-center justify-center flex-col"
                  }
                >
                  <header className="relative w-full h-28 border-b-[1px] border-black flex items-center justify-center">
                    <h5 className="text-black text-2xl font-bold uppercase">
                      {loc.name}
                    </h5>
                  </header>
                  <main className="w-full h-max flex items-center justify-center flex-row">
                    <article className="w-1/2 h-full flex items-center justify-center">
                      <Image
                        src={loc.image}
                        alt="image"
                        width={250}
                        height={250}
                        className="w-[270px] h-[255px] rounded-md rounded-bl-[21px] border-[1px] border-black mt-1"
                      />
                    </article>
                    <article className="w-1/2 h-full flex items-center justify-center flex-col gap-1">
                      <div className="w-[97%] h-max flex items-start justify-center flex-row gap-1">
                        <CardContent
                          title="Lotes"
                          content="275m2 a 310m2"
                          className="rounded-tl-md rounded-tr-none"
                        />
                        <CardContent title="Ubicacion" content="Cañuelas" />
                      </div>
                      <CardContent
                        title="Desde"
                        content="1000 USD"
                        className="w-[97%] rounded-b-md rounded-tr-none"
                      />
                      <Button className="bg-black text-white w-[97%] rounded-sm h-11">
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
  )
}

export default Map
