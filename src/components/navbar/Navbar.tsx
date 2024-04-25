import React from "react"
import Item from "./Item"

const Navbar = () => {
  const navItems = [
    {
      title: "Sobre nosotros",
      link: "#sobre-nosotros",
    },
    {
      title: "Propiedades",
      link: "#propiedades",
    },
    {
      title: "Desarrollos",
      link: "#desarrollos",
    },
    {
      title: "Contacto",
      link: "#contacto",
    },
  ]

  return (
    <header className="relative w-full h-20 flex items-center justify-center">
      <nav className="w-[90%] h-full flex items-center justify-between border-b-[1px] border-b-grey/20">
        <picture className="w-max h-3/4">
          <div className="w-24 h-full bg-grey flex items-center justify-center rounded-md">
            LOGO
          </div>
        </picture>
        <ul className="w-1/2 h-full flex items-center justify-end flex-row gap-12">
          {navItems.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
