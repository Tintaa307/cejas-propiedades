"use server"

import { revalidatePath } from "next/cache"
import { actionHandler } from "@/lib/handlers/actionHandler"
import { FeaturedPropertiesService } from "@/services/featured-properties-service"
import {
  CreateFeaturedProperty,
  UpdateFeaturedProperty,
} from "@/lib/validations/FeaturedPropertySchema"

const featuredPropertiesService = new FeaturedPropertiesService()

const invalidateFeaturedCaches = () => {
  revalidatePath("/")
}

/** Lista pública (solo activos) — usada por el home. */
export const getActiveFeaturedProperties = async () => {
  return await actionHandler(async () => {
    return await featuredPropertiesService.getActiveFeaturedProperties()
  })
}

/** Lista admin (todos, incluso inactivos) — usada por el dashboard. */
export const getAllFeaturedProperties = async () => {
  return await actionHandler(async () => {
    return await featuredPropertiesService.getAllFeaturedProperties()
  })
}

export const getFeaturedPropertyById = async (id: string) => {
  return await actionHandler(async () => {
    return await featuredPropertiesService.getFeaturedPropertyById(id)
  })
}

export const createFeaturedProperty = async (
  input: CreateFeaturedProperty
) => {
  return await actionHandler(async () => {
    const created = await featuredPropertiesService.createFeaturedProperty(
      input
    )
    invalidateFeaturedCaches()
    return {
      message: "Ingreso destacado creado exitosamente",
      data: created,
    }
  })
}

export const updateFeaturedProperty = async (
  id: string,
  input: UpdateFeaturedProperty
) => {
  return await actionHandler(async () => {
    const updated = await featuredPropertiesService.updateFeaturedProperty(
      id,
      input
    )
    invalidateFeaturedCaches()
    return {
      message: "Ingreso destacado actualizado exitosamente",
      data: updated,
    }
  })
}

export const deleteFeaturedProperty = async (id: string) => {
  return await actionHandler(async () => {
    await featuredPropertiesService.deleteFeaturedProperty(id)
    invalidateFeaturedCaches()
    return { message: "Ingreso destacado eliminado exitosamente" }
  })
}
