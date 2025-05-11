"use client"

import React, { useEffect } from "react"
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
}

const Slider = ({ imgs }: SliderProps) => {
  const [images, setImages] = React.useState<string[]>()

  useEffect(() => {
    setImages(imgs)
  }, [imgs])

  return (
    <Carousel className="relative w-[70%] md:w-[85%] sm:w-[95%] h-[500px]">
      <CarouselContent>
        {images &&
          images.map((img, index) => (
            <CarouselItem key={index}>
              <figure className="w-full flex items-center justify-center">
                <Image
                  src={img || "/placeholder.svg"}
                  alt="image-carrousel"
                  width={900}
                  height={900}
                  className="relative rounded-md object-cover border-2 border-primary_green/30"
                />
              </figure>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="bg-primary_green text-cream border-none hover:bg-primary_green/80 -left-4 md:-left-2" />
      <CarouselNext className="bg-primary_green text-cream border-none hover:bg-primary_green/80 -right-4 md:-right-2" />
    </Carousel>
  )
}

export default Slider
