"use client"

import { FilterProps } from "@/types/types"
import { createContext, useEffect, useState } from "react"

const FilterContext = createContext({
  filter: {
    location: "todos",
    type: "todos",
    size: "todos",
    price: "todos",
    operation: "todos",
  },
  setFilter: (filter: FilterProps) => {},
})

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<FilterProps>({
    location: "todos",
    type: "todos",
    size: "todos",
    operation: "todos",
    price: "todos",
  })

  useEffect(() => {
    console.log(filter)
  }, [filter])

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterProvider }
