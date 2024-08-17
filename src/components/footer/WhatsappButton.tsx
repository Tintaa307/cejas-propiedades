"use client"

import { cn } from "@/lib/utils"
import { RiWhatsappLine } from "@remixicon/react"
import { Link } from "lucide-react"
import React, { useEffect, useState } from "react"

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
    <RiWhatsappLine
      size={55}
      className={cn(
        "fixed bg-white opacity-0 cursor-pointer p-2 rounded-full transition-all duration-150 bottom-32 right-12 shadow-[0_0_10px_#d9d9d9]",
        {
          "opacity-100": isScrolling,
        }
      )}
    />
  )
}

export default WhatsappButton
