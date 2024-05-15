import React from "react"
import {
  RiInstagramLine,
  RiFacebookBoxFill,
  RiWhatsappLine,
  RiPhoneFill,
} from "@remixicon/react"
import Link from "next/link"

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
        <section className="w-max h-max items-center justify-center">
          <Link href={"#"}>
            <RiWhatsappLine
              size={45}
              className="fixed bg-green cursor-pointer p-2 rounded-full transition-all duration-150 bottom-32 right-12 shadow-[0_0_10px_#d9d9d9]"
            />
          </Link>
        </section>
      </div>
      <div className="w-full h-max flex items-center justify-center border-t-[1px] border-t-black flex-col gap-2">
        <small className="text-black text-sm font-normal my-3">
          ©2024 Cejas Propiedades. Todos los derechos reservados
        </small>
        <small className="text-black/90 text-sm font-medium mb-2">
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
