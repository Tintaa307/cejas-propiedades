"use client"

import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react"
import Title from "../title/Title"
import Button from "../button/Button"
import { BatchProps } from "@/types/types"
import Item from "./Item"
import { FilterContext } from "@/context/FilterContext"
import { useScroll } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { ListFilter } from "lucide-react"
import { cn } from "@/lib/utils"

type ItemProps = {
  data: BatchProps[]
  setLimit: Dispatch<SetStateAction<number>>
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
}

const Property = ({ data, setLimit, setOpen, open }: ItemProps) => {
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
          (property) => property.locality === filter.location
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
  }, [filter])

  return (
    <section className="w-full h-max flex items-center justify-center">
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-12">
        <div className="w-full h-max flex items-center justify-center">
          <Title className="ms:flex ms:flex-row ms:gap-6 ms:justify-center ms:items-center sm:text-2xl">
            Inmuebles en Venta{" "}
            <div
              className={cn("w-max h-max hidden ms:flex", {
                "ms:hidden": open,
                "ms:flex": !open,
              })}
            >
              <ListFilter
                onClick={() => setOpen(!open)}
                className="text-black z-20 size-10 sm:size-6"
              />
            </div>
          </Title>
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
          <Button
            onClick={() => setLimit((prev) => prev + 6)}
            className="px-7 py-3 text-lg mb-2 hover:bg-opacity-90 bg-black text-white"
          >
            Ver Más
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Property
