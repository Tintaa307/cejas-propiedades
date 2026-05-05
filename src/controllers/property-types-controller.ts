"use server"

import { revalidatePath } from "next/cache"
import { actionHandler } from "@/lib/handlers/actionHandler"
import { PropertyTypesService } from "@/services/property-types-service"
import {
  CreatePropertyType,
  UpdatePropertyType,
} from "@/lib/validations/PropertyTypeSchema"

const propertyTypesService = new PropertyTypesService()

const invalidatePropertyTypesCaches = () => {
  revalidatePath("/properties")
  revalidatePath("/")
}

export const getPropertyTypes = async () => {
  return await actionHandler(async () => {
    return await propertyTypesService.getPropertyTypes()
  })
}

export const getPropertyTypeById = async (id: string) => {
  return await actionHandler(async () => {
    return await propertyTypesService.getPropertyTypeById(id)
  })
}

export const createPropertyType = async (input: CreatePropertyType) => {
  return await actionHandler(async () => {
    const created = await propertyTypesService.createPropertyType(input)
    invalidatePropertyTypesCaches()
    return {
      message: "Tipo de propiedad creado exitosamente",
      data: created,
    }
  })
}

export const updatePropertyType = async (
  id: string,
  input: UpdatePropertyType
) => {
  return await actionHandler(async () => {
    const updated = await propertyTypesService.updatePropertyType(id, input)
    invalidatePropertyTypesCaches()
    return {
      message: "Tipo de propiedad actualizado exitosamente",
      data: updated,
    }
  })
}

export const deletePropertyType = async (id: string) => {
  return await actionHandler(async () => {
    await propertyTypesService.deletePropertyType(id)
    invalidatePropertyTypesCaches()
    return { message: "Tipo de propiedad eliminado exitosamente" }
  })
}
