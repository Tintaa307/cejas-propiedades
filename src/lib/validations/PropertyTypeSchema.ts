import { z } from "zod"

const propertyTypeValueRegex = /^[a-z0-9_]+$/

export const PropertyTypeSchema = z.object({
  value: z
    .string()
    .min(1, "El valor es requerido")
    .regex(
      propertyTypeValueRegex,
      "El valor solo puede contener letras minúsculas, números y guiones bajos"
    ),
  name: z.string().min(1, "El nombre es requerido"),
})

export const PropertyTypeUpdateSchema = PropertyTypeSchema.partial()

export type CreatePropertyType = z.infer<typeof PropertyTypeSchema>
export type UpdatePropertyType = z.infer<typeof PropertyTypeUpdateSchema>

export interface PropertyTypeRecord {
  id: string
  value: string
  name: string
  created_at: string
}
