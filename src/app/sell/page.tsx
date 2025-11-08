"use client"

import { handleSubmit } from "@/actions/sell-actions"
import { useState } from "react"
import { Toaster, toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Sell = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const FormAction = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const res = await handleSubmit(formData)
      switch (res.status) {
        case 200:
          toast.success(res.message)
          // Clear form
          const form = document.getElementById("sell-form") as HTMLFormElement
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
    <section className="w-full min-h-auto bg-cream">
      <Toaster position="top-center" richColors />

      <div className="container mx-auto px-4 mt-40">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-primary_green">Vende tu </span>
              <span className="text-cta_red">propiedad</span>
            </h1>
            <p className="text-primary_green/80 text-sm md:text-base">
              Complete el formulario y nos pondremos en contacto contigo
            </p>
          </header>

          <form id="sell-form" action={FormAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="fullname"
                  className="text-primary_green font-medium text-sm"
                >
                  Nombre Completo
                </label>
                <Input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="Ingrese su nombre completo"
                  required
                  className="bg-cream border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary_green"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-primary_green font-medium text-sm"
                >
                  Correo Electrónico
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  required
                  className="bg-cream border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary_green"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-primary_green font-medium text-sm"
                >
                  Número Celular
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Ingrese su número celular"
                  required
                  className="bg-cream border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary_green"
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label
                  htmlFor="city"
                  className="text-primary_green font-medium text-sm"
                >
                  Localidad/Provincia
                </label>
                <Input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Ingrese su localidad/provincia"
                  required
                  className="bg-cream border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary_green"
                />
              </div>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label
                htmlFor="type"
                className="text-primary_green font-medium text-sm"
              >
                Tipo de Propiedad
              </label>
              <Input
                id="type"
                name="type"
                type="text"
                placeholder="Ingrese su nombre completo"
                required
                className="bg-cream border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary_green"
              />
            </div>

            {/* Comments */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-primary_green font-medium text-sm"
              >
                Comentario Adicional
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Ingrese su nombre completo"
                rows={5}
                className="bg-cream border-primary_green/30 text-primary_green placeholder:text-primary_green/60 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary_green resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary_green hover:bg-primary_green/90 text-cream"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>

            {/* Terms and Conditions */}
            <p className="text-xs text-primary_green/80 text-center">
              Al enviar se están aceptando los{" "}
              <Link href="/terminos" className="font-medium underline">
                Términos y Condiciones
              </Link>{" "}
              de Uso y la{" "}
              <Link href="/privacidad" className="font-medium underline">
                Política de Privacidad
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Sell
