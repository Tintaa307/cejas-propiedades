import Image from "next/image"
import React from "react"

type PresentationProps = {
  title: string
  video: string
}

const Presentation = ({ title, video }: PresentationProps) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black bg-opacity-30">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-[calc(100vh-80px)] mt-20 object-cover object-center -z-10"
      >
        <source src={video} type="video/mp4" />
      </video>
      <h4 className="relative text-5xl text-white font-semibold z-20 opacity-0">
        {title}
      </h4>
    </div>
  )
}

export default Presentation
