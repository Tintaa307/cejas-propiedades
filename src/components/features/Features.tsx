import React from "react"
import Title from "../title/Title"
import Image from "next/image"
import { BathIcon } from "lucide-react"
import { RiDragMoveFill, RiHotelBedLine } from "@remixicon/react"
import Card from "./Card"

const Features = () => {
  const features = [
    {
      title: "Departamento Amueblado",
      image: "/images/image-2.png",
      specifications: [
        {
          icon: <RiDragMoveFill />,
          text: "2800m²",
        },
        {
          icon: <RiHotelBedLine />,
          text: "3 beds",
        },
        {
          icon: <BathIcon />,
          text: "2 baths",
        },
      ],
      price: {
        original: "$18.000USD",
        discount: "$16.000USD",
      },
    },
    {
      title: "Departamento Amueblado",
      image: "/images/image-2.png",
      specifications: [
        {
          icon: <RiDragMoveFill />,
          text: "2800m²",
        },
        {
          icon: <RiHotelBedLine />,
          text: "3 beds",
        },
        {
          icon: <BathIcon />,
          text: "2 baths",
        },
      ],
      price: {
        original: "$18.000USD",
        discount: "$16.000USD",
      },
    },
    {
      title: "Departamento Amueblado",
      image: "/images/image-2.png",
      specifications: [
        {
          icon: <RiDragMoveFill />,
          text: "2800m²",
        },
        {
          icon: <RiHotelBedLine />,
          text: "3 beds",
        },
        {
          icon: <BathIcon />,
          text: "2 baths",
        },
      ],
      price: {
        original: "$18.000USD",
        discount: "$16.000USD",
      },
    },
  ]
  return (
    <section className="w-full h-max flex items-center justify-center">
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-10">
        <div className="w-full h-max flex items-center justify-center">
          <Title className="mb-8">Descubri nuestros nuevos lanzamientos</Title>
        </div>
        <main className="w-full h-max flex items-center justify-center">
          <ul className="grid grid-cols-3 place-content-center gap-16">
            {features.map((feature, idx) => (
              <Card key={idx} {...feature} />
            ))}
          </ul>
        </main>
      </div>
    </section>
  )
}

export default Features
