"use client"

import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import React from "react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const Landing = () => {
  const videos = [
    "/videos/paneo-gardenias.mp4",
    "/videos/paneo-canada2.mp4",
    "/videos/paneo-retiro.mp4",
  ]

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <section className="w-[98%] h-[97vh] flex items-center justify-center bg-black bg-opacity-50 rounded-[84px]">
        <div className="absolute w-[98%] h-[97vh] flex items-center justify-center -z-10">
          <Swiper
            className="w-full h-full rounded-[84px]"
            centeredSlides={true}
            autoplay={{
              delay: 3400,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <video
                  autoPlay
                  muted
                  loop
                  className="absolute w-full h-full object-cover"
                >
                  <source src={video} type="video/mp4" />
                </video>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <article className="relative w-full h-full flex items-center justify-center flex-col lg:gap-5">
          <div className="absolute bottom-20 left-20 animate-fade-in-down text-left">
            <h1 className="text-white 2xl:text-5xl lg:text-3xl font-bold flex flex-col gap-3">
              <span className="uppercase">construyendo tus sueños</span>
              <span className="uppercase">encontrando tu hogar</span>
            </h1>
          </div>
          <div className="absolute w-max h-max bottom-20 right-20">
            <Link
              href={"#"}
              className="w-max h-max py-4 px-8 rounded-md border-[1px] mt-5 text-lg text-white bg-black border-black transition-all duration-150"
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
