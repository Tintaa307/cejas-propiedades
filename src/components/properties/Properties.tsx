"use client"

import type { BatchProps } from "@/types/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Grid2X2, MapPin, Tag } from "lucide-react"
import { Button } from "../ui/button"
import { firstLetterUppercase } from "@/lib/utils"

interface PropertyGridProps {
  properties: BatchProps[]
  limit: number
  setLimit: (limit: number) => void
}

const PropertyGrid = ({ properties, limit, setLimit }: PropertyGridProps) => {
  const router = useRouter()

  return (
    <div className="space-y-8">
      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-cream overflow-hidden flex flex-col h-[420px]"
          >
            {/* Property Image */}
            <div className="relative h-[240px] w-full">
              <Image
                src={
                  property.public_url || "/placeholder.svg?height=400&width=600"
                }
                alt={property.address || "Property"}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                loading="eager"
              />
            </div>

            {/* Property Details */}
            <div className="py-4 flex flex-col space-y-4">
              {/* Location */}
              <div className="flex items-center text-primary_green">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                <p className="text-sm truncate">
                  {property.locality === "canuelas" && "Cañuelas"}
                  {property.locality === "san_miguel_monte" &&
                    "San Miguel del Monte"}
                  {property.locality === "ituzaingo" && "Ituzaingó"}
                  {property.locality === "lujan" && "Luján"}
                  {property.locality === "flores" && "Flores"}
                  {property.locality === "marcos_paz" && "Marcos Paz"}
                  {property.locality === "navarro" && "Navarro"}
                </p>
              </div>

              {/* Property Specs */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-primary_green">
                  <Grid2X2 className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="text-sm">
                    {firstLetterUppercase(property.type)}
                  </span>
                </div>

                <div className="flex items-center text-primary_green">
                  <Tag className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="text-sm">
                    {property.onsale ? "En Venta" : "En Alquiler"}
                  </span>
                </div>

                <div className="flex items-center text-primary_green">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="text-sm">
                    {property.address.slice(0, 14) + "..."}
                  </span>
                </div>
              </div>

              {/* Price and Details Button */}
              <div className="flex items-center justify-between mt-auto">
                <p className="font-bold text-primary_green">
                  ${property.price} usd
                </p>

                <Button
                  onClick={() => router.push(`/properties/${property.id}`)}
                  className="bg-transparent border border-primary_green text-primary_green hover:bg-primary_green hover:text-cream transition-colors duration-200 rounded-sm px-4 py-1 text-sm"
                >
                  Más Detalles
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {properties.length >= limit && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => setLimit(limit + 9)}
            className="bg-primary_green text-cream hover:bg-primary_green/90 px-6 py-2 rounded-sm"
          >
            Ver Más
          </Button>
        </div>
      )}
    </div>
  )
}

export default PropertyGrid
