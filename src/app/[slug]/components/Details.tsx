import Title from "@/components/title/Title"
import { Property } from "@/types/types"
import { RiMapPinLine } from "@remixicon/react"
import { IconCheck, IconListDetails, IconHomeEdit } from "@tabler/icons-react"
import React, { useEffect, useState } from "react"
import Col from "./Col"

type DetailsProps = {
  details: string[]
  location: string
  properties?: Property[]
}

const Table = ({
  fraccionA,
  fraccionB,
  fraccionC,
}: {
  fraccionA: Property | undefined
  fraccionB: Property | undefined
  fraccionC: Property | undefined
}) => {
  return (
    <div className="w-[90%] 2xl:w-[75%] h-max flex items-start justify-center flex-row gap-24">
      <Col fraccion={fraccionA} />
      <Col fraccion={fraccionB} />
      <Col fraccion={fraccionC} />
    </div>
  )
}

const Details = ({ details, location, properties }: DetailsProps) => {
  const [fraccionA, setFraccionA] = useState<Property | undefined>(undefined)
  const [fraccionB, setFraccionB] = useState<Property | undefined>(undefined)
  const [fraccionC, setFraccionC] = useState<Property | undefined>(undefined)

  useEffect(() => {
    const A = properties?.find((property) => property.title === "Fraccion 1A")
    const B = properties?.find((property) => property.title === "Fraccion 1B")
    const C = properties?.find((property) => property.title === "Fraccion 1C")

    if (!A && !B && !C) return

    setFraccionA(A)
    setFraccionB(B)
    setFraccionC(C)
  }, [properties])

  useEffect(() => {
    console.log(fraccionA)
  }, [fraccionA])

  return (
    <article className="w-full h-max flex items-center justify-center flex-col gap-24">
      <div className="w-full h-max flex items-center justify-center text-justify flex-col gap-8">
        <Title className="flex flex-row items-center gap-5 text-black text-4xl font-bold">
          <RiMapPinLine size={40} className="text-black" />
          Ubicacion
        </Title>
        <p className="w-[40%] text-black/80 text-lg font-normal">{location}</p>
      </div>
      {properties && (
        <div className="w-full h-max flex items-center justify-center flex-col gap-12">
          <Title className="flex flex-row items-center gap-5 text-black text-4xl font-bold">
            <IconHomeEdit size={40} className="text-black" />
            Características
          </Title>
          <article className="w-full h-max flex items-center justify-center flex-row">
            <Table
              fraccionA={fraccionA}
              fraccionB={fraccionB}
              fraccionC={fraccionC}
            />
          </article>
        </div>
      )}
      <div className="w-full h-max flex items-center justify-center flex-col gap-6">
        <Title className="flex flex-row items-center gap-5 text-black text-4xl font-bold">
          <IconListDetails size={40} className="text-black" />
          Detalles
        </Title>
        <ul className="w-[40%] flex flex-col gap-4">
          {details.map((detail, index) => (
            <li
              key={index}
              className="text-black text-lg font-normal flex items-center justify-start flex-row gap-2"
            >
              <IconCheck size={25} className="" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default Details
