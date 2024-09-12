import { cn } from "@/lib/utils"
import React from "react"

type InputProps = {
  type: string
  placeholder: string
  name: string
  className?: string
}
const Input = ({ placeholder, type, name, className }: InputProps) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={cn(
        "w-2/3 sm:w-5/6 h-12 px-4 bg-[#070707] bg-transparent border-[1px] border-black/80 rounded-md placeholder:text-black/80 text-sm text-black/80 font-medium outline-none focus:outline-2 focus:outline-black/80 transition-all duration-200 py-2 resize-none shadow-[0_4px_8px_#d9d9d9]",
        className
      )}
    />
  )
}

export default Input
