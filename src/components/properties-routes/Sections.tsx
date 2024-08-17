import React from "react"
import Title from "../title/Title"
import Card from "./Card"

const Sections = () => {
  return (
    <section
      id="inmuebles"
      className="w-full h-max flex items-center justify-center"
    >
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-20">
        <Title className="mt-0">
          Inmuebles en <span className="text-[#BF0909]">venta</span>
        </Title>
        <article className="w-full h-max flex items-center justify-center flex-row my-12">
          <Card />
          <Card />
        </article>
      </div>
    </section>
  )
}

export default Sections
