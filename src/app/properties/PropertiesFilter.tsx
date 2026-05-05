"use client"

import { type Dispatch, type SetStateAction, useContext, useMemo } from "react"
import { FilterContext } from "@/context/FilterContext"
import { useLookups } from "@/context/LookupsContext"
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

interface FilterOption {
  name: string
  value: string
}

interface FilterDefinition {
  label: string
  filterName: keyof FilterProps
  placeholder: string
  options: FilterOption[]
}

const PropertiesFilter = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const { setFilter, filter } = useContext(FilterContext)
  const { localities, propertyTypes } = useLookups()

  const filterOpts = useMemo<FilterDefinition[]>(() => {
    const localityOptions: FilterOption[] = [
      { name: "Todos", value: "todos" },
      ...localities.map((locality) => ({
        name: locality.name,
        value: locality.value,
      })),
    ]

    const typeOptions: FilterOption[] = [
      { name: "Todos", value: "todos" },
      ...propertyTypes.map((type) => ({
        name: type.name,
        value: type.value,
      })),
    ]

    return [
      {
        label: "Ubicación",
        filterName: "location",
        placeholder: localities[0]?.name ?? "Ubicación",
        options: localityOptions,
      },
      {
        label: "Tipo",
        filterName: "type",
        placeholder: propertyTypes[0]?.name ?? "Tipo",
        options: typeOptions,
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
      {
        label: "Ordenar por",
        filterName: "sortBy",
        placeholder: "Predeterminado",
        options: [
          { name: "Predeterminado", value: "default" },
          { name: "Precio: Menor a Mayor", value: "price_asc" },
          { name: "Precio: Mayor a Menor", value: "price_desc" },
          { name: "Nombre: A-Z", value: "name_asc" },
          { name: "Nombre: Z-A", value: "name_desc" },
          { name: "Tipo: A-Z", value: "type_asc" },
          { name: "Localidad: A-Z", value: "locality_asc" },
        ],
      },
    ]
  }, [localities, propertyTypes])

  const FilterOptions = () => (
    <div className="space-y-6">
      {filterOpts.map((filterOpt) => (
        <div key={filterOpt.filterName} className="space-y-2">
          <Label className="text-sm font-medium text-primary_green">
            {filterOpt.label}
          </Label>
          <Select
            value={filter[filterOpt.filterName]}
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
              {filterOpt.options.map((option) => (
                <SelectItem
                  key={option.value}
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
      <aside className="hidden md:block md:w-1/4 lg:w-1/5 pr-6">
        <div className="space-y-6">
          <h2 className="text-base font-medium text-primary_green mb-4">
            Filtro de búsqueda
          </h2>
          <FilterOptions />
        </div>
      </aside>

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
