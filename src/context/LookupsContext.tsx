"use client"

import { createContext, useContext, useMemo, type ReactNode } from "react"
import type { Locality } from "@/lib/validations/LocalitySchema"
import type { PropertyTypeRecord } from "@/lib/validations/PropertyTypeSchema"
import type {
  LocalityLabelMap,
  PropertyTypeLabelMap,
} from "@/lib/utils"

interface LookupsContextValue {
  localities: Locality[]
  propertyTypes: PropertyTypeRecord[]
  localityLabels: LocalityLabelMap
  propertyTypeLabels: PropertyTypeLabelMap
}

const EMPTY: LookupsContextValue = {
  localities: [],
  propertyTypes: [],
  localityLabels: {},
  propertyTypeLabels: {},
}

const LookupsContext = createContext<LookupsContextValue>(EMPTY)

interface LookupsProviderProps {
  localities: Locality[]
  propertyTypes: PropertyTypeRecord[]
  children: ReactNode
}

export const LookupsProvider = ({
  localities,
  propertyTypes,
  children,
}: LookupsProviderProps) => {
  const value = useMemo<LookupsContextValue>(() => {
    const localityLabels: LocalityLabelMap = {}
    localities.forEach((locality) => {
      localityLabels[locality.value] = locality.name
    })

    const propertyTypeLabels: PropertyTypeLabelMap = {}
    propertyTypes.forEach((type) => {
      propertyTypeLabels[type.value] = type.name
    })

    return {
      localities,
      propertyTypes,
      localityLabels,
      propertyTypeLabels,
    }
  }, [localities, propertyTypes])

  return (
    <LookupsContext.Provider value={value}>{children}</LookupsContext.Provider>
  )
}

export const useLookups = () => useContext(LookupsContext)
