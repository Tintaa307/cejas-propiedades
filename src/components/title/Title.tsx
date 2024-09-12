import { cn } from "@/lib/utils"
import React from "react"

type TitleProps = {
  text?: string
  className?: string
  children: React.ReactNode
}

const Title = ({ text, className, children }: TitleProps) => {
  return (
    <h3 className={cn("text-black font-bold text-4xl mt-24 sm:mt-16", className)}>
      {children}
      {text}
    </h3>
  )
}

export default Title
