"use client"

import React, { useEffect, useState } from "react"
import * as XLSX from "xlsx"
import Papa from "papaparse"
import { PropertiesProps } from "@/types/types"

const AllPropierties = () => {
  const [data, setData] = useState<PropertiesProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/listado-lotes-canuelas.xlsx")
      const arrayBuffer = await response.arrayBuffer()
      const workbook = XLSX.read(arrayBuffer, { type: "array" })
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]
      const csv = XLSX.utils.sheet_to_csv(worksheet)

      Papa.parse(csv, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          const data = results.data.filter(
            (row: any) => row.direccion !== null
          ) as PropertiesProps[]
          setData(data)
        },
      })
    }

    fetchData()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return <div></div>
}

export default AllPropierties
