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
    <main className="w-full h-screen">
      <section className="w-full h-full flex items-center justify-start bg-black bg-opacity-50">
        <div className="absolute w-full top-0 left-0 h-[calc(100vh-80px)] mt-20 -z-10">
          <Swiper
            className="w-full h-full"
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
          <div className="w-[90%] flex flex-col gap-3 animate-fade-in-down">
            <h1 className="text-white 2xl:text-5xl lg:text-3xl font-bold flex flex-col gap-3">
              <span className="uppercase">construyendo tus sueños</span>
              <span className="uppercase">encontrando tu hogar</span>
            </h1>
            <p className="w-[40%] text-white/70 text-base font-normal">
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
