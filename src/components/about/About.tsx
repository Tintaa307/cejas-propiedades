"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <section id="sobre-nosotros" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary_green">¿Quiénes </span>
              <span className="text-cta_red">somos</span>
              <span className="text-primary_green">?</span>
            </h2>

            <div className="text-primary_green space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                Somos una inmobiliaria rural dedicada a la venta de campos y
                desarrollos urbanos en áreas rurales y nos enorgullece ofrecer
                un servicio personalizado que combina experiencia en el mercado
                inmobiliario con un profundo amor por la belleza de la vida
                rural.
              </p>

              <p>
                Nuestro objetivo es ayudarlos a encontrar la propiedad perfecta
                que se adapte a sus necesidades y deseos. Con nosotros, no solo
                obtendrá una propiedad, sino una experiencia personalizada y un
                compromiso inquebrantable con la excelencia en el servicio al
                cliente.
              </p>

              <p>
                Cejas propiedades es una empresa familiar fundada hace mas de 40
                años en el corazón de San Justo. Luego de años de
                especializarnos en la venta de propiedades urbanas, hemos
                redirigido nuestra pasión hacia los encantos y oportunidades que
                ofrece la vida rural.
              </p>

              <p>
                Contamos con un equipo altamente calificado de profesionales,
                incluyendo agrimensores, abogados, escribanos y otros expertos,
                es por eso que te ofrecemos un negocio 100% transparente, de
                confianza y con seguridad. Ofrecemos servicios de tasación y
                estamos aquí para asesorarlo a vender su propiedad actual o
                encontrar la propiedad perfecta para vivir. Estamos aquí para
                guiarlo en cada paso del camino.
              </p>
            </div>

            <div>
              <Button
                asChild
                className="bg-cta_red hover:bg-cta_red/90 text-white rounded-md px-8 py-6 text-base font-medium"
              >
                <Link href="/sell">Quiero Vender Con Cejas</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[700px] rounded-3xl overflow-hidden">
            <Image
              src="/images/about-image.jpg"
              alt="Cejas Propiedades"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
