"use client"

import type { BatchProps } from "@/types/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { MapPin, Square, Bed, Bath } from "lucide-react"
import { Button } from "@/components/ui/button"

const SimilarProperties = ({
  recentProperties,
}: {
  recentProperties: BatchProps[]
}) => {
  const router = useRouter()

  if (!recentProperties || recentProperties.length === 0) {
    return null
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">
        <span className="text-primary_green">Otras </span>
        <span className="text-cta_red">propiedades</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentProperties.map((property) => (
          <div
            key={property.id}
            className="bg-cream border border-primary_green/10 rounded-md overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
            onClick={() => router.push(`/properties/${property.id}`)}
          >
            {/* Property Image */}
            <div className="relative h-48 w-full">
              <Image
                src={
                  property.public_url || "/placeholder.svg?height=400&width=600"
                }
                alt={property.address || "Property"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Property Details */}
            <div className="p-3 space-y-3">
              {/* Location */}
              <div className="flex items-center text-primary_green">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                <p className="text-sm truncate">
                  {property.location || "Plomer, Prov. BA"}
                </p>
              </div>

              {/* Property Specs */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-primary_green">
                  <Square className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.type || "2,800m²"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center text-primary_green">
                    <Bed className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.site || 3}</span>
                  </div>

                  <div className="flex items-center text-primary_green">
                    <Bath className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.price || 2}</span>
                  </div>
                </div>
              </div>

              {/* Price and Details Button */}
              <div className="flex items-center justify-between pt-2 border-t border-primary_green/10">
                <p className="font-bold text-primary_green">
                  ${property.price || "18.000"}us
                </p>

                <Button className="bg-transparent border border-primary_green text-primary_green hover:bg-primary_green hover:text-cream transition-colors duration-200 rounded-sm px-3 py-1 text-xs">
                  Más Detalles
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SimilarProperties
