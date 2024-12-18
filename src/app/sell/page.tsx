"use client"

import { handleSubmit } from "@/actions/sell-actions"
import Button from "@/components/button/Button"
import Input from "@/components/contact/Input"
import React from "react"
import { toast } from "sonner"

const Sell = () => {
  const FormAction = async (formData: FormData) => {
    const res = await handleSubmit(formData)
    switch (res.status) {
      case 200:
        toast.success(res.message)
        break
      case 500:
        res.message.map((msg: string) => toast.error(msg)) as string[]
        break
      default:
        toast.info("Error al enviar el mensaje")
        break
    }
  }
  return (
    <section className="w-full h-max flex items-start justify-center flex-row mt-24 p-2">
      <main className="w-full h-max mt-12 flex items-center justify-center flex-col gap-12">
        <header className="w-full h-max flex items-center justify-center flex-col gap-4">
          <h4 className="text-black text-4xl font-bold">Vende tu propiedad</h4>
          <p className="text-base text-black/80 xs:text-sm sm:text-center">
            Complete el formulario y nos pondremos en contacto contigo.
          </p>
        </header>
        <form
          action={FormAction}
          className="w-full h-max flex items-center justify-center flex-col gap-10 "
        >
          <div className="w-[50%] h-max flex items-center justify-center flex-row gap-4 md:w-[80%] ls:w-[90%]">
            <div className="w-full h-max flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-black text-base font-semibold"
              >
                Nombre Completo*
              </label>
              <Input
                className="w-full placeholder:text-black/60"
                placeholder="Cejas propiedades"
                name="fullname"
                type="text"
              />
            </div>
            <div className="w-full h-max flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-black text-base font-semibold"
              >
                Correo Electronico*
              </label>
              <Input
                className="w-full placeholder:text-black/60"
                placeholder="cejas@ejemplo.com"
                name="email"
                type="email"
              />
            </div>
          </div>
          <div className="w-[50%] h-max flex items-center justify-center flex-row gap-4 md:w-[80%] ls:w-[90%]">
            <div className="w-full h-max flex flex-col gap-1">
              <label
                htmlFor="phone"
                className="text-black text-base font-semibold"
              >
                Numero Celular*
              </label>

              <Input
                className="w-full placeholder:text-black/60"
                placeholder="+5491122222222"
                name="phone"
                type="tel"
              />
            </div>
            <div className="w-full h-max flex flex-col gap-1">
              <label
                htmlFor="city"
                className="text-black text-base font-semibold"
              >
                Localidad/Provincia*
              </label>

              <Input
                className="w-full placeholder:text-black/60"
                placeholder="Buenos Aires"
                name="city"
                type="text"
              />
            </div>
          </div>
          <div className="w-[50%] h-max flex items-start justify-center flex-col gap-1 md:w-[80%] ls:w-[90%]">
            <label
              htmlFor="type"
              className="text-black text-base font-semibold"
            >
              Tipo de propiedad*
            </label>
            <Input
              placeholder="Casa, Departamento, Local, etc..."
              name="type"
              type="text"
              className="w-full placeholder:text-black/60"
            />
          </div>
          <div className="w-[50%] h-max flex items-start justify-center flex-col gap-1 md:w-[80%] ls:w-[90%]">
            <label
              htmlFor="message"
              className="text-black text-base font-semibold"
            >
              Comentarios
            </label>
            <textarea
              placeholder="Escribe un mensaje..."
              rows={5}
              cols={5}
              name="message"
              maxLength={200}
              className="w-full h-[120px] px-4 bg-transparent border-[1px] border-black/80 rounded-md placeholder:text-black/60 text-sm text-black font-medium outline-none focus:outline-2 focus:outline-black/80 transition-all duration-200 py-2 resize-none shadow-[0_4px_8px_#d9d9d9]"
            />
          </div>
          <div className="w-[50%] h-max flex items-center justify-center flex-col gap-4 md:w-[80%] ls:w-[90%]">
            <Button className="w-full h-max py-3 rounded-md text-white bg-black hover:opacity-95 transition-all duration-150">
              Enviar
            </Button>
            <p className="text-sm text-black/80 md:text-center">
              Al enviar se están aceptando los{" "}
              <span className="font-bold underline">
                Términos y Condiciones
              </span>{" "}
              de Uso y la{" "}
              <span className="font-bold underline">
                Política de Privacidad
              </span>
            </p>
          </div>
        </form>
      </main>
    </section>
  )
}

export default Sell
