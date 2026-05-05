import { FilterProvider } from "@/context/FilterContext"
import { LookupsProvider } from "@/context/LookupsContext"
import { getLocalities, getPropertyTypes } from "@/controllers"
import { actionErrorHandler } from "@/lib/handlers/actionErrorHandler"
import { AppActionException } from "@/types/exceptions"
import type { Locality } from "@/lib/validations/LocalitySchema"
import type { PropertyTypeRecord } from "@/lib/validations/PropertyTypeSchema"

const loadLocalities = async (): Promise<Locality[]> => {
  try {
    return await actionErrorHandler(async () => {
      return (await getLocalities()) as Locality[]
    })
  } catch (error) {
    if (error instanceof AppActionException) {
      return []
    }
    throw error
  }
}

const loadPropertyTypes = async (): Promise<PropertyTypeRecord[]> => {
  try {
    return await actionErrorHandler(async () => {
      return (await getPropertyTypes()) as PropertyTypeRecord[]
    })
  } catch (error) {
    if (error instanceof AppActionException) {
      return []
    }
    throw error
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [localities, propertyTypes] = await Promise.all([
    loadLocalities(),
    loadPropertyTypes(),
  ])

  return (
    <LookupsProvider localities={localities} propertyTypes={propertyTypes}>
      <FilterProvider>{children}</FilterProvider>
    </LookupsProvider>
  )
}
