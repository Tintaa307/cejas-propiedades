import Image from "next/image"
import React from "react"

type PresentationProps = {
  title: string
}

const Presentation = ({ title }: PresentationProps) => {
  return (
    <figure className="w-full h-screen flex items-center justify-center bg-black bg-opacity-30">
      <Image
        src={"/images/work-example-1.png"}
        alt="image-example"
        width={400}
        height={400}
        className="absolute top-0 left-0 w-full h-[calc(100vh-80px)] mt-20 object-cover object-center -z-10"
      />
      <figcaption className="relative text-5xl text-white font-semibold z-20">
        {title}
      </figcaption>
    </figure>
  )
}

export default Presentation
