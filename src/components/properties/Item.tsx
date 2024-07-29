"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import Button from "../button/Button"
import { IconMap } from "@tabler/icons-react"
import { RiMapPinLine } from "@remixicon/react"

type ItemProps = {
  index: number
  property: {
    props: string
    address: string
    site: string
    price: string
    location: string
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
      className="max-w-[400px] flex flex-col gap-4"
    >
      <Image
        src={"/images/image-2.png"}
        alt={"Image of the property"}
        width={400}
        height={400}
        className="rounded-[40px]"
      />
      <div className="w-full h-max flex items-center justify-between flex-row">
        <div className="flex flex-row gap-2">
          <RiMapPinLine />
          <h4 className="text-black text-base font-medium">
            {property.address.length > 14
              ? property.address.slice(0, 14) + "..."
              : property.address}
          </h4>
        </div>
        <div className="flex flex-row gap-2">
          <IconMap />
          <h4 className="text-black text-base font-medium">
            {property.site.length > 11
              ? property.site.slice(0, 11) + "..."
              : property.site}
          </h4>
        </div>
      </div>
      <article className="w-full h-max flex items-center justify-between flex-row gap-4"></article>
      <footer className="w-full h-max flex items-center justify-between">
        <strong className="text-xl">
          {property.price.replace(",", ".")} USD
        </strong>
        <Button className="px-5 py-3 hover:bg-black hover:text-white">
          Mas detalles
        </Button>
      </footer>
    </motion.li>
  )
}

export default Item
