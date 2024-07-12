"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"

const Landing = () => {
  const [video, setVideo] = useState<string>("")
  const [counter, setCounter] = useState<number>(0)

  const videos = [
    "/videos/paneo-gardenias.mp4",
    "/videos/paneo-canada2.mp4",
    "/videos/paneo-retiro.mp4",
  ]

  useEffect(() => {
    setInterval(() => {
      if (counter < 3) {
        setCounter(counter + 1)
      } else {
        setCounter(0)
      }
    }, 5000)

    setVideo(videos[counter])
  }, [video, counter])

  useEffect(() => {
    console.log(video, counter)
  })

  return (
    <main className="w-full h-screen">
      <section className="w-full h-full flex items-center justify-start bg-black bg-opacity-30">
        <video
          autoPlay
          muted
          loop
          className="w-full absolute top-0 left-0 h-[calc(100vh-80px)] mt-20 object-cover -z-10"
        >
          <source src={video} type="video/mp4" />
        </video>
        <article className="relative w-full h-full flex items-center justify-center flex-col lg:gap-5">
          <div className="w-[90%] flex flex-col gap-3 animate-fade-in-down">
            <h1 className="text-white 2xl:text-5xl lg:text-3xl font-bold flex flex-col gap-3">
              <span>ENCONTRÁ TU SUEÑO</span>
              <span>EN CEJAS PROPIEDADES</span>
            </h1>
            <p className="w-1/3 text-grey text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore.
            </p>
            <Link
              href={"#"}
              className="w-max h-max py-2 px-8 rounded-md border-[1px] mt-5 text-lg text-white bg-black border-black hover:bg-opacity-90 transition-all duration-150"
            >
              Ver desarrollos
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Landing
