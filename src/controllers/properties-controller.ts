"use server"

import { revalidatePath } from "next/cache"
import { actionHandler } from "@/lib/handlers/actionHandler"
import { PropertiesService } from "@/services/properties-service"
import {
  CreateProperty,
  UpdateProperty,
} from "@/lib/validations/PropertySchema"

const invalidatePropertiesCaches = (id?: string | number) => {
  revalidatePath("/properties")
  revalidatePath("/")
  if (id !== undefined) {
    revalidatePath(`/properties/${id}`)
  }
}

const propertiesService = new PropertiesService()

export const getProperties = async (limit?: number) => {
  return await actionHandler(async () => {
    const properties = await propertiesService.getProperties(limit)
    return properties
  })
}

export const getPropertyById = async (id: string) => {
  return await actionHandler(async () => {
    const property = await propertiesService.getPropertyById(id)
    return property
  })
}

export const getSimilarProperties = async (
  id: string,
  locality: string,
  limit: number = 3
) => {
  return await actionHandler(async () => {
    const properties = await propertiesService.getSimilarProperties(
      id,
      locality,
      limit
    )
    return properties
  })
}

export const createProperty = async (property: CreateProperty) => {
  return await actionHandler(async () => {
    await propertiesService.createProperty(property)
    invalidatePropertiesCaches()
    return { message: "Propiedad creada exitosamente" }
  })
}

export const updateProperty = async (id: string, property: UpdateProperty) => {
  return await actionHandler(async () => {
    await propertiesService.updateProperty(id, property)
    invalidatePropertiesCaches(id)
    return { message: "Propiedad actualizada exitosamente" }
  })
}

export const deleteProperty = async (id: string) => {
  return await actionHandler(async () => {
    await propertiesService.deleteProperty(id)
    invalidatePropertiesCaches(id)
    return { message: "Propiedad eliminada exitosamente" }
  })
}

export const getPropertyImages = async (folderPath: string) => {
  return await actionHandler(async () => {
    const images = await propertiesService.getPropertyImages(folderPath)
    return images
  })
}
