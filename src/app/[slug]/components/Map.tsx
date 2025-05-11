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
    <article className="w-full h-max flex items-center justify-center flex-col gap-24 max-lg:hidden">
      <Title className="flex flex-row items-center gap-3 text-primary_green text-5xl max-sm:text-2xl text-center font-normal">
        Ubicacion en mapa
      </Title>
      <InteractiveMap work={map} />
    </article>
  )
}

export default Map
