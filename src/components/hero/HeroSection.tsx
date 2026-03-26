"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const HeroSection = () => {
  return (
    <main className="w-full min-h-screen relative overflow-hidden p-[10px]">
      {/* Main content container with rounded corners */}
      <div className="relative w-full h-[calc(100vh_-_25px)] rounded-3xl overflow-hidden">
        <div className="absolute inset-0 z-10">
          <Image
            src="/images/portada/2.JPG"
            alt="Cejas Propiedades portada"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Subtle overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/10 z-20"></div>

        {/* Content - aligned to top */}
        <div className="relative z-30 h-full w-full flex flex-col p-8 md:p-12 lg:p-16 pt-24 md:pt-32">
          <div className="flex flex-col items-start max-w-3xl h-full justify-end">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-1 text-cream">Encontrá tu sueño en</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide mb-8 text-cream">
              CEJAS PROPIEDADES
            </h1>
          </div>

          {/* CTA Button - positioned at bottom right */}
          <div className="flex justify-end mt-auto mb-8">
            <Button
              asChild
              variant="outline"
              className="bg-cream hover:bg-cream/90 text-cta_red border-none rounded-md px-6 py-2 text-base font-medium transition-all duration-300"
            >
              <Link href="#desarrollos">Ver Desarrollos</Link>
            </Button>
          </div>
        </div>

      </div>
    </main>
  )
}

export default HeroSection
