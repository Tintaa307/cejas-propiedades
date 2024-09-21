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
    <Carousel className="w-1/2 lg:w-[70%] h-max flex items-center justify-center">
      <CarouselContent>
        {images &&
          images.map((img, index) => (
            <CarouselItem key={index}>
              <figure className="w-full h-full flex items-center justify-center">
                <Image
                  src={img}
                  alt="image-carrousel"
                  width={900}
                  height={900}
                  className="relative rounded-md object-cover"
                />
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
