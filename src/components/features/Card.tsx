import Image from "next/image"
import React from "react"

type CardProps = {
  title: string
  image: string
  specifications: {
    icon: JSX.Element
    text: string
  }[]
  price: {
    original: string
    discount: string
  }
}

const Card = ({ image, price, specifications, title }: CardProps) => {
  return (
    <li className="flex flex-col gap-4 bg-white shadow-[0_0_10px_#000] rounded-[30px]">
      <picture className="w-full h-max">
        <Image
          src={image}
          alt="image-features"
          width={400}
          height={400}
          className="rounded-t-[30px]"
        />
      </picture>
      <article className="w-full h-max flex items-center justify-center flex-col">
        <div className="w-[90%] h-max flex items-start justify-center flex-col gap-6">
          <h5 className="text-black text-xl font-medium">{title}</h5>
          <ul className="w-full flex flex-col gap-4">
            {specifications.map((specification, idx) => (
              <li key={idx} className="w-max flex flex-row gap-4">
                {specification.icon}
                <p className="text-black text-base font-medium">
                  {specification.text}
                </p>
              </li>
            ))}
          </ul>
          <footer className="w-full h-max flex items-center justify-between mb-6">
            <div className="w-1/2 h-max flex items-start justify-start flex-col">
              <p className="relative text-black/80 font-bold text-base flex items-center justify-center">
                {price.original}
                <span className="absolute w-full h-[2px] bg-red" />
              </p>
              <p className="text-black font-bold text-lg flex items-center justify-center">
                {price.discount}
              </p>
            </div>
            <button className="w-max h-max flex items-center justify-center text-black text-lg font-normal border-[2px] border-black rounded-[15px] px-5 py-3 hover:bg-black hover:text-white transition-all duration-150">
              Más detalles
            </button>
          </footer>
        </div>
      </article>
    </li>
  )
}

export default Card
