import Link from "next/link"
import React from "react"

const Landing = () => {
  return (
    <main className="w-full h-[calc(100vh_-_80px)] flex items-center justify-center bg-[url('/images/image-empty.svg')] bg-cover bg-center">
      <section className="w-full h-full flex items-center justify-start flex-row bg-black bg-opacity-30">
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
              className="w-max h-max py-2 px-8 rounded-md text-white border-white border-[1px] mt-5 text-lg"
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
