import Image from "next/image"
import React from "react"
import Button from "../button/Button"
import { IconMap } from "@tabler/icons-react"
import { RiMapPinLine } from "@remixicon/react"

type CardProps = {
  title: string
  image: string
  description: string
  price: {
    original: string
    discount: string
  }
  isInOffer: boolean
  location: string
  site: string
}

const Card = ({
  image,
  price,
  title,
  isInOffer,
  site,
  location,
  description,
}: CardProps) => {
  return (
    <li className="w-[90%] h-max flex items-center justify-center flex-row">
      <article className="w-1/2 h-max flex items-center justify-center flex-col">
        <div className="w-[90%] h-max flex items-start justify-center flex-col">
          <h5 className="text-white text-3xl font-medium mb-5">{title}</h5>
          <p className="text-white/80 w-4/5 mb-8">{description}</p>
          <div className="flex flex-row justify-between gap-14 mb-8">
            <p className="text-white text-lg font-normal flex flex-row gap-2">
              <RiMapPinLine size={30} /> {location}
            </p>
            <p className="text-white text-lg font-normal mb-5 flex flex-row gap-2">
              <IconMap size={30} />
              {site}
            </p>
          </div>
          <footer className="w-full h-max flex items-start justify-start flex-row gap-56">
            <div className="">
              <p className="text-white text-2xl font-semibold mb-3">
                {price.discount}
              </p>
              <p className="text-white/80 text-sm font-semibold line-through">
                {price.original}
              </p>
            </div>
            <Button className="px-5 py-3 hover:bg-white hover:text-black border-white text-white">
              Mas detalles
            </Button>
          </footer>
        </div>
      </article>
      <picture className="w-1/2 h-max flex items-center justify-end">
        <div className="relative w-max h-max overflow-hidden">
          <Image
            src={image}
            alt="image-features"
            width={500}
            height={500}
            className="relative rounded-[30px]"
          />
          {isInOffer ? (
            <div className="absolute w-2/3 h-16 top-14 left-60 rotate-45 bg-red bg-opacity-90 flex items-center justify-center">
              <h2 className="text-white font-semibold text-2xl uppercase rotate-2">
                Nuevo Valor!
              </h2>
            </div>
          ) : null}
        </div>
      </picture>
    </li>
  )
}

export default Card
