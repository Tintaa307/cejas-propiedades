import { cn } from "@/lib/utils"
import React from "react"

type CardContentProps = {
  className?: string
  title: string
  content: string
}

const CardContent = ({ className, title, content }: CardContentProps) => {
  return (
    <div
      className={cn(
        "w-1/2 h-max flex items-center justify-center flex-col gap-4 border-[1.5px] border-black rounded-tr-md",
        className
      )}
    >
      <strong className="mt-[10px]">{title}</strong>
      <div className="w-full h-[1px] bg-black" />
      <span className="text-sm mb-[10px]">{content}</span>
    </div>
  )
}

export default CardContent
