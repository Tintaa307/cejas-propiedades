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

    await resend.emails.send({
      from: "Cejas Inmobiliaria <Estudiointegral1@hotmail.com>",
      to: "Estudiointegral1@hotmail.com",
      subject: "Nuevo mensaje desde cejaspropiedades.com",
      react: EmailTemplate({
        name: name,
        message: message,
        phone: phone,
        email: email,
      }),
      text: "",
    })

    return NextResponse.json({
      message: "The email was sent successfully.",
      status: 200,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      message: "The email could not be sent. Please try again later.",
      status: 500,
    })
  }
}