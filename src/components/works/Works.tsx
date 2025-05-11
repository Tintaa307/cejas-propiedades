"use client"

import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

const Works = () => {
  const works = [
    {
      title: "La Cañada",
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/canada-dron.JPG",
      link: "/canada",
      isSold: false,
    },
    {
      title: "Pueblo Chico",
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/pueblo-dron.JPG",
      link: "/pueblo",
      isSold: false,
    },
    {
      title: "Las Gardenias",
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/gardenias-dron.JPG",
      link: "/gardenias",
      isSold: false,
    },
    {
      title: "El Retiro",
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/retiro-dron.JPG",
      link: "/retiro",
      isSold: false,
    },
    {
      title: "La Comarca",
      src: "/images/dron-images/comarca-dron.jpg",
      link: "/comarca",
      isSold: true,
    },
    {
      title: "La Estación",
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/img-estacion.jpg",
      link: "/estacion",
      isSold: false,
    },
    {
      title: "Las Magnolias",
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/magnolias-dron.jpg",
      link: "/magnolias",
      isSold: false,
    },
    {
      title: "La Cañada II",
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/canada2-dron.JPG",
      link: "/canada2",
      isSold: false,
    },
  ]

  return (
    <section id="desarrollos" className="w-full py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-12 md:mb-16">
            <span className="text-primary_green">Conocé nuestros </span>
            <span className="text-cta_red">desarrollos</span>
          </h2>

          <div className="space-y-6 md:space-y-8">
            {works.map((work, index) => (
              <Link
                href={work.link}
                key={index}
                className="block group transition-all duration-300 hover:opacity-95"
              >
                <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden">
                  {work.isSold ? (
                    <div className="absolute inset-0 bg-primary_green/90 flex flex-col items-center justify-center text-cream space-y-1">
                      <div className="bg-cta_red rounded-full p-3">
                        <Check size={32} className="text-cream" />
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif">
                        {work.title}
                      </h3>
                      <p className="text-lg md:text-xl font-medium">VENDIDO</p>
                      <p className="text-sm mt-2 max-w-md text-center px-4">
                        Este desarrollo ya ha sido vendido. Consulte nuestras
                        otras opciones disponibles.
                      </p>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={work.src || "/placeholder.svg"}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                        priority={index < 2}
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                      {/* Title */}
                      <div className="absolute bottom-0 left-0 p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white">
                          {work.title}
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works
