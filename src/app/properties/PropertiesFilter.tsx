"use client"

import { type Dispatch, type SetStateAction, useContext } from "react"
import { FilterContext } from "@/context/FilterContext"
import { X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { FilterProps } from "@/types/types"

const PropertiesFilter = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const filterOpts = [
    {
      label: "Ubicación",
      filterName: "location",
      placeholder: "Cañuelas",
      options: [
        { name: "Todos", value: "todos" },
        { name: "Cañuelas", value: "canuelas" },
        { name: "San Miguel del Monte", value: "san_miguel_monte" },
        { name: "Ituzaingó", value: "ituzaingo" },
      ],
    },
    {
      label: "Tipo",
      filterName: "type",
      placeholder: "Casa",
      options: [
        { name: "Todos", value: "todos" },
        { name: "Casa", value: "casa" },
        { name: "Quinta", value: "quinta" },
        { name: "Chacra", value: "chacra" },
        { name: "Lote", value: "lote" },
      ],
    },
    {
      label: "Estado",
      filterName: "operation",
      placeholder: "Venta",
      options: [
        { name: "Todos", value: "todos" },
        { name: "En Venta", value: "venta" },
        { name: "Alquiler", value: "alquiler" },
      ],
    },
    {
      label: "Precio",
      filterName: "price",
      placeholder: "$10000-$100000",
      options: [
        { name: "Todos", value: "todos" },
        { name: "Hasta $50.000", value: "0-50000" },
        { name: "$50.000 - $100.000", value: "50000-100000" },
        { name: "$100.000 - $200.000", value: "100000-200000" },
        { name: "$200.000 - $300.000", value: "200000-300000" },
        { name: "Más de $300.000", value: "300000+" },
      ],
    },
  ]

  const { setFilter, filter } = useContext(FilterContext)

  // Filter options component - reused in both desktop and mobile views
  const FilterOptions = () => (
    <div className="space-y-6">
      {filterOpts.map((filterOpt, index) => (
        <div key={index} className="space-y-2">
          <Label className="text-sm font-medium text-primary_green">
            {filterOpt.label}
          </Label>
          <Select
            value={filter[filterOpt.filterName as keyof FilterProps]}
            onValueChange={(value) => {
              setFilter((prev: FilterProps) => ({
                ...prev,
                [filterOpt.filterName]: value,
              }))
            }}
          >
            <SelectTrigger className="w-full h-10 border border-primary_green/30 text-primary_green text-sm focus:ring-primary_green focus:ring-opacity-30 cursor-pointer">
              <SelectValue placeholder={filterOpt.placeholder} />
            </SelectTrigger>
            <SelectContent className="border border-primary_green/30">
              {filterOpt.options.map((option, idx) => (
                <SelectItem
                  key={idx}
                  value={option.value}
                  className="text-primary_green hover:bg-primary_green/10 focus:bg-primary_green/10 cursor-pointer"
                >
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  )

  return (
    <>
      {/* Desktop Filter - Hidden on mobile */}
      <aside className="hidden md:block md:w-1/4 lg:w-1/5 pr-6">
        <div className="space-y-6">
          <h2 className="text-base font-medium text-primary_green mb-4">
            Filtro de búsqueda
          </h2>
          <FilterOptions />
        </div>
      </aside>

      {/* Mobile Filter Sheet - Only shown on mobile */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          className="w-[85%] sm:w-[350px] p-6 border-r border-primary_green/20"
        >
          <SheetHeader className="text-left mb-6">
            <SheetTitle className="text-primary_green">
              Filtro de búsqueda
            </SheetTitle>
            <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
              <X className="h-4 w-4 text-primary_green" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </SheetHeader>
          <FilterOptions />
        </SheetContent>
      </Sheet>
    </>
  )
}

export default PropertiesFilter
