import React from "react"
import Title from "../title/Title"
import Card from "./Card"

const Sections = () => {
  return (
    <section
      id="inmuebles"
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="w-[90%] flex items-center justify-center flex-col gap-20 sm:gap-6">
        <Title className="mt-0 sm:text-center">
          Inmuebles en <span className="text-[#BF0909]">venta</span>
        </Title>
        <article className="w-full h-max grid grid-cols-2 place-items-center my-12 3xl:gap-12 xl:grid-cols-1">
          <Card
            title="Campos y chacras"
            filter="chacra"
            path="/images/img-campos-chacras.jpg"
            description="En esta seccion se encuentran todos los campos y chacras disponibles para la venta. Cualquier consulta no dude en contactarnos."
          />
          <Card
            title="Lotes"
            filter="lote"
            path="/images/img-loteos.jpg"
            description="En esta seccion se encuentran 
          todos los lotes disponibles para la venta. Cualquier consulta no dude en contactarnos."
          />
        </article>
      </div>
    </section>
  )
}

export default Sections
