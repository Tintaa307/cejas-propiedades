import React from "react"
import Title from "../title/Title"

const Sections = () => {
  return (
    <section className="w-full h-max flex items-center justify-center">
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-12">
        <Title className="mt-0">Inmuebles en venta</Title>
        <article className="w-full h-max flex items-center justify-center flex-row">
          <div className="w-1/2 h-[50vh] flex items-center justify-center bg-[#13131A]">
            <h5 className="text-white text-3xl font-semibold">
              Campos y Chacras
            </h5>
          </div>
          <div className="w-1/2 h-[50vh] flex items-center justify-center bg-black">
            <h5 className="text-white text-3xl font-semibold">Urbano</h5>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Sections
