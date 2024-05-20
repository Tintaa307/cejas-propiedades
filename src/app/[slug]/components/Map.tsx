import Title from "@/components/title/Title"
import { IconMap } from "@tabler/icons-react"
import Image from "next/image"
import React from "react"

type MapProps = {
  map: string
}

const Map = ({ map }: { map: string }) => {
  return (
    <article className="w-full h-max flex items-center justify-center flex-col gap-24">
      <Title className="flex flex-row items-center gap-3 text-black text-4xl font-bold">
        <IconMap size={40} className="text-black" />
        Ubicacion en mapa
      </Title>
      <figure className="w-full h-max flex items-center justify-center">
        <Image
          src={"/images/gral-map-1.jpg"}
          alt="map"
          width={500}
          height={500}
          className="w-2/3 object-cover rounded-2xl"
        />
      </figure>
    </article>
  )
}

export default Map
