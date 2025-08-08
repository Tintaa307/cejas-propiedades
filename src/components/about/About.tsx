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
            <h2 className="text-4xl md:text-5xl font-normal">
              <span className="text-primary_green">¿Quiénes </span>
              <span className="text-cta_red">somos</span>
              <span className="text-primary_green">?</span>
            </h2>

            <div className="text-primary_green space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                En Cejas Propiedades creemos que cada persona merece un
                acompañamiento profesional, cercano y transparente a la hora de
                tomar decisiones importantes. Somos una inmobiliaria familiar
                con más de 40 años de trayectoria. Nacimos en el corazón de San
                Justo y hoy continuamos creciendo desde Castelar, con la misma
                pasión y compromiso de siempre.
              </p>

              <p>
                Nos especializamos en la venta, tasación y asesoramiento de
                propiedades tanto urbanas como rurales. Trabajamos con un equipo
                de profesionales que garantizan operaciones seguras, confiables
                y a medida.
              </p>

              <p>
                Ya sea que estés buscando una inversión, tu primera vivienda o
                un cambio de estilo de vida, estamos para ayudarte a encontrar
                la propiedad que mejor se adapte a tus necesidades. En Cejas
                Propiedades combinamos experiencia, compromiso y cercanía para
                que cada operación sea una experiencia segura y positiva.
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
          <div className="relative h-[400px] md:h-[500px] lg:h-[700px] rounded-3xl overflow-hidden max-lg:hidden">
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
