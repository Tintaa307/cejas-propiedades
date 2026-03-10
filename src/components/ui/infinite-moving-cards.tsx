"use client"

import { cn } from "@/lib/utils"
import React, { type JSX, useEffect, useState } from "react"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string
    description: string
    icon: JSX.Element
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)
  const repeatedItems = [...items, ...items]

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      )
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      )
    }
    setStart(true)
  }, [direction, speed])

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-[95rem] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {repeatedItems.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-3xl flex-shrink-0 px-8 py-6 md:w-[350px] border border-primary_green/20 bg-cream flex flex-col items-center justify-center"
            key={`${item.title}-${idx}`}
          >
            <main className="w-full h-max flex items-center justify-center flex-col gap-4">
              <div className="w-16 h-16 bg-primary_green rounded-full flex items-center justify-center">
                {React.cloneElement(item.icon, {
                  className: "text-cream",
                  size: 28,
                })}
              </div>
              <h4 className="text-primary_green text-xl font-medium text-center">
                {item.title}
              </h4>
              <p className="text-primary_green/80 text-sm text-center">
                {item.description}
              </p>
            </main>
          </li>
        ))}
      </ul>
    </div>
  )
}
