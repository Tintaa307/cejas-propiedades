"use client"

import type { BatchProps } from "@/types/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Grid2X2, MapPin, Tag, Home, ImageIcon } from "lucide-react"
import { Button } from "../ui/button"
import { firstLetterUppercase } from "@/lib/utils"
import { useContext, useState, useEffect } from "react"
import { FilterContext } from "@/context/FilterContext"
import PropertySkeleton from "./PropertySkeleton"

interface PropertyGridProps {
  properties: BatchProps[]
  limit: number
  setLimit: (limit: number) => void
}

const PropertyGrid = ({ properties, limit, setLimit }: PropertyGridProps) => {
  const router = useRouter()
  const { setFilter } = useContext(FilterContext)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  // Reset loaded images when properties change
  useEffect(() => {
    setLoadedImages(new Set())
  }, [properties])

  const handleImageLoad = (propertyId: string) => {
    setLoadedImages((prev) => new Set(prev).add(propertyId))
  }

  const handleLoadMore = () => {
    setIsLoadingMore(true)
    // Simulate loading delay for better UX
    setTimeout(() => {
      setLimit(limit + 9)
      setIsLoadingMore(false)
    }, 500)
  }

  const hasValidImage = (property: BatchProps) => {
    return (
      property.public_url &&
      property.public_url !== "/" &&
      property.public_url.trim() !== ""
    )
  }

  const clearFilters = () => {
    setFilter({
      location: "todos",
      type: "todos",
      operation: "todos",
      price: "todos",
    })
  }

  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Home className="h-16 w-16 text-primary_green/50 mb-4" />
        <h3 className="text-lg font-medium text-primary_green mb-2">
          No se encontraron propiedades
        </h3>
        <p className="text-primary_green/70 mb-4">
          No hay propiedades disponibles con los filtros seleccionados.
        </p>
        <Button
          onClick={clearFilters}
          className="bg-primary_green text-cream hover:bg-primary_green/90"
        >
          Limpiar filtros
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.slice(0, limit).map((property) => (
          <div
            key={property.id}
            className="overflow-hidden flex flex-col h-[420px]"
          >
            {/* Property Image */}
            <div className="relative h-[240px] w-full">
              {hasValidImage(property) ? (
                <>
                  {!loadedImages.has(property.id) && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
                  )}
                  <Image
                    src={property.public_url}
                    alt={property.address || "Property"}
                    fill
                    className={`object-cover rounded-md transition-opacity duration-300 ${
                      loadedImages.has(property.id)
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoad={() => handleImageLoad(property.id)}
                    priority={properties.indexOf(property) < 6}
                  />
                </>
              ) : (
                /* Fallback for properties without image */
                <div className="absolute inset-0 bg-gradient-to-br from-primary_green/10 to-primary_green/5 rounded-md flex flex-col items-center justify-center border-2 border-dashed border-primary_green/30">
                  <ImageIcon className="h-12 w-12 text-primary_green/50 mb-2" />
                  <p className="text-primary_green/70 text-sm font-medium text-center px-4">
                    {firstLetterUppercase(property.type)}
                  </p>
                  <p className="text-primary_green/50 text-xs text-center px-4 mt-1">
                    Imagen no disponible
                  </p>
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="py-4 flex flex-col space-y-4">
              {/* Location */}
              <div className="flex items-center text-primary_green">
                {property.name}
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
                    <p className="text-sm truncate">
                      {property.locality === "canuelas" && "Cañuelas"}
                      {property.locality === "san_miguel_monte" &&
                        "San Miguel del Monte"}
                      {property.locality === "ituzaingo" && "Ituzaingó"}
                      {property.locality === "lujan" && "Luján"}
                      {property.locality === "flores" && "Flores"}
                      {property.locality === "marcos_paz" && "Marcos Paz"}
                      {property.locality === "navarro" && "Navarro"}
                      {property.locality === "las_heras" && "Las Heras"}
                      {property.locality === "las_flores" && "Las Flores"}
                      {property.locality === "castelar" && "Castelar"}
                    </p>
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
      {properties.length > limit && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="bg-primary_green text-cream hover:bg-primary_green/90 px-6 py-2 rounded-sm disabled:opacity-50"
          >
            {isLoadingMore ? "Cargando..." : "Ver Más"}
          </Button>
        </div>
      )}

      {/* Loading Skeletons for new properties */}
      {isLoadingMore && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <PropertySkeleton key={`skeleton-${index}`} />
          ))}
        </div>
      )}
    </div>
  )
}

export default PropertyGrid
