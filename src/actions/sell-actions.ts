"use server"

import { ContactSchema } from "@/lib/validators/FormSchema"
import axios from "axios"
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
    const result = ContactSchema.parse(values)
    const res = await axios.post(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/emails"
        : "https://cejas-propiedades.com.ar/api/emails",
      result
    )

    return res.data
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map((err) => err.message)
      return { status: 500, message: errors }
    } else {
      console.log(error)
      return error
    }
  }
}
