"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"

const WhatsappButton = () => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
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
    <Link
      href="https://wa.me/+5491133683251"
      target="_blank"
      aria-label="WhatsApp"
    >
      <div
        className={cn(
          "fixed z-50 bottom-8 right-8 w-16 h-16 md:w-20 md:h-20 bg-primary_green rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:bg-primary_green/90 hover:scale-105",
          {
            "opacity-0": !isScrolling,
            "opacity-100": isScrolling,
          }
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
      </div>
    </Link>
  )
}

export default WhatsappButton
