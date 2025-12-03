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
        "w-1/2 min-w-0 h-max flex items-center justify-center flex-col gap-1 md:gap-2 lg:gap-4 border-[1.5px] border-black rounded-tr-md overflow-hidden",
        className
      )}
    >
      <strong className="mt-0.5 md:mt-1 lg:mt-[10px] text-[10px] md:text-xs lg:text-sm px-0.5 md:px-1 text-center leading-tight">
        {title}
      </strong>
      <div className="w-full h-[1px] bg-black" />
      <span className="text-[10px] md:text-xs lg:text-sm mb-0.5 md:mb-1 lg:mb-[10px] px-0.5 md:px-1 text-center leading-tight break-words">
        {content}
      </span>
    </div>
  )
}

export default CardContent
