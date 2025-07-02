"use client"

import type { BatchProps } from "@/types/types"
import PropertyGrid from "@/components/properties/Properties"
import { createClient } from "@/lib/supabase/client"
import PropertiesFilter from "./PropertiesFilter"
import { Suspense, useContext, useEffect, useState } from "react"
import Loader from "@/components/loader/Loader"
import { Button } from "@/components/ui/button"
import { FilterContext } from "@/context/FilterContext"

export default function Properties() {
  const supabase = createClient()
  const [open, setOpen] = useState(false)
  const [limit, setLimit] = useState(9)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    const { data: properties } = (await supabase
      .from("properties")
      .select()
      .limit(limit)) as {
      data: BatchProps[]
    }
    setLoading(false)
    return properties
  }

  const [properties, setProperties] = useState<BatchProps[]>([])
  const [filteredProperties, setFilteredProperties] = useState<BatchProps[]>([])

  useEffect(() => {
    fetchData().then((data) => setProperties(data || []))
  }, [limit])

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
      filtered = filtered.filter((p) =>
        p.onsale ? "venta" : "alquiler" === filter.operation
      )
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
        <h1 className="text-3xl md:text-5xl font-normal mb-8">
          <span className="text-primary_green">Inmuebles en </span>
          <span className="text-cta_red">venta</span>
        </h1>

        <div className="flex flex-col md:flex-row">
          {/* Filter Button (Mobile Only) */}
          <Button
            onClick={() => setOpen(true)}
            className="md:hidden bg-primary_green text-cream mb-4"
          >
            Filtro de búsqueda
          </Button>

          {/* Filter Sidebar */}
          <Suspense
            fallback={
              <div className="w-full md:w-1/4 h-12 bg-cream/50 animate-pulse rounded-md"></div>
            }
          >
            <PropertiesFilter setOpen={setOpen} open={open} />
          </Suspense>

          {/* Property Grid */}
          <div className="w-full md:w-3/4 border-l border-primary_green/20 pl-6">
            <Suspense fallback={<Loader />}>
              {loading ? (
                <Loader />
              ) : (
                <PropertyGrid
                  properties={filteredProperties}
                  setLimit={setLimit}
                  limit={limit}
                />
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
