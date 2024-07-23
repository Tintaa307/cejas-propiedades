import React from "react"
import Title from "../title/Title"
import Button from "../button/Button"
import { BatchProps } from "@/types/types"
import Item from "./Item"

type ItemProps = {
  data: BatchProps[]
}

const Properties = ({ data }: ItemProps) => {
  return (
    <section className="w-full h-max flex items-center justify-center">
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-12">
        <div className="w-full h-max flex items-center justify-center">
          <Title>Inmuebles en Venta</Title>
        </div>
        <main className="w-full h-max flex items-center justify-center">
          <ul className="grid grid-cols-3 place-content-center gap-16">
            {data.map((property, index) => (
              <Item key={index} index={index} property={property} />
            ))}
          </ul>
        </main>
        <div className="w-full h-max flex items-center justify-center">
          <Button className="px-7 py-3 text-lg mb-2 hover:bg-opacity-90 bg-black text-white">
            Ver Todas
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Properties
