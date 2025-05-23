import React from "react"
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
  console.log(src)

  return (
    <li className="relative w-full h-max flex items-center justify-center flex-col">
      <Link
        href={link}
        className="relative w-full h-max overflow-hidden shadow-[0px_3px_10px_#B7B7B7] rounded-[30px]"
      >
        <picture className="relative w-max h-max">
          {!src.includes("comarca") ? (
            <Image
              src={src}
              alt={title}
              className="relative w-full h-[250px] object-cover rounded-[30px] cursor-pointer"
              width={1290}
              height={1290}
            />
          ) : (
            <div className="relative w-full h-[250px] flex items-center justify-center object-cover rounded-[30px] cursor-pointer">
              <strong className="text-black text-2xl underline text-center">
                Desarrollo vendido <br /> ¡Conoce más!
              </strong>
            </div>
          )}
          <div className="absolute w-full h-full bg-black/40 inset-0 rounded-[30px]" />
          <strong className="absolute bottom-8 left-8 text-white text-2xl font-bold mt-5 shadow-none">
            {title}
          </strong>
        </picture>
        {isSold && (
          <div className="absolute top-6 -right-14 w-52 h-12 bg-[#BF0909] rotate-45 flex items-center justify-center">
            <strong className="text-white">Vendido!</strong>
          </div>
        )}
      </Link>
    </li>
  )
}

export default Item
