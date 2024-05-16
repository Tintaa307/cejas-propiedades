"use client"

import React, { useEffect, useState } from "react"
import Title from "../title/Title"
import { useMotionValueEvent, useScroll } from "framer-motion"

const Information = () => {
  const [salesNumber, setSalesNumber] = useState(0)
  const { scrollY } = useScroll()
  const [scroll, setScroll] = useState(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest)
  })

  useEffect(() => {
    console.log(scroll)
    if (scroll >= 2273) {
      if (salesNumber < 6) {
        setTimeout(() => {
          setSalesNumber(salesNumber + 1)
        }, 150)
      }
    }
  }, [salesNumber, scroll])

  return (
    <article className="w-full h-max flex items-center justify-center flex-col gap-24">
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-14">
        <div className="w-[300px] h-[220px] flex items-center justify-center bg-black rounded-[40px] flex-col gap-4">
          <h2 className="text-7xl font-bold text-white">{salesNumber}%</h2>
          <p className="text-base text-white/80 font-normal">
            Terrenos vendidos
          </p>
        </div>
      </div>
    </article>
  )
}

export default Information
