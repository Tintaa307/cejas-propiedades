import { z } from "zod"

export const PropertySchema = z.object({
  id: z.string().optional(),
  address: z.string().min(1, "La dirección es requerida"),
  location: z.string().min(1, "La ubicación es requerida"),
  type: z.string().min(1, "El tipo es requerido"),
  site: z.string().min(1, "El sitio es requerido"),
  price: z.string().min(1, "El precio es requerido"),
  public_url: z.string().optional(),
  locality: z.string().optional(),
})

export const PropertyUpdateSchema = PropertySchema.partial()

export type CreateProperty = z.infer<typeof PropertySchema>
export type UpdateProperty = z.infer<typeof PropertyUpdateSchema>
