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
      <Title className="flex flex-row items-center gap-3 text-primary_green text-5xl font-normal">
        <IconMap size={40} className="text-primary_green" />
        Ubicacion en mapa
      </Title>
      <InteractiveMap work={map} />
    </article>
  )
}

export default Map
