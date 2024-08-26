import React from "react"

type PresentationProps = {
  title: string
  video: string
  isSold: boolean
}

const Presentation = ({ title, video, isSold }: PresentationProps) => {
  return (
    <div className="w-full h-screen flex items-start justify-start bg-black bg-opacity-30">
      {!isSold ? (
        <>
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-screen object-cover object-center -z-10"
          >
            <source src={video} type="video/mp4" />
          </video>
          <h4 className="relative text-5xl text-white font-semibold z-20 opacity-0">
            {title}
          </h4>
        </>
      ) : (
        <div className="w-full h-screen bg-white/60 flex items-center justify-center">
          <h1 className="text-[#BF0909] text-6xl font-bold">Vendido!</h1>
        </div>
      )}
    </div>
  )
}

export default Presentation
