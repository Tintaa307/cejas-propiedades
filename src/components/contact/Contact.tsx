"use client"

import { useState } from "react"
import { Toaster, toast } from "sonner"
import { handleSubmit } from "@/actions/contact-actions"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const Contact = ({ title }: { title: string }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const FormAction = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const res = await handleSubmit(formData)
      switch (res.status) {
        case 200:
          toast.success(res.message)
          // Clear form
          const form = document.getElementById(
            "contact-form"
          ) as HTMLFormElement
          form?.reset()
          break
        case 500:
          if (Array.isArray(res.message)) {
            res.message.forEach((msg: string) => toast.error(msg))
          } else {
            toast.error(res.message || "Error al enviar el mensaje")
          }
          break
        default:
          toast.info("Error al enviar el mensaje")
          break
      }
    } catch (error) {
      toast.error("Ocurrió un error al enviar el mensaje")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="w-full py-16 md:py-24">
      <Toaster position="top-center" duration={3000} richColors />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-normal mb-2">
              <span className="text-primary_green">Pongámonos en </span>
              <span className="text-[#bf0909]">contacto</span>
            </h2>
            <p className="text-primary_green/80 text-base font-medium">
              Deja un mensaje y nos comunicaremos contigo
            </p>
          </div>

          <form id="contact-form" action={FormAction} className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Nombre Completo..."
                required
                className="border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary_green/60"
              />
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Correo Electronico..."
                required
                className="border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary_green/60"
              />
            </div>

            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="Telefono..."
                className="border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary_green/60"
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Escribe Un Mensaje..."
                rows={4}
                required
                className="border-primary_green/30 text-primary_green placeholder:text-primary_green/60 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary_green/60"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary_green hover:bg-primary_green/90 text-cream"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
