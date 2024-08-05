"use client"

import React, { useContext, useEffect, useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FilterContext } from "@/context/FilterContext"
import { IconEdit, IconSend2, IconArrowBackUp } from "@tabler/icons-react"
import { toast, Toaster } from "sonner"

const PropertiesFilter = () => {
  const filterOpts = [
    {
      label: "Ubicación",
      filterName: "location",
      options: [
        { name: "Todos", value: "todos" },
        { name: "Cañuelas", value: "canuelas" },
        { name: "San Vicente", value: "san-vicente" },
        { name: "Ezeiza", value: "ezeiza" },
        { name: "Monte Grande", value: "monte-grande" },
      ],
    },
    {
      label: "Tipo",
      filterName: "type",
      options: [
        {
          name: "Todos",
          value: "todos",
        },
        {
          name: "Casa",
          value: "casa",
        },
        {
          name: "Quinta",
          value: "quinta",
        },
        {
          name: "Departamento",
          value: "departamento",
        },
        {
          name: "Terreno",
          value: "terreno",
        },
      ],
    },
    {
      label: "Superficie",
      filterName: "size",
      options: [
        {
          name: "Todos",
          value: "todos",
        },
        {
          name: "Menor a 100m2",
          value: "menor-a-100m2",
        },
        {
          name: "100m2-200m2",
          value: "100m2-200m2",
        },
        {
          name: "200m2-300m2",
          value: "200m2-300m2",
        },
      ],
    },
    {
      label: "Tipo de operación",
      filterName: "operation",
      options: [
        {
          name: "Todos",
          value: "todos",
        },
        {
          name: "Alquiler",
          value: "alquiler",
        },
        {
          name: "Venta",
          value: "venta",
        },
      ],
    },
    {
      label: "Precio",
      filterName: "price",
      options: [
        {
          name: "Todos",
          value: "todos",
        },
        {
          name: "Menor",
          value: "asc",
        },
        {
          name: "Mayor",
          value: "desc",
        },
      ],
    },
  ]
  const [range, setRange] = useState({
    min: "0",
    max: "0",
  })
  const [customPrice, setCustomPrice] = useState(false)

  const { setFilter } = useContext(FilterContext)

  useEffect(() => {
    !customPrice ? setRange({ min: "0", max: "0" }) : null
  }, [customPrice])

  const handleCustomPrice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (range.max < range.min) {
      toast.error("El valor máximo no puede ser menor al mínimo")
    } else if (range.min === null && range.max === null) {
      toast.error("Completa todos los campos")
    } else if (range.min === null && range.max !== null) {
      setRange({ min: "0", max: range.max })
    } else if (range.min !== null && range.max === null) {
      setRange({ min: range.min, max: "1000000" })
    } else {
      // @ts-ignore
      setFilter((prev) => ({
        ...prev,
        price: `${range.min}-${range.max}`,
      }))
    }
  }

  return (
    <aside className="relative w-[25%] h-max mt-20 flex items-center justify-center">
      <Toaster position="bottom-left" />
      <article className="fixed top-[216px] w-[23%] left-12 h-max flex flex-col items-center justify-center gap-4 bg-black rounded-[21px] py-8">
        {filterOpts.map((filter, index) => (
          <div
            key={index}
            className="w-[80%] h-max flex flex-col gap-3 items-start justify-center"
          >
            <label className="text-white text-base font-normal">
              {customPrice && filter.filterName === "price" ? (
                <div className="flex flex-row gap-2">
                  {filter.label}{" "}
                  <IconArrowBackUp
                    className="cursor-pointer"
                    onClick={() => setCustomPrice(false)}
                  />
                </div>
              ) : (
                <>{filter.label}</>
              )}
            </label>
            <div className="w-full h-max flex items-center justify-center flex-row gap-2">
              {customPrice && filter.filterName === "price" ? (
                <form
                  onSubmit={handleCustomPrice}
                  className="w-full h-max flex items-center justify-center gap-3"
                >
                  <input
                    type="number"
                    placeholder="Minimo"
                    onChange={(e) => {
                      setRange((prev) => ({ ...prev, min: e.target.value }))
                    }}
                    className="w-1/2 h-10 bg-transparent border-[1px] border-white rounded-[8px] text-white px-2 text-sm font-normal"
                  />
                  <span className="text-white">{"-"}</span>
                  <input
                    type="number"
                    placeholder="Maximo"
                    onChange={(e) => {
                      setRange((prev) => ({ ...prev, max: e.target.value }))
                    }}
                    className="w-1/2 h-10 bg-transparent border-[1px] border-white rounded-[8px] text-white px-2 text-sm font-normal"
                  />
                  <button type="submit">
                    <IconSend2
                      size={25}
                      className="text-white cursor-pointer hover:text-white/80 transition-colors duration-150"
                    />
                  </button>
                </form>
              ) : (
                <Select
                  onValueChange={(value) => {
                    // @ts-ignore
                    setFilter((prev) => ({
                      ...prev,
                      [filter.filterName]: value,
                    }))
                  }}
                >
                  <SelectTrigger className="w-full h-max bg-transparent border-[1px] border-white rounded-[8px] text-white gap-2">
                    <SelectValue
                      className="text-black font-bold"
                      placeholder={filter.options[0].name}
                    />
                  </SelectTrigger>
                  <SelectContent className="">
                    {filter.options.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {filter.filterName === "price" && (
                <>
                  {!customPrice ? (
                    <IconEdit
                      onClick={() => {
                        setCustomPrice(true)
                      }}
                      size={25}
                      className="text-white cursor-pointer hover:text-white/80 transition-colors duration-150"
                    />
                  ) : null}
                </>
              )}
            </div>
          </div>
        ))}
      </article>
    </aside>
  )
}

export default PropertiesFilter
