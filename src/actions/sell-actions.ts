"use server"

import { SellContactSchema } from "@/lib/validations/ContactSchema"
import { sendSellContactEmail } from "@/controllers/contact-controller"
import { actionErrorHandler } from "@/lib/handlers/actionErrorHandler"
import { z } from "zod"

export const handleSubmit = async (formData: FormData) => {
  const fullname = formData.get("fullname")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const city = formData.get("city")
  const type = formData.get("type")
  const message = formData.get("message")

  const values = {
    fullname: fullname as string,
    email: email as string,
    phone: phone as string,
    city: city as string,
    type: type as string,
    message: message as string,
  }

  if (Object.values(values).some((value) => value === "")) {
    return { status: 500, message: "Por favor, complete todos los campos" }
  }

  try {
    const validatedData = SellContactSchema.parse(values)

    const result = await actionErrorHandler(async () => {
      return await sendSellContactEmail(validatedData)
    })

    return { status: 200, message: result.message }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map((err) => err.message)
      return { status: 500, message: errors }
    } else {
      console.error("Sell action error:", error)
      return { status: 500, message: "Error al enviar el mensaje" }
    }
  }
}
