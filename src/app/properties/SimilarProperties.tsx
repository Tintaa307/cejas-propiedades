"use client"

import type { BatchProps } from "@/types/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { MapPin, Home, DollarSign, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatPropertyPrice, getPropertyLocalityLabel } from "@/lib/utils"

const SimilarProperties = ({
  recentProperties,
}: {
  recentProperties: BatchProps[]
}) => {
  const router = useRouter()

  if (!recentProperties || recentProperties.length === 0) {
    return null
  }

  const hasValidImage = (property: BatchProps) => {
    return (
      property.public_url &&
      property.public_url !== "/" &&
      property.public_url.trim() !== ""
    )
  }

  return (
    <div className="mb-12">
      <h2 className="text-4xl font-normal mb-6">
        <span className="text-primary_green">Propiedades </span>
        <span className="text-cta_red">Similares</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentProperties.map((property) => {
          const formattedPrice = formatPropertyPrice(
            property.price,
            property.onsale ? "USD" : property.currency,
            "ARS"
          )

          return (
            <div
              key={property.id}
              className="border border-primary_green/10 rounded-md overflow-hidden cursor-pointer shadow-md transition-shadow duration-300"
              onClick={() => router.push(`/properties/${property.id}`)}
            >
              <div className="relative h-48 w-full">
                {hasValidImage(property) ? (
                  <Image
                    src={property.public_url}
                    alt={property.address || "Property"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary_green/10 to-primary_green/5 flex flex-col items-center justify-center border-2 border-dashed border-primary_green/30">
                    <ImageIcon className="h-10 w-10 text-primary_green/50 mb-2" />
                    <p className="text-primary_green/70 text-sm font-medium text-center px-4 capitalize">
                      {property.type}
                    </p>
                    <p className="text-primary_green/50 text-xs text-center px-4 mt-1">
                      Sin imagen
                    </p>
                  </div>
                )}
              </div>

              <div className="p-3 space-y-3">
                <div className="flex items-center text-primary_green">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <p className="text-sm truncate">
                    {property.location || "Plomer, Prov. BA"}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-primary_green">
                    <Home className="h-4 w-4 mr-1" />
                    <span className="text-sm capitalize">
                      {property.type || "Casa"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center text-primary_green">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">
                        {getPropertyLocalityLabel(property.locality)}
                      </span>
                    </div>

                    <div className="flex items-center text-primary_green">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span className="text-sm">{formattedPrice}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-primary_green/10 gap-4">
                  <p className="font-bold text-primary_green">{formattedPrice}</p>

                  <Button className="bg-transparent border border-primary_green text-primary_green hover:bg-primary_green hover:text-cream transition-colors duration-200 rounded-sm px-3 py-1 text-xs">
                    Más Detalles
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SimilarProperties
