import { z } from "zod"

const localityValueRegex = /^[a-z0-9_]+$/

export const LocalitySchema = z.object({
  value: z
    .string()
    .min(1, "El valor es requerido")
    .regex(
      localityValueRegex,
      "El valor solo puede contener letras minúsculas, números y guiones bajos"
    ),
  name: z.string().min(1, "El nombre es requerido"),
})

export const LocalityUpdateSchema = LocalitySchema.partial()

export type CreateLocality = z.infer<typeof LocalitySchema>
export type UpdateLocality = z.infer<typeof LocalityUpdateSchema>

export interface Locality {
  id: string
  value: string
  name: string
  created_at: string
}
