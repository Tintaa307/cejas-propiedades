import { Resend } from "resend"
import {
  ContactMessage,
  SellContactMessage,
} from "@/lib/validations/ContactSchema"
import { EmailSendException } from "@/exceptions/contact/contact-exceptions"

export class ContactRepository {
  private resend: Resend

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY)
  }

  async sendContactEmail(contactData: ContactMessage): Promise<void> {
    try {
      const { data, error } = await this.resend.emails.send({
        from: "Cejas Inmobiliaria <contact@cejaspropiedades.com>",
        to: ["estudiointegral1@hotmail.com"],
        subject: "Nuevo mensaje desde Cejas Propiedades",
        react: this.createEmailTemplate({
          name: contactData.name,
          message: contactData.message,
          phone: contactData.phone || "No proporcionado",
          email: contactData.email,
        }),
        text: "",
      })

      if (error) {
        throw new EmailSendException(error.message, error)
      }

      console.log("Email sent successfully:", data)
    } catch (error) {
      throw new EmailSendException("Error al enviar el email", error)
    }
  }

  async sendSellContactEmail(contactData: SellContactMessage): Promise<void> {
    try {
      const { data, error } = await this.resend.emails.send({
        from: "Cejas Inmobiliaria <contact@cejaspropiedades.com>",
        to: ["estudiointegral1@hotmail.com"],
        subject: "Nuevo mensaje de venta desde Cejas Propiedades",
        react: this.createSellEmailTemplate({
          name: contactData.fullname,
          message: contactData.message,
          phone: contactData.phone,
          email: contactData.email,
          city: contactData.city,
          type: contactData.type,
        }),
        text: "",
      })

      if (error) {
        throw new EmailSendException(error.message, error)
      }

      console.log("Sell email sent successfully:", data)
    } catch (error) {
      throw new EmailSendException("Error al enviar el email de venta", error)
    }
  }

  private createEmailTemplate(data: {
    name: string
    message: string
    phone: string
    email: string
  }) {
    // Importar dinámicamente el componente EmailTemplate
    const { EmailTemplate } = require("@/components/email-template")
    return EmailTemplate(data)
  }

  private createSellEmailTemplate(data: {
    name: string
    message: string
    phone: string
    email: string
    city: string
    type: string
  }) {
    // Importar dinámicamente el componente EmailTemplate
    const { EmailTemplate } = require("@/components/email-template")
    return EmailTemplate(data)
  }
}
