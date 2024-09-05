"use client"

import React, { useContext, useEffect, useState } from "react"
import Title from "../title/Title"
import Button from "../button/Button"
import { BatchProps } from "@/types/types"
import Item from "./Item"
import { FilterContext } from "@/context/FilterContext"
import { useScroll } from "framer-motion"
import { useSearchParams } from "next/navigation"

type ItemProps = {
  data: BatchProps[]
}

const Property = ({ data }: ItemProps) => {
  const [filteredData, setFilteredData] = useState<
    {
      id: string
      description: string
      address: string
      site: string
      price: string
      location: string
      onsale: boolean
      type: string
      public_url: string
      locality: string
    }[]
  >(data)
  const { scrollY } = useScroll()
  const [images, setImages] = useState<any>([])

  const searchParams = useSearchParams()

  const { filter } = useContext(FilterContext)

  useEffect(() => {
    const applyFilters = () => {
      let filtered = data

      if (searchParams.get("filter")) {
        const filter = searchParams.get("filter")
        console.log(filter)
        filtered = data.filter((property) => property.type === filter)
      }

      // Filtrar por ubicación
      if (filter.location !== "todos") {
        filtered = filtered.filter(
          (property) => property.location === filter.location
        )
      }

      // Filtrar por tipo
      if (filter.type !== "todos") {
        filtered = filtered.filter((property) => property.type === filter.type)
      }

      // Filtrar por precio
      if (filter.price !== "todos" && filter.price.includes("-")) {
        const [min, max] = filter.price.split("-")
        filtered = filtered.filter((property) => {
          const price = parseInt(property.price.replace(/\D/g, ""))
          return price >= parseInt(min) && price <= parseInt(max)
        })
      }

      // Filtrar por operación
      if (filter.operation !== "todos") {
        if (filter.operation === "venta") {
          filtered = filtered.filter((property) => property.onsale === true)
        } else {
          filtered = filtered.filter((property) => property.onsale !== true)
        }
      }

      // Ordenar por precio
      if (filter.price === "asc") {
        filtered = filtered.sort(
          (a, b) => parseInt(b.price) - parseInt(a.price)
        )
      } else if (filter.price === "desc") {
        filtered = filtered.sort(
          (a, b) => parseInt(a.price) - parseInt(b.price)
        )
      }

      return filtered
    }

    const filteredData = applyFilters()
    setFilteredData(filteredData)
  }, [filter, data])

  useEffect(() => {
    if (scrollY.get() > 0) {
      window.scrollTo(0, 0)
    }
  }, [filteredData, filter])

  return (
    <section className="w-full h-max flex items-center justify-center">
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-12">
        <div className="w-full h-max flex items-center justify-center">
          <Title>Inmuebles en Venta</Title>
        </div>
        <main className="w-full h-max flex items-center justify-center">
          {filteredData.length !== 0 ? (
            <ul className="grid grid-cols-3 place-content-center gap-16 5xl:grid-cols-2 xl:5xl:grid-cols-1">
              {filteredData.map((property, index) => (
                <Item key={index} index={index} property={property} />
              ))}
            </ul>
          ) : (
            <div className="w-full h-[50vh] flex items-center justify-center">
              <p className="text-black text-xl font-normal">
                No se encontraron propiedades con las características
                seleccionadas.
              </p>
            </div>
          )}
        </main>
        <div className="w-full h-max flex items-center justify-center">
          <Button className="px-7 py-3 text-lg mb-2 hover:bg-opacity-90 bg-black text-white">
            Ver Más
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Property
