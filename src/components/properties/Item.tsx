"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

type ItemProps = {
  index: number
  property: {
    src: string
    location: string
    land_size: string
    beds: string
    baths: string
    icons: JSX.Element[]
    price: string
  }
}

const Item = ({ index, property }: ItemProps) => {
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
      className="flex flex-col gap-4"
    >
      <Image
        src={property.src}
        alt={property.src}
        width={400}
        height={400}
        className="rounded-[40px]"
      />
      <div className="w-full h-max flex items-center justify-start flex-row gap-4">
        {property.icons[0]}
        <h4 className="text-black text-base font-medium">
          {property.location}
        </h4>
      </div>
      <article className="w-full h-max flex items-center justify-between flex-row gap-4">
        <div className="flex flex-row gap-3">
          {property.icons[1]}
          <h4 className="text-black text-base font-medium">
            {property.land_size}
          </h4>
        </div>
        <div className="flex flex-row gap-3">
          {property.icons[2]}
          <h4 className="text-black text-base font-medium">{property.beds}</h4>
        </div>
        <div className="flex flex-row gap-3">
          {property.icons[3]}
          <h4 className="text-black text-base font-medium">{property.baths}</h4>
        </div>
      </article>
      <footer className="w-full h-max flex items-center justify-between">
        <strong className="text-xl">{property.price}</strong>
        <button className="w-max h-max flex items-center justify-center text-black text-lg font-normal border-[2px] border-black rounded-[15px] px-5 py-3 hover:bg-black hover:text-white transition-all duration-150">
          Más detalles
        </button>
      </footer>
    </motion.li>
  )
}

export default Item
