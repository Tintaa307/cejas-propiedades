import { cn } from "@/lib/utils"
import React from "react"

type ButtonProps = {
  text?: string
  className: string
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ text, className, children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-max h-max flex items-center justify-center text-black text-lg font-normal border-[2px] border-black rounded-[15px] transition-all duration-150",
        className
      )}
    >
      {text ?? children}
    </button>
  )
}

export default Button
