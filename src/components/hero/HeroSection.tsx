"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    "/images/portada/1.png",
    "/images/portada/2.JPG",
    "/images/portada/3.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <main className="w-full min-h-screen relative overflow-hidden p-[10px]">
      {/* Main content container with rounded corners */}
      <div className="relative w-full h-[calc(100vh_-_25px)] rounded-3xl overflow-hidden">
        <div className="absolute inset-0 z-10">
          {images.map((src, index) => (
            <Image
              key={src}
              src={src || "/placeholder.svg"}
              alt={`Agricultural field ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
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

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImage ? "bg-cream w-8" : "bg-cream/40 hover:bg-cream/60"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default HeroSection
