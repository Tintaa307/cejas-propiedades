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
      link: "/#sobre-nosotros",
    },
    {
      title: "Desarrollos",
      link: "/#desarrollos",
    },
    {
      title: "Propiedades",
      link: "/properties",
    },
    {
      title: "Ingresos",
      link: "/#ingresos",
    },
    {
      title: "Servicios",
      link: "/#servicios",
    },
    {
      title: "Inmbuebles",
      link: "/#inmuebles",
    },
    {
      title: "Contacto",
      link: "/#contacto",
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
    <header className="fixed top-10 left-0 w-full h-20 flex items-center justify-center z-50 transition-all duration-150">
      <nav
        className={cn(
          "w-[90%] 2xl:w-[75%] h-full flex items-center justify-between bg-[#f3f3f3] rounded-[30px]",
          {
            "shadow-2xl": isScrolling,
          }
        )}
      >
        <picture className="w-max h-3/4">
          <Link
            href={"/"}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src={"/images/logo-cejas-2.png"}
              alt="logo"
              width={140}
              height={140}
              className="cursor-pointer h-full object-fill"
            />
          </Link>
        </picture>
        <ul className="2xl:w-2/3 h-full flex items-center justify-center flex-row gap-12">
          {navItems.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
