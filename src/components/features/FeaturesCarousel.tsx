"use client"

import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { FeaturedProperty } from "@/lib/validations/FeaturedPropertySchema"

interface FeaturesCarouselProps {
  items: FeaturedProperty[]
}

const FeaturesCarousel = ({ items }: FeaturesCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return
    setActiveIndex(api.selectedScrollSnap())
    const onSelect = () => setActiveIndex(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  const goToSlide = (index: number) => {
    if (!api) return
    api.scrollTo(index)
  }

  return (
    <Carousel
      className="w-full"
      setApi={setApi}
      opts={{
        loop: true,
        align: "start",
      }}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id} className="md:basis-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cream/80 text-sm md:text-base mb-6 line-clamp-[8]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-2 text-cream/90">
                      <MapPin size={18} className="text-cream/70" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cream/90">
                      <Navigation size={18} className="text-cream/70" />
                      <span>{item.site}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-cream">
                        {item.price_discount}
                      </span>
                      {item.is_in_offer && item.price_original && (
                        <span className="text-cream/70 line-through text-sm">
                          {item.price_original}
                        </span>
                      )}
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="border border-cream text-cream hover:bg-cream/10 bg-transparent hover:bg-primary_green hover:text-cream/80"
                    >
                      <Link href={item.link}>Más Detalles</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden h-[300px] md:h-[400px]">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {item.is_in_offer && (
                  <div className="absolute bottom-0 right-0 bg-cta_red text-cream px-4 py-2 font-medium">
                    ¡Nuevo Precio!
                  </div>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex items-center justify-between mt-8">
        <CarouselPrevious className="relative inset-0 translate-y-0 bg-transparent border-cream text-cream hover:bg-cream/10 hover:text-cream" />

        <div className="flex gap-2">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => goToSlide(idx)}
              className={`w-2 h-2 rounded-full ${
                activeIndex === idx ? "bg-cream" : "bg-cream/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <CarouselNext className="relative inset-0 translate-y-0 bg-transparent border-cream text-cream hover:bg-cream/10 hover:text-cream" />
      </div>
    </Carousel>
  )
}

export default FeaturesCarousel
