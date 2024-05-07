import React from "react"
import {
  RiInstagramLine,
  RiFacebookBoxFill,
  RiWhatsappLine,
  RiPhoneFill,
} from "@remixicon/react"

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
      icon: <RiWhatsappLine size={40} />,
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
        <section className="w-max h-max flex flex-col items-center justify-center gap-3">
          <small className="text-black text-sm font-normal">
            Si te intereso algun inmueble
          </small>
          <button className="w-max h-max px-10 py-2 flex flex-row gap-3 items-center justify-center bg-transparent border-[1px] border-black rounded-md text-black font-bold text-lg hover:bg-black hover:text-white transition-all duration-150 group">
            Contactate
            <RiPhoneFill
              size={30}
              className="group-hover:text-white transition-all duration-150"
            />
          </button>
        </section>
      </div>
      <div className="w-full h-max flex items-center justify-center border-t-[1px] border-t-black">
        <small className="text-black text-sm font-normal my-3">
          ©2024 Cejas Propiedades. Todos los derechos reservados
        </small>
      </div>
    </footer>
  )
}

export default Footer
