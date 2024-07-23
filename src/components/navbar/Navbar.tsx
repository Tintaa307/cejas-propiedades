"use client"

import React, { useState, useEffect } from "react"
import Item from "./Item"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const navItems = [
    {
      title: "Sobre nosotros",
      link: "#sobre-nosotros",
    },
    {
      title: "Propiedades",
      link: "/properties",
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full h-20 flex items-center justify-center bg-[#f3f3f3] z-50 transition-all duration-150",
        {
          "shadow-[0_4px_6px_#9a9a9a] transition-all duration-150": isScrolling,
        }
      )}
    >
      <nav className="w-[90%] h-full flex items-center justify-between">
        <picture className="w-max h-3/4">
          <Link href={"/"} className="">
            <Image
              src={"/logo-estudio.png"}
              alt="logo"
              width={130}
              height={130}
              className="cursor-pointer"
            />
          </Link>
        </picture>
        <ul className="2xl:w-1/2 lg:w-2/3 h-full flex items-center justify-end flex-row gap-12">
          {navItems.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
