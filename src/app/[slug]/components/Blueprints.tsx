import Title from "@/components/title/Title"
import { IconReceipt2 } from "@tabler/icons-react"
import Image from "next/image"
import React from "react"

type BlueprintsProps = {
  blueprints: string[]
}

const Blueprints = ({ blueprints }: BlueprintsProps) => {
  return (
    <article className="w-full h-max flex items-center justify-center flex-col gap-24">
      <Title className="flex flex-row items-center gap-3 text-black text-3xl font-bold">
        <IconReceipt2 size={40} className="text-black" />
        Plano General y Precios
      </Title>
      <figure className="w-full h-max flex items-center justify-center">
        <Image
          src={blueprints[0]}
          alt="planos"
          width={300}
          height={700}
          className="mb-24"
        />
      </figure>
    </article>
  )
}

export default Blueprints
