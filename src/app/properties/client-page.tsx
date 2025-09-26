"use client"

import type { BatchProps } from "@/types/types"
import PropertyGrid from "@/components/properties/Properties"
import PropertiesFilter from "./PropertiesFilter"
import { Suspense, useContext, useEffect, useState } from "react"
import Loader from "@/components/loader/Loader"
import { Button } from "@/components/ui/button"
import { FilterContext } from "@/context/FilterContext"

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
      filtered = filtered.filter((p) => p.location === filter.location)
    }
    if (filter.type !== "todos") {
      filtered = filtered.filter((p) => p.type === filter.type)
    }
    if (filter.operation !== "todos") {
      filtered = filtered.filter((p) => p.site === filter.operation)
    }
    if (filter.price !== "todos") {
      // Suponiendo que el campo price es string, y filter.price es un rango tipo "4000-6000"
      if (filter.price.includes("-")) {
        const [min, max] = filter.price.split("-").map(Number)
        filtered = filtered.filter((p) => {
          const priceNum = Number(p.price.replace(/[^\d]/g, ""))
          return priceNum >= min && priceNum <= max
        })
      } else if (filter.price.includes("+")) {
        const min = Number(filter.price.replace("+", ""))
        filtered = filtered.filter((p) => {
          const priceNum = Number(p.price.replace(/[^\d]/g, ""))
          return priceNum >= min
        })
      }
    }
    setFilteredProperties(filtered)
  }, [filter, properties])

  return (
    <section className="w-full min-h-screen py-32">
      <div className="container mx-auto px-4 md:px-6 pt-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-primary_green">Inmuebles en </span>
          <span className="text-cta_red">venta</span>
        </h1>

        <div className="flex flex-col md:flex-row">
          {/* Filter Button (Mobile Only) */}
          <Button
            onClick={() => setOpen(true)}
            className="md:hidden mb-4 bg-primary_green hover:bg-primary_green/90 text-cream"
          >
            Filtros
          </Button>

          {/* Filter Sidebar */}
          <PropertiesFilter open={open} setOpen={setOpen} />

          {/* Properties Grid */}
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
