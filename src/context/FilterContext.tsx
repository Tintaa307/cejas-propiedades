"use client"

import { FilterProps } from "@/types/types"
import { createContext, useState } from "react"

const FilterContext = createContext({
  filter: {
    location: "todos",
    type: "todos",
    price: "todos",
    operation: "todos",
  },
  setFilter: (filter: FilterProps | ((prev: FilterProps) => FilterProps)) => {},
})

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<FilterProps>({
    location: "todos",
    type: "todos",
    operation: "todos",
    price: "todos",
  })

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterProvider }
