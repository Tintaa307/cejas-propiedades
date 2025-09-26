import { z } from "zod"

export const ContactSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("El email debe ser válido"),
  phone: z.string().optional(),
  message: z.string().min(1, "El mensaje es requerido"),
})

export const SellContactSchema = z.object({
  fullname: z.string().min(1, "El nombre completo es requerido"),
  email: z.string().email("El email debe ser válido"),
  phone: z.string().min(1, "El teléfono es requerido"),
  city: z.string().min(1, "La ciudad es requerida"),
  type: z.string().min(1, "El tipo es requerido"),
  message: z.string().min(1, "El mensaje es requerido"),
})

export type ContactMessage = z.infer<typeof ContactSchema>
export type SellContactMessage = z.infer<typeof SellContactSchema>
