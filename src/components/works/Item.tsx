"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

type ItemProps = {
  index: number
  title: string
  src: string
  link: string
  isSold: boolean
}

const Item = ({ index, title, link, src, isSold }: ItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
        delay: 0.1 + index * 0.1,
      }}
      viewport={{ once: true }}
      className="relative w-full h-max flex items-center justify-center flex-col"
    >
      <Link href={link} className="relative w-max h-max overflow-hidden">
        <picture className="w-[370px] h-[324px]">
          <Image
            src={src}
            alt={title}
            className="w-full h-full rounded-[30px] cursor-pointer hover:-translate-y-1 transition-all duration-150"
            width={1290}
            height={324}
          />
        </picture>
        {isSold && (
          <div className="absolute top-6 -right-14 w-52 h-12 bg-[#BF0909] rotate-45 flex items-center justify-center">
            <strong className="text-white">Vendido!</strong>
          </div>
        )}
      </Link>
      <strong className="text-black text-2xl font-bold mt-5 shadow-none">
        {title}
      </strong>
    </motion.li>
  )
}

export default Item
