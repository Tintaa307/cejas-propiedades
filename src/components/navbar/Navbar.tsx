"use client"

import React, { useState, useEffect } from "react"
import Item from "./Item"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import BarsIcon from "./BarsIcon"

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
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
      setIsScrolling(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        `fixed top-10 left-0 w-full h-20 flex items-center justify-center z-50 transition-all duration-150  lg:h-[80px] lg:fixed lg:z-30 lg:flex lg:sm:justify-start lg:justify-center lg:items-center lg:top-0 lg:px-5 lg:transition-all lg:border-b-[1px] lg:border-white/0 lg:bg-white `,
        {
          "top-0 transition-all duration-200":
            pathname.includes("/properties") || pathname == "/sell",
        }
      )}
    >
      <nav className={cn(
        " w-[90%] h-full items-center justify-evenly 2xl:justify-between bg-white rounded-[30px] flex lg:hidden",
        {
          "scale-y-0 rounded-none transition-all duration-200":
            isScrolling && pathname.includes("/properties"),
          "shadow-2xl": isScrolling,
        }
      )}>
        <Link href={"/"}>
          <Image
            src={"/images/logo-cejas-2.png"}
            alt="logo"
            width={140}
            height={140}
            className="cursor-pointer"
          />
        </Link>
        <ul className="2xl:w-2/3 w-5/6 h-full flex items-center justify-center flex-row gap-12">
          {navItems.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ul>
      </nav>

      <div className="w-full h-max lg:flex hidden items-center justify-between px-8 sm:px-0 overflow-hidden">
        <Link href={"/"}>
          <Image
            src={"/images/logo-cejas-2.png"}
            alt="logo"
            width={140}
            height={140}
            className="cursor-pointer"
          />
        </Link>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <BarsIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      <aside
        className={cn(
          "fixed top-0 left-0 w-[70%] h-screen bg-white hidden lg:flex flex-col transform transition-transform duration-500 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col items-center mt-20">
          <ul className="flex flex-col items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link} onClick={() => setIsOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </header>
  )
}

export default Navbar
