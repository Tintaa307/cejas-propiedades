"use client"

import React, { useEffect, useState } from "react"
import * as XLSX from "xlsx"
import Papa from "papaparse"
import { BatchProps } from "@/types/types"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Properties from "@/components/properties/Properties"

const AllPropierties = () => {
  const [data, setData] = useState<BatchProps[]>([])
  const filterProps = useState({
    location: "canuelas",
    type: "casa",
    size: "menor-a-100m2",
    price: "0-100000",
  })
  const filterOpts = [
    {
      label: "Ubicación",
      options: [
        { name: "Cañuelas", value: "canuelas" },
        { name: "San Vicente", value: "san-vicente" },
        { name: "Ezeiza", value: "ezeiza" },
        { name: "Monte Grande", value: "monte-grande" },
      ],
    },
    {
      label: "Tipo",
      options: [
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
      label: "Tamaño",
      options: [
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
      label: "Precio",
      options: [
        {
          name: "Menor a 100.000 USD",
          value: "0-100000",
        },
        {
          name: "100.000 USD - 200.000 USD",
          value: "100000-200000",
        },
        {
          name: "200.000 USD - 300.000 USD",
          value: "200000-300000",
        },
      ],
    },
  ]

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/casas-quintas-canuelas.xlsx")
      const arrayBuffer = await response.arrayBuffer()
      const workbook = XLSX.read(arrayBuffer, { type: "array" })
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]
      const csv = XLSX.utils.sheet_to_csv(worksheet)

      Papa.parse(csv, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          const response = results.data as BatchProps[]
          const data = response.filter(
            (item) => item.price !== null
          ) as BatchProps[]
          setData(data)
        },
      })
    }

    fetchData()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <section className="relative w-full mt-8 h-full flex items-start justify-center flex-row gap-12">
      <aside className="relative w-[25%] h-max mt-20 flex items-center justify-center">
        <article className="fixed top-[216px] w-[23%] left-12 h-max flex flex-col items-center justify-center gap-4 bg-black rounded-[21px] py-8">
          {filterOpts.map((filter, index) => (
            <div
              key={index}
              className="w-[80%] h-max flex flex-col gap-3 items-start justify-center"
            >
              <label className="text-white text-base font-normal">
                {filter.label}
              </label>
              <Select onValueChange={(value) => console.log(value)}>
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
            </div>
          ))}
        </article>
      </aside>
      <div className="w-[75%] h-max flex items-center justify-center">
        <Properties data={data} />
      </div>
    </section>
  )
}

export default AllPropierties
