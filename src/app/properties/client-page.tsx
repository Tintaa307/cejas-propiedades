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

    // Filtro por ubicación
    if (filter.location !== "todos") {
      filtered = filtered.filter((p) => p.locality === filter.location)
    }

    // Filtro por tipo
    if (filter.type !== "todos") {
      filtered = filtered.filter((p) => p.type === filter.type)
    }

    // Filtro por estado de operación
    if (filter.operation !== "todos") {
      if (filter.operation === "venta") {
        filtered = filtered.filter((p) => p.onsale === true)
      } else if (filter.operation === "alquiler") {
        filtered = filtered.filter((p) => p.onsale === false)
      }
    }

    // FILTRO POR PRECIO: Maneja diferentes formatos de precios
    // - Precios normales: "150000", "90.000"
    // - Precios por hectárea: "15000 x ha", "45000 por hectárea"
    // - Precios a consultar: "Consultar" (se incluyen en todos los rangos)
    if (filter.price !== "todos") {
      filtered = filtered.filter((p) => {
        // Función para extraer el precio numérico del string
        const extractPrice = (priceStr: string): number | null => {
          // Si es "consultar" o vacío, no se puede filtrar por rango
          if (!priceStr || priceStr.toLowerCase().includes("consultar")) {
            return null // Se incluyen en todos los rangos
          }

          // Buscar patrones de precio por hectárea
          const xHaMatch = priceStr.match(
            /(\d+(?:[.,]\d+)?)\s*(?:x\s*ha|por\s*hect[aá]rea)/i
          )
          if (xHaMatch) {
            const price = parseFloat(xHaMatch[1].replace(",", "."))
            return isNaN(price) ? null : price
          }

          // Extraer números de precios normales
          const cleanPrice = priceStr.replace(/[^\d.,]/g, "")
          if (!cleanPrice) return null

          const price = parseFloat(cleanPrice.replace(",", "."))
          return isNaN(price) ? null : price
        }

        const priceNum = extractPrice(p.price)

        // Si el precio es "consultar" o no se puede extraer, incluir en todos los rangos
        if (priceNum === null) {
          return true
        }

        if (filter.price.includes("-")) {
          const [min, max] = filter.price.split("-").map(Number)
          return priceNum >= min && priceNum <= max
        } else if (filter.price.includes("+")) {
          const min = Number(filter.price.replace("+", ""))
          return priceNum >= min
        }
        return true
      })
    }

    // ORDENAMIENTO: Aplicar ordenamiento según la opción seleccionada
    if (filter.sortBy !== "default") {
      filtered = [...filtered].sort((a, b) => {
        switch (filter.sortBy) {
          case "price_asc":
            // Ordenar por precio ascendente (menor a mayor)
            const extractPrice = (priceStr: string): number => {
              if (!priceStr || priceStr.toLowerCase().includes("consultar")) {
                return Infinity // Los precios a consultar van al final
              }
              const xHaMatch = priceStr.match(
                /(\d+(?:[.,]\d+)?)\s*(?:x\s*ha|por\s*hect[aá]rea)/i
              )
              if (xHaMatch) {
                const price = parseFloat(xHaMatch[1].replace(",", "."))
                return isNaN(price) ? Infinity : price
              }
              const cleanPrice = priceStr.replace(/[^\d.,]/g, "")
              if (!cleanPrice) return Infinity
              const price = parseFloat(cleanPrice.replace(",", "."))
              return isNaN(price) ? Infinity : price
            }
            return extractPrice(a.price) - extractPrice(b.price)

          case "price_desc":
            // Ordenar por precio descendente (mayor a menor)
            const extractPriceDesc = (priceStr: string): number => {
              if (!priceStr || priceStr.toLowerCase().includes("consultar")) {
                return -Infinity // Los precios a consultar van al final
              }
              const xHaMatch = priceStr.match(
                /(\d+(?:[.,]\d+)?)\s*(?:x\s*ha|por\s*hect[aá]rea)/i
              )
              if (xHaMatch) {
                const price = parseFloat(xHaMatch[1].replace(",", "."))
                return isNaN(price) ? -Infinity : price
              }
              const cleanPrice = priceStr.replace(/[^\d.,]/g, "")
              if (!cleanPrice) return -Infinity
              const price = parseFloat(cleanPrice.replace(",", "."))
              return isNaN(price) ? -Infinity : price
            }
            return extractPriceDesc(b.price) - extractPriceDesc(a.price)

          case "name_asc":
            // Ordenar por nombre A-Z
            return (a.name || "").localeCompare(b.name || "")

          case "name_desc":
            // Ordenar por nombre Z-A
            return (b.name || "").localeCompare(a.name || "")

          case "type_asc":
            // Ordenar por tipo A-Z
            return (a.type || "").localeCompare(b.type || "")

          case "locality_asc":
            // Ordenar por localidad A-Z
            const localityNames: Record<string, string> = {
              canuelas: "Cañuelas",
              san_miguel_monte: "San Miguel del Monte",
              ituzaingo: "Ituzaingó",
              las_heras: "Las Heras",
              las_flores: "Las Flores",
              castelar: "Castelar",
              lobos: "Lobos",
              lujan: "Luján",
              flores: "Flores",
              marcos_paz: "Marcos Paz",
              navarro: "Navarro",
            }
            const nameA = localityNames[a.locality] || a.locality || ""
            const nameB = localityNames[b.locality] || b.locality || ""
            return nameA.localeCompare(nameB)

          default:
            return 0
        }
      })
    }

    setFilteredProperties(filtered)
    // Reset limit when filters change
    setLimit(9)
  }, [filter, properties, setLimit])

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
