import { cn } from "@/lib/utils"
import React from "react"

type TitleProps = {
  text: string
  className?: string
}

const Title = ({ text, className }: TitleProps) => {
  return (
    <h3 className={cn("text-black font-bold text-4xl mt-24", className)}>
      {text}
    </h3>
  )
}

export default Title
