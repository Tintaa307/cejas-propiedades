import Image from "next/image"
import Link from "next/link"
import React from "react"

const Card = ({
  title,
  path,
  description,
  filter,
}: {
  title: string
  path: string
  description: string
  filter: string
}) => {
  return (
    <div className="w-full h-max flex items-center justify-center">
      <Link
        href={`/properties/?filter=${filter}`}
        className="relative w-2/3 h-[60vh] rounded-[32px] border-border border shadow-2xl cursor-pointer 3xl:w-[550px] xl:3xl:w-[600px]"
      >
        <div className="w-full h-full">
          <footer className="absolute bottom-0 w-full h-1/3 sm:h-[40%] bg-black/95 rounded-b-[32px] flex items-center justify-center">
            <div className="w-[90%] h-max flex flex-col gap-4 sm:gap-2">
              <h5 className="text-white text-2xl sm:text-xl font-semibold">{title}</h5>
              <p className="w-3/4 sm:w-full text-white/60 sm:text-sm">{description}</p>
              <small className="text-white">+15 propiedades</small>
            </div>
          </footer>
          <Image
            className="w-full h-full rounded-[32px]"
            src={path}
            alt="image"
            width={500}
            height={700}
          />
        </div>
      </Link>
    </div>
  )
}

export default Card
