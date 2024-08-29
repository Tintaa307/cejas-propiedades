import React from "react"
import Title from "../title/Title"
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
    },
    {
      title: "Las Magnolias",
      image: "/images/desarrollos/work-magnolias.jpg",
      description:
        "El predio se encuentra ubicado en el Partido y Localidad de Cañuelas. Ingreso por Ricardo Rojas, entre Dorrego y Raggio. Ubicado a 1.500 mts del centro de Cañuelas (Acceso directo al centro por Dorrego), a 2.000 mts de la Ruta 205 (Excelente acceso a la ruta).",
      price: {
        original: "18.000 USD",
        discount: "16.000 USD",
      },
      isInOffer: true,
      location: "Ruta 3 Km 71,600",
      site: "Cañuelas",
    },
    {
      title: "Chacra de 3, has en Cañuelas",
      image:
        "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/Chacra_35_Has_Santa_Rosa/1.jpg",
      description:
        "El predio se encuentra ubicado en el Partido y Localidad de Cañuelas. Ingreso por Ricardo Rojas, entre Dorrego y Raggio. Ubicado a 1.500 mts del centro de Cañuelas (Acceso directo al centro por Dorrego), a 2.000 mts de la Ruta 205 (Excelente acceso a la ruta).",
      price: {
        original: "18.000 USD",
        discount: "16.000 USD",
      },
      isInOffer: true,
      location: "Ruta 3 Km 71,600",
      site: "Cañuelas",
    },
    {
      title: "18 has en san Miguel del monte",
      image: "/images/image-1.png",
      description:
        "El predio se encuentra ubicado en el Partido y Localidad de Cañuelas. Ingreso por Ricardo Rojas, entre Dorrego y Raggio. Ubicado a 1.500 mts del centro de Cañuelas (Acceso directo al centro por Dorrego), a 2.000 mts de la Ruta 205 (Excelente acceso a la ruta).",
      price: {
        original: "18.000 USD",
        discount: "16.000 USD",
      },
      isInOffer: true,
      location: "Ruta 3 Km 71,600",
      site: "Cañuelas",
    },
  ]

  return (
    <section
      id="ingresos"
      className="w-full h-max bg-[url('/images/work-example-1.png')] bg-no-repeat bg-cover"
    >
      <div className="w-full h-max flex items-center justify-center flex-col bg-black bg-opacity-90">
        <Title className="mb-8 text-white">Nuevos ingresos</Title>
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
