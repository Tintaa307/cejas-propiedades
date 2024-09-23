import { Resend } from "resend"
import { NextResponse } from "next/server"
import { EmailTemplate } from "@/components/email-template"

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed", status: 405 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const data = await req.json()

    if (!data) {
      return NextResponse.json({
        message: "No data provided",
        status: 400,
      })
    }

    const { name, email, phone, message } = data

    const { data: emailData, error } = await resend.emails.send({
      from: "Cejas Inmobiliaria <contact@cejaspropiedades.com>",
      to: ["estudiointegral1@hotmail.com"],
      subject: "Nuevo mensaje desde Cejas Propiedades",
      react: EmailTemplate({
        name: name,
        message: message,
        phone: phone,
        email: email,
      }),
      text: "",
    })

    if (error) {
      console.error(error)
      return NextResponse.json({
        message: "Error al enviar el mensaje.",
        status: 500,
      })
    } else {
      console.log(emailData)
    }

    return NextResponse.json({
      message: "El mensaje ha sido enviado correctamente.",
      status: 200,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      message: "Error al enviar el mensaje.",
      status: 500,
    })
  }
}
