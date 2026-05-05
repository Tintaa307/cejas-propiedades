"use server"

import { revalidatePath } from "next/cache"
import { actionHandler } from "@/lib/handlers/actionHandler"
import { LocalitiesService } from "@/services/localities-service"
import {
  CreateLocality,
  UpdateLocality,
} from "@/lib/validations/LocalitySchema"

const localitiesService = new LocalitiesService()

const invalidateLocalitiesCaches = () => {
  revalidatePath("/properties")
  revalidatePath("/")
}

export const getLocalities = async () => {
  return await actionHandler(async () => {
    return await localitiesService.getLocalities()
  })
}

export const getLocalityById = async (id: string) => {
  return await actionHandler(async () => {
    return await localitiesService.getLocalityById(id)
  })
}

export const createLocality = async (input: CreateLocality) => {
  return await actionHandler(async () => {
    const created = await localitiesService.createLocality(input)
    invalidateLocalitiesCaches()
    return {
      message: "Localidad creada exitosamente",
      data: created,
    }
  })
}

export const updateLocality = async (id: string, input: UpdateLocality) => {
  return await actionHandler(async () => {
    const updated = await localitiesService.updateLocality(id, input)
    invalidateLocalitiesCaches()
    return {
      message: "Localidad actualizada exitosamente",
      data: updated,
    }
  })
}

export const deleteLocality = async (id: string) => {
  return await actionHandler(async () => {
    await localitiesService.deleteLocality(id)
    invalidateLocalitiesCaches()
    return { message: "Localidad eliminada exitosamente" }
  })
}
