"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import type { BatchProps } from "@/types/types"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import PropertyShare from "@/components/properties/PropertyShare"

interface PropertyDetailsProps {
  property: BatchProps
  images: any[]
}

const PropertyDetails = ({ property, images }: PropertyDetailsProps) => {
  const [mainImage, setMainImage] = useState(property.public_url)
  const [propertyImages, setPropertyImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (images.length > 0) {
      const folderPath = images[0].path.relativePath.split("/")[0]

      // Set main image
      const completeUrl = images[0].path.publicURL.data.publicUrl.replace(
        "images",
        `images/${folderPath}/`
      )
      setMainImage(completeUrl)

      // Set all property images
      const allImages = images.map((img: any) => {
        return img.path.publicURL.data.publicUrl.replace(
          "images",
          `images/${folderPath}/`
        )
      })

      setPropertyImages(
        [property.public_url, ...allImages].filter(
          (value, index, self) => self.indexOf(value) === index
        )
      )
    }
  }, [images, property.public_url])

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Property Info */}
        <div className="order-2 md:order-1">
          <h1 className="text-2xl md:text-5xl font-normal text-primary_green mb-8">
            {property.name}
          </h1>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-cta_red mr-2">
                ${property.price || "18.000"}
              </span>
              <span className="text-sm text-primary_green/70">USD</span>
            </div>
            <PropertyShare />
          </div>

          <div className="text-primary_green/80 mb-6">
            <p className="mb-4">
              {property.description || "Sobre el inmueble:"}
            </p>
          </div>

          {/* Property Details Table */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-primary_green mb-3">
              Detalles de la Propiedad
            </h3>
            <div className="grid grid-cols-2 gap-2 border border-primary_green/20 rounded-md overflow-hidden">
              <div className="bg-primary_green/10 p-3 border-b border-r border-primary_green/20">
                <span className="font-medium text-primary_green">Tipo</span>
              </div>
              <div className="bg-primary_green/5 p-3 border-b border-primary_green/20">
                <span className="text-primary_green capitalize">
                  {property.type || "Chacra"}
                </span>
              </div>

              <div className="bg-primary_green/10 p-3 border-b border-r border-primary_green/20">
                <span className="font-medium text-primary_green">
                  Localidad
                </span>
              </div>
              <div className="bg-primary_green/5 p-3 border-b border-primary_green/20">
                <span className="text-primary_green">
                  {property.locality === "canuelas" && "Cañuelas"}
                  {property.locality === "ituzaingo" && "Ituzaingó"}
                  {property.locality === "san_miguel_monte" &&
                    "San Miguel del Monte"}
                  {property.locality === "lujan" && "Luján"}
                  {property.locality === "flores" && "Las Flores"}
                  {property.locality === "marcos_paz" && "Marcos Paz"}
                  {property.locality === "navarro" && "Navarro"}
                  {property.locality === "las_heras" && "Las Heras"}
                  {property.locality === "las_flores" && "Las Flores"}
                  {property.locality === "castelar" && "Castelar"}
                  {property.locality === "lobos" && "Lobos"}
                </span>
              </div>

              <div className="bg-primary_green/10 p-3 border-b border-r border-primary_green/20">
                <span className="font-medium text-primary_green">Estado</span>
              </div>
              <div className="bg-primary_green/5 p-3 border-b border-primary_green/20">
                <span className="text-primary_green">
                  {property.onsale ? "En Venta" : "En Alquiler"}
                </span>
              </div>

              <div className="bg-primary_green/10 p-3 border-b border-r border-primary_green/20">
                <span className="font-medium text-primary_green">
                  Dirección
                </span>
              </div>
              <div className="bg-primary_green/5 p-3 border-b border-primary_green/20">
                <span className="text-primary_green">
                  {property.address || "No especificada"}
                </span>
              </div>

              <div className="bg-primary_green/10 p-3 border-b border-r border-primary_green/20">
                <span className="font-medium text-primary_green">
                  Ubicación
                </span>
              </div>
              <div className="bg-primary_green/5 p-3 border-b border-primary_green/20">
                <span className="text-primary_green">
                  {property.location || "No especificada"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Property Image */}
        <div className="order-1 md:order-2">
          <div className="relative rounded-md overflow-hidden">
            {isLoading && (
              <Skeleton className="w-full aspect-[4/3] rounded-md" />
            )}
            <Image
              src={mainImage || "/placeholder.svg?height=600&width=800"}
              alt={property.address || "Property"}
              width={800}
              height={600}
              className={cn("w-full aspect-[4/3] object-cover", {
                "opacity-0": isLoading,
              })}
              onLoad={handleImageLoad}
              priority
            />
          </div>

          {/* Thumbnail Images */}
          {propertyImages.length > 1 && (
            <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
              {propertyImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={cn(
                    "flex-shrink-0 rounded-md overflow-hidden border-2",
                    {
                      "border-primary_green": mainImage === img,
                      "border-transparent": mainImage !== img,
                    }
                  )}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Property view ${index + 1}`}
                    width={100}
                    height={75}
                    className="w-20 h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails
