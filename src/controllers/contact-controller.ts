"use server"

import { actionHandler } from "@/lib/handlers/actionHandler"
import { ContactService } from "@/services/contact-service"
import {
  ContactMessage,
  SellContactMessage,
} from "@/lib/validations/ContactSchema"

const contactService = new ContactService()

export const sendContactEmail = async (contactData: ContactMessage) => {
  return await actionHandler(async () => {
    await contactService.sendContactEmail(contactData)
    return { message: "Mensaje enviado exitosamente" }
  })
}

export const sendSellContactEmail = async (contactData: SellContactMessage) => {
  return await actionHandler(async () => {
    await contactService.sendSellContactEmail(contactData)
    return { message: "Mensaje de venta enviado exitosamente" }
  })
}
