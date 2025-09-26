"use server"

import { ContactSchema } from "@/lib/validations/ContactSchema"
import { sendContactEmail } from "@/controllers/contact-controller"
import { actionErrorHandler } from "@/lib/handlers/actionErrorHandler"
import { z } from "zod"

export const handleSubmit = async (formData: FormData) => {
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const message = formData.get("message")

  const values = {
    name: name as string,
    email: email as string,
    phone: phone as string,
    message: message as string,
  }

  if (Object.values(values).some((value) => value === "")) {
    return { status: 500, message: "Por favor, complete todos los campos" }
  }

  try {
    const validatedData = ContactSchema.parse(values)

    const result = await actionErrorHandler(async () => {
      return await sendContactEmail(validatedData)
    })

    return { status: 200, message: result.message }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map((err) => err.message)
      return { status: 500, message: errors }
    } else {
      console.error("Contact action error:", error)
      return { status: 500, message: "Error al enviar el mensaje" }
    }
  }
}
