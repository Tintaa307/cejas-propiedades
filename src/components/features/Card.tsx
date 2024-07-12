import Image from "next/image"
import React from "react"
import Button from "../button/Button"

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
    <li className="w-[90%] h-max flex items-center justify-center flex-row">
      <article className="w-1/2 h-max flex items-center justify-center flex-col">
        <div className="w-[90%] h-max flex items-start justify-center flex-col gap-12">
          <h5 className="text-white text-3xl font-medium">{title}</h5>
          <p className="text-white/80 w-4/5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            enim vero explicabo culpa, natus soluta provident ab consequuntur
            deserunt consequatur eum magni quos quod optio veniam nam
            praesentium mollitia odit temporibus fuga. Praesentium natus
            repudiandae officiis animi, reiciendis architecto impedit! quod
            optio veniam nam praesentium mollitia odit temporibus fuga.
            Praesentium natus repudiandae officiis animi, reiciendis architecto
            impedit!
          </p>
          <ul className="w-full flex flex-row gap-4">
            {specifications.map((specification, idx) => (
              <li key={idx} className="w-max flex flex-row gap-4">
                {specification.icon}
                <p className="text-white text-base font-medium">
                  {specification.text}
                </p>
              </li>
            ))}
          </ul>
          <footer className="w-full h-max flex items-start justify-start">
            <Button className="px-5 py-3 hover:bg-white hover:text-black border-white text-white">
              Mas detalles
            </Button>
          </footer>
        </div>
      </article>
      <picture className="w-1/2 h-max flex items-center justify-end">
        <Image
          src={image}
          alt="image-features"
          width={500}
          height={500}
          className="rounded-[30px]"
        />
      </picture>
    </li>
  )
}

export default Card
