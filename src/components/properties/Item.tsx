"use client"

import Image from "next/image"
import React, { useEffect } from "react"
import Button from "../button/Button"
import { IconMap } from "@tabler/icons-react"
import { RiMapPinLine } from "@remixicon/react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

type ItemProps = {
  index: number
  property: {
    id: string
    description: string
    address: string
    site: string
    price: string
    location: string
    onsale: boolean
    type: string
    public_url: string
  }
}

const Item = ({ index, property }: ItemProps) => {
  const router = useRouter()

  return (
    <motion.li
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
        delay: 0.1 + index * 0.02,
      }}
      viewport={{ once: true }}
      className="w-[400px] flex flex-col gap-4 border border-black/20 shadow-lg p-5 rounded-3xl sm:w-[350px]"
    >
      {property.address !== "6 has" ? (
        <Image
          src={property.public_url}
          alt={"Propiedad en " + property.site}
          width={400}
          height={400}
          className="w-[500px] h-[300px] relative rounded-[40px] object-cover"
        />
      ) : (
        <div className="w-[500px] h-[300px] relative rounded-[40px]">
          <strong className="text-red text-xl">Coming soon!</strong>
        </div>
      )}

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
        <Button
          onClick={() => router.push(`/properties/${property.id}`)}
          className="px-5 py-3 hover:bg-black hover:text-white"
        >
          Mas detalles
        </Button>
      </footer>
    </motion.li>
  )
}

export default Item
