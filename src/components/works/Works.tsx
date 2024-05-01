import React from "react"
import Title from "../title/Title"
import Image from "next/image"
import Link from "next/link"

const Works = () => {
  const works = [
    {
      title: "La Cañada",
      src: "/images/work-canada.svg",
      link: "#",
    },
    {
      title: "Pueblo Chico",
      src: "/images/work-pueblo-chico.svg",
      link: "#",
    },
    {
      title: "Las Gardenias",
      src: "/images/work-gardenias.svg",
      link: "#",
    },
    {
      title: "El Retiro",
      src: "/images/work-retiro.svg",
      link: "#",
    },
    {
      title: "La Comarca",
      src: "/images/work-comarca.svg",
      link: "#",
    },
    {
      title: "La Estación",
      src: "/images/work-estacion.svg",
      link: "#",
    },
  ]

  return (
    <section className="w-full h-max flex items-center justify-center">
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-12">
        <div className="w-full h-max flex items-center justify-center">
          <Title text="Desarrollos" />
        </div>
        <ul className="w-full h-max grid grid-cols-3 place-content-center gap-20">
          {works.map((work, index) => (
            <li
              key={index}
              className="relative w-full h-max flex items-center justify-center flex-col"
            >
              <Link href={work.link}>
                <picture>
                  <Image
                    src={work.src}
                    alt={work.title}
                    className="w-full h-full object-cover rounded-md cursor-pointer"
                    width={370}
                    height={324}
                  />
                </picture>
              </Link>
              <strong className="text-black text-2xl font-bold mt-5">
                {work.title}
              </strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Works
