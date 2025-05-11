"use client"

import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const features = [
    {
      title: "La Estacion",
      image: "/images/desarrollos/work-estacion.svg",
      description:
        "Se encuentra ubicado en el barrio de Peluffo en la Ruta 3 km 55. A 600 mts de la colectora de la Ruta 3 altura del km 55, frente a la calle Güemes, esquina San Martin (80mts). A 10 km del centro de Cañuelas. Tiene acceso por autopista Ezeiza/Cañuelas y Ruta 6 y Ruta 3.",
      price: {
        original: "18.000 USD",
        discount: "16.000 USD",
      },
      isInOffer: true,
      location: "Ruta 3 Km 71,600",
      site: "Cañuelas",
      link: "/estacion",
    },
    {
      title: "Las Magnolias",
      image: "/images/desarrollos/work-magnolias.jpg",
      description:
        "El predio se encuentra ubicado en el Partido y Localidad de Cañuelas. Ingreso por Ricardo Rojas, entre Dorrego y Raggio. Ubicado a 1.500 mts del centro de Cañuelas (Acceso directo al centro por Dorrego), a 2.000 mts de la Ruta 205 (Excelente acceso a la ruta).",
      price: {
        original: "16.000 USD",
        discount: "14.500 USD",
      },
      isInOffer: true,
      location: "Ruta 3 Km 71,600",
      site: "Cañuelas",
      link: "/magnoilias",
    },
    {
      // de 3, has
      title: "Chacra en Cañuelas",
      image:
        "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/Chacra_35_Has_Santa_Rosa/1.jpg",
      description:
        "El predio se encuentra ubicado en el Partido y Localidad de Cañuelas. Ingreso por Ricardo Rojas, entre Dorrego y Raggio. Ubicado a 1.500 mts del centro de Cañuelas (Acceso directo al centro por Dorrego), a 2.000 mts de la Ruta 205 (Excelente acceso a la ruta).",
      price: {
        original: "140.000 USD",
        discount: "120.000 USD",
      },
      isInOffer: true,
      location: "Ruta 3 Km 71,600",
      site: "Cañuelas",
      link: "/properties/2009",
    },
    {
      // 18 has en
      title: "San Miguel del monte",
      image: "/images/image-1.png",
      description:
        "El predio se encuentra ubicado en el Partido y Localidad de Cañuelas. Ingreso por Ricardo Rojas, entre Dorrego y Raggio. Ubicado a 1.500 mts del centro de Cañuelas (Acceso directo al centro por Dorrego), a 2.000 mts de la Ruta 205 (Excelente acceso a la ruta).",
      price: {
        original: "210.000 USD",
        discount: "200.000 USD",
      },
      isInOffer: true,
      location: "Ruta 3 Km 71,600",
      site: "Cañuelas",
      link: "#",
    },
  ]

  const handleSlideChange = (api: any) => {
    if (!api) return
    setActiveIndex(api.selectedScrollSnap())
  }

  return (
    <section id="ingresos" className="w-full bg-cream py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="bg-primary_green rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-12">
                Descubrí nuestros{" "}
                <span className="font-serif italic">nuevos ingresos</span>
              </h2>

              <Carousel
                className="w-full"
                onSelect={(index) => handleSlideChange(index)}
                opts={{
                  loop: true,
                  align: "start",
                }}
              >
                <CarouselContent>
                  {features.map((feature, idx) => (
                    <CarouselItem key={idx} className="md:basis-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* Left side - Property info */}
                        <div className="flex flex-col justify-between h-full">
                          <div>
                            <h3 className="text-xl md:text-2xl font-medium text-cream mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-cream/80 text-sm md:text-base mb-6 line-clamp-[8]">
                              {feature.description}
                            </p>
                          </div>

                          <div className="mt-4">
                            <div className="flex flex-col gap-3 mb-6">
                              <div className="flex items-center gap-2 text-cream/90">
                                <MapPin size={18} className="text-cream/70" />
                                <span>{feature.location}</span>
                              </div>
                              <div className="flex items-center gap-2 text-cream/90">
                                <Navigation
                                  size={18}
                                  className="text-cream/70"
                                />
                                <span>{feature.site}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                              <div className="flex flex-col">
                                <span className="text-2xl font-bold text-cream">
                                  ${feature.price.discount}
                                </span>
                                {feature.isInOffer && (
                                  <span className="text-cream/70 line-through text-sm">
                                    ${feature.price.original}
                                  </span>
                                )}
                              </div>
                              <Button
                                asChild
                                size="lg"
                                className="border border-cream text-cream hover:bg-cream/10 bg-transparent hover:bg-primary_green hover:text-cream/80"
                              >
                                <Link href={feature.link}>Más Detalles</Link>
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Right side - Property image */}
                        <div className="relative rounded-lg overflow-hidden h-[300px] md:h-[400px]">
                          <Image
                            src={feature.image || "/placeholder.svg"}
                            alt={feature.title}
                            fill
                            className="object-cover"
                          />
                          {feature.isInOffer && (
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
                    {features.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSlideChange(idx)}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
