"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      title: "Sobre Nosotros",
      link: "/#sobre-nosotros",
    },
    {
      title: "Servicios",
      link: "/#servicios",
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
      title: "Desarrollos",
      link: "/#desarrollos",
    },
    {
      title: "Ubicacion",
      link: "/#ubicacion",
    },
    {
      title: "Inmuebles",
      link: "/#inmuebles",
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

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div className="w-full flex justify-center fixed top-10 z-50">
      <header
        className={cn(
          "w-[80%] rounded-xl transition-all duration-300 bg-cream",
          isScrolling ? "shadow-md border border-primary_green" : ""
        )}
      >
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/new-logo.png"
                alt="CEJAS PROPIEDADES"
                width={120}
                height={40}
                className="h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-primary_green hover:text-primary_green/80 py-2 text-sm lg:text-base font-medium transition-colors whitespace-nowrap"
                >
                  {item.title}
                </Link>
              ))}
              <Button
                asChild
                className="bg-primary_green hover:bg-primary_green/90 text-cream rounded-md px-4 lg:px-6 whitespace-nowrap"
              >
                <Link href="/#contacto">Contacto</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button with Sheet */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden focus:outline-none"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  <Menu className="h-6 w-6 text-primary_green" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-cream p-0 w-[80%] sm:w-[350px]"
              >
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-primary_green/20">
                    <Image
                      src="/new-logo.png"
                      alt="CEJAS PROPIEDADES"
                      width={100}
                      height={30}
                      className="h-auto"
                    />
                  </div>
                  <nav className="flex flex-col p-4 space-y-4 flex-grow">
                    {navItems
                      .filter((item) => item.title !== "Ubicacion")
                      .map((item, index) => (
                        <Link
                          key={index}
                          href={item.link}
                          className="text-primary_green hover:text-primary_green/80 py-2 text-base font-medium border-b border-primary_green/10 pb-3"
                          onClick={handleLinkClick}
                        >
                          {item.title}
                        </Link>
                      ))}
                  </nav>
                  <div className="p-4 mt-auto border-t border-primary_green/20">
                    <Button
                      asChild
                      className="bg-primary_green hover:bg-primary_green/90 text-cream rounded-md w-full"
                    >
                      <Link href="/#contacto" onClick={handleLinkClick}>
                        Contacto
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
