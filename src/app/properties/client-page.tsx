"use client"

import type { BatchProps } from "@/types/types"
import PropertyGrid from "@/components/properties/Properties"
import PropertiesFilter from "./PropertiesFilter"
import { Suspense, useContext, useEffect, useState } from "react"
import Loader from "@/components/loader/Loader"
import { Button } from "@/components/ui/button"
import { FilterContext } from "@/context/FilterContext"
import {
  parsePropertyPriceValue,
  PROPERTY_LOCALITY_LABELS,
} from "@/lib/utils"

interface PropertiesPageProps {
  properties: BatchProps[]
}

export function PropertiesPage({ properties }: PropertiesPageProps) {
  const [open, setOpen] = useState(false)
  const [limit, setLimit] = useState(9)
  const [filteredProperties, setFilteredProperties] =
    useState<BatchProps[]>(properties)

  const { filter } = useContext(FilterContext)

  useEffect(() => {
    let filtered = properties

    if (filter.location !== "todos") {
      filtered = filtered.filter((p) => p.locality === filter.location)
    }

    if (filter.type !== "todos") {
      filtered = filtered.filter((p) => p.type === filter.type)
    }

    if (filter.operation !== "todos") {
      if (filter.operation === "venta") {
        filtered = filtered.filter((p) => p.onsale === true)
      } else if (filter.operation === "alquiler") {
        filtered = filtered.filter((p) => p.onsale === false)
      }
    }

    if (filter.price !== "todos") {
      filtered = filtered.filter((property) => {
        const priceValue = parsePropertyPriceValue(property.price)

        if (priceValue === null) {
          return true
        }

        if (filter.price.includes("-")) {
          const [min, max] = filter.price.split("-").map(Number)
          return priceValue >= min && priceValue <= max
        }

        if (filter.price.includes("+")) {
          const min = Number(filter.price.replace("+", ""))
          return priceValue >= min
        }

        return true
      })
    }

    if (filter.sortBy !== "default") {
      filtered = [...filtered].sort((a, b) => {
        switch (filter.sortBy) {
          case "price_asc": {
            const priceA =
              parsePropertyPriceValue(a.price) ?? Number.POSITIVE_INFINITY
            const priceB =
              parsePropertyPriceValue(b.price) ?? Number.POSITIVE_INFINITY
            return priceA - priceB
          }

          case "price_desc": {
            const priceA =
              parsePropertyPriceValue(a.price) ?? Number.NEGATIVE_INFINITY
            const priceB =
              parsePropertyPriceValue(b.price) ?? Number.NEGATIVE_INFINITY
            return priceB - priceA
          }

          case "name_asc":
            return (a.name || "").localeCompare(b.name || "")

          case "name_desc":
            return (b.name || "").localeCompare(a.name || "")

          case "type_asc":
            return (a.type || "").localeCompare(b.type || "")

          case "locality_asc": {
            const nameA = PROPERTY_LOCALITY_LABELS[a.locality] || a.locality || ""
            const nameB = PROPERTY_LOCALITY_LABELS[b.locality] || b.locality || ""
            return nameA.localeCompare(nameB)
          }

          default:
            return 0
        }
      })
    }

    setFilteredProperties(filtered)
    setLimit(9)
  }, [filter, properties])

  return (
    <section className="w-full min-h-screen py-32">
      <div className="container mx-auto px-4 md:px-6 pt-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-primary_green">Inmuebles en </span>
          <span className="text-cta_red">venta</span>
        </h1>

        <div className="flex flex-col md:flex-row">
          <Button
            onClick={() => setOpen(true)}
            className="md:hidden mb-4 bg-primary_green hover:bg-primary_green/90 text-cream"
          >
            Filtros
          </Button>

          <PropertiesFilter open={open} setOpen={setOpen} />

          <div className="flex-1">
            <Suspense fallback={<Loader />}>
              <PropertyGrid
                properties={filteredProperties}
                setLimit={setLimit}
                limit={limit}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
