import React from "react"
import Title from "../title/Title"
import { BathIcon } from "lucide-react"
import { RiDragMoveFill, RiHotelBedLine } from "@remixicon/react"
import Card from "./Card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Features = () => {
  const features = [
    {
      title: "Departamento Amueblado",
      image: "/images/image-1.png",
      specifications: [
        {
          icon: <RiDragMoveFill className="text-white/70" />,
          text: "2800m²",
        },
        {
          icon: <RiHotelBedLine className="text-white/70" />,
          text: "3 beds",
        },
        {
          icon: <BathIcon className="text-white/70" />,
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
      image: "/images/image-1.png",
      specifications: [
        {
          icon: <RiDragMoveFill className="text-white/70" />,
          text: "2800m²",
        },
        {
          icon: <RiHotelBedLine className="text-white/70" />,
          text: "3 beds",
        },
        {
          icon: <BathIcon className="text-white/70" />,
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
      image: "/images/image-1.png",
      specifications: [
        {
          icon: <RiDragMoveFill className="text-white/70" />,
          text: "2800m²",
        },
        {
          icon: <RiHotelBedLine className="text-white/70" />,
          text: "3 beds",
        },
        {
          icon: <BathIcon className="text-white/70" />,
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
    <section className="w-full h-max bg-[url('/images/work-example-1.png')] bg-no-repeat bg-cover">
      <div className="w-full h-max flex items-center justify-center flex-col bg-black bg-opacity-90">
        <Title className="mb-8 text-white">
          Descubri nuestros nuevos lanzamientos
        </Title>
        <div className="w-[90%] h-max flex items-center justify-center flex-col gap-10">
          <div className="w-full h-max flex items-center justify-center"></div>
          <Carousel className="w-full h-max flex flex-col items-center justify-center">
            <main className="w-full h-max flex items-center justify-center">
              <CarouselContent className="mb-24">
                {features.map((feature, idx) => (
                  <CarouselItem key={idx}>
                    <Card {...feature} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </main>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Features
