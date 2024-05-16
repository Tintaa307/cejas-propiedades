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
}

const Slider = ({ imgs }: SliderProps) => {
  return (
    <Carousel className="w-1/4 h-max flex items-center justify-center">
      <CarouselContent>
        {imgs.map((img, index) => (
          <CarouselItem key={index}>
            <figure className="w-full h-max flex items-center justify-center">
              <Image src={img} alt="image-carrousel" width={400} height={400} />
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Slider
