import React from "react"
import {
  RiInstagramLine,
  RiFacebookBoxFill,
  RiPhoneFill,
} from "@remixicon/react"
import Link from "next/link"
import WhatsappButton from "./WhatsappButton"

const Footer = () => {
  const socialMedia = [
    {
      title: "Instagram",
      icon: <RiInstagramLine size={40} />,
      link: "#",
    },
    {
      title: "Facebook",
      icon: <RiFacebookBoxFill size={40} className="rounded-full" />,
      link: "#",
    },
    {
      title: "Whatsapp",
      icon: <RiPhoneFill size={40} />,
      link: "#",
    },
  ]
  return (
    <footer className="w-full h-max flex items-center justify-center mt-12 flex-col gap-12">
      <div className="w-[90%] h-max flex items-center justify-between flex-row">
        <ul className="w-max h-max flex flex-row gap-12">
          {socialMedia.map((item, idx) => (
            <li key={idx} className="rounded-full cursor-pointer">
              {item.icon}
            </li>
          ))}
        </ul>
        <section className="w-max h-max flex items-center justify-center">
          <Link href="#">
            <WhatsappButton />
          </Link>
        </section>
      </div>
      <div className="w-full h-max flex items-center justify-center border-t-[1px] border-t-black flex-col">
        <small className="text-black text-sm font-normal my-3">
          ©2024 Cejas Propiedades. Nuestros terminos y condiciones{" "}
          <span className="underline cursor-pointer">aquí</span>
        </small>
        <small className="text-black/90 text-sm font-medium mb-3">
          Diseñado y desarrollado por{" "}
          <Link
            href="https://synera.com.ar"
            className="text-blue-500"
            target="_blank"
          >
            Synera
          </Link>
        </small>
      </div>
    </footer>
  )
}

export default Footer
