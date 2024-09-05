"use client"

import React from "react"
import Input from "./Input"
import { Toaster, toast } from "sonner"
import Button from "../button/Button"
import { handleSubmit } from "@/actions/contact-actions"

const Contact = ({ title }: { title?: string }) => {
  const inputs = [
    { type: "text", placeholder: "Nombre completo...", name: "name" },
    { type: "email", placeholder: "Correo electrónico...", name: "email" },
    { type: "tel", placeholder: "Teléfono...", name: "phone" },
  ]

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
    <section
      id="Contact"
      className="w-full h-full flex items-center justify-center mt-24"
    >
      <Toaster position="top-center" duration={3000} richColors />
      <div className="w-[90%] h-max flex items-center justify-center flex-col ">
        <section className="w-full h-max flex items-start sm:items-center justify-center flex-row">
          <div className="w-1/2 h-max flex items-center justify-center flex-col gap-12 xl:w-full">
            <header className="w-full h-max flex sm:items-center items-center justify-center flex-col gap-2">
              <h4 className="text-black/90 text-4xl font-bold">
                {title ?? "Contactate"}
              </h4>
              <p className="text-black/70 text-sm font-medium text-center">
                Deja un mensaje y nos comunicaremos contigo.
              </p>
            </header>
            <form
              action={FormAction}
              autoComplete="off"
              className="w-full xl:w-2/3 h-max flex sm:items-center items-center justify-center flex-col gap-8 xl:md:w-full"
            >
              {inputs.map((input, index) => (
                <Input key={index} {...input} />
              ))}
              <textarea
                placeholder="Escribe un mensaje..."
                rows={5}
                cols={5}
                name="message"
                maxLength={200}
                className="w-2/3 h-[104px] px-4 bg-transparent border-[1px] border-black/80 rounded-md placeholder:text-black/80 text-sm text-black font-medium outline-none focus:outline-2 focus:outline-black/80 transition-all duration-200 py-2 resize-none shadow-[0_4px_8px_#d9d9d9]"
              />
              <Button className="w-2/3 h-12 bg-[#070707] rounded-md text-white text-sm border-[1px] border-white/20 font-normal outline-none hover:bg-opacity-90">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Contact
