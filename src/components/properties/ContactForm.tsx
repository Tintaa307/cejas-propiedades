"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast, Toaster } from "sonner"

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast.success("Mensaje enviado con éxito")
      setIsSubmitting(false)
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <div className="mb-16">
      <Toaster position="top-center" richColors />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-normal mb-6 text-center">
          <span className="text-primary_green">¿Te gustó la </span>
          <span className="text-cta_red">propiedad?</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-primary_green"
              >
                Nombre Completo
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Ingrese su nombre completo"
                required
                className="border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary_green"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-primary_green"
              >
                Correo Electrónico
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Ingrese su correo electrónico"
                required
                className="border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary_green"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-primary_green"
              >
                Teléfono
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Ingrese su número de teléfono"
                className="border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary_green"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-primary_green"
              >
                Asunto
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Asunto de su consulta"
                className="border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary_green"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-primary_green"
            >
              Mensaje
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Escriba su mensaje aquí"
              rows={4}
              required
              className="border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary_green resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary_green hover:bg-primary_green/90 text-cream"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <Button
              type="button"
              variant="outline"
              className="w-full border-primary_green text-primary_green hover:bg-primary_green hover:text-cream bg-transparent gap-3 group"
              onClick={() =>
                window.open(
                  "https://wa.me/+5491133683251?text=Hola,%20estoy%20interesado%20en%20esta%20propiedad",
                  "_blank"
                )
              }
            >
              Contáctate por WhatsApp
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#063930"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp group-hover:stroke-cream duration-300"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
