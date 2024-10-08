import Title from "@/components/title/Title"
import { IconMap } from "@tabler/icons-react"
import Image from "next/image"
import React from "react"
import InteractiveMap from "@/components/map/Map"

type MapProps = {
  map: string
}

const Map = ({ map }: { map: string }) => {
  return (
    <article className="w-full h-max flex items-center justify-center flex-col gap-24 xxl:hidden">
      <Title className="flex flex-row items-center gap-3 text-black text-4xl font-bold">
        <IconMap size={40} className="text-black" />
        Ubicacion en mapa
      </Title>
      <InteractiveMap work={map} />
    </article>
  )
}

export default Map
