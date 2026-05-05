import { z } from "zod"

export const FeaturedPropertySchema = z.object({
  title: z.string().min(1, "El título es requerido"),
  image: z.string().min(1, "La imagen es requerida").nullable().optional(),
  description: z.string().min(1, "La descripción es requerida"),
  price_original: z.string().nullable().optional(),
  price_discount: z.string().min(1, "El precio es requerido"),
  is_in_offer: z.boolean().default(false),
  location: z.string().min(1, "La ubicación es requerida"),
  site: z.string().min(1, "La localidad es requerida"),
  link: z.string().min(1, "El link es requerido"),
  position: z.number().int().min(0).default(0),
  is_active: z.boolean().default(true),
})

export const FeaturedPropertyUpdateSchema = FeaturedPropertySchema.partial()

export type CreateFeaturedProperty = z.infer<typeof FeaturedPropertySchema>
export type UpdateFeaturedProperty = z.infer<
  typeof FeaturedPropertyUpdateSchema
>

export interface FeaturedProperty {
  id: string
  title: string
  image: string | null
  description: string
  price_original: string | null
  price_discount: string
  is_in_offer: boolean
  location: string
  site: string
  link: string
  position: number
  is_active: boolean
  created_at: string
  updated_at: string
}
