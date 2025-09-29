"use client"
import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

type SliderProps = {
  imgs: string[]
  aspectClassName?: string
  maxWidthClassName?: string
}

const Slider = ({
  imgs,
  aspectClassName = "aspect-[16/9]",
  maxWidthClassName = "max-w-5xl",
}: SliderProps) => {
  if (!imgs?.length) return null

  return (
    <Carousel
      className={`relative w-full ${maxWidthClassName} mx-auto px-2 sm:px-4`}
    >
      <CarouselContent>
        {imgs.map((src, index) => (
          <CarouselItem key={`${src}-${index}`} className="p-2">
            <figure className="w-full">
              {/* Contenedor con tamaño estable y recorte prolijo */}
              <div
                className={`relative w-full ${aspectClassName} overflow-hidden rounded-lg border border-primary_green/30 bg-white`}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`slide-${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, 900px"
                  priority={index === 0}
                />
              </div>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
  aria-label="Anterior"
  className="bg-primary_green text-cream border-none hover:bg-primary_green/80
             left-[-2.75rem] sm:left-[-3.25rem] md:left-[-3.75rem] lg:left-[-4.5rem]
             h-10 w-10 rounded-full shadow-md hidden lg:block"
/>

<CarouselNext
  aria-label="Siguiente"
  className="bg-primary_green text-cream border-none hover:bg-primary_green/80
             right-[-2.75rem] sm:right-[-3.25rem] md:right-[-3.75rem] lg:right-[-4.5rem]
             h-10 w-10 rounded-full shadow-md hidden lg:block"
/>
    </Carousel>
  )
}

export default Slider
