import { IconSatellite } from "@tabler/icons-react"
import React, { useEffect } from "react"
import Slider from "./Slider"
import Title from "@/components/title/Title"

type GalleryProps = {
  imgs: string[]
}

const Gallery = ({ imgs }: GalleryProps) => {
  useEffect(() => {
    console.log(imgs)
  }, [imgs])
  return (
    <article className="w-full h-max flex items-center justify-center flex-col gap-12">
      <div className="w-full h-max flex items-center justify-center flex-col gap-4 ">

        <Title className="flex flex-row items-center gap-3 sm:w-[85%] text-black text-4xl sm:text-xl sm:text-center sm:gap-3 font-bold">
          <IconSatellite size={40} className="text-black sm:hidden" />
          Imágenes Satelitales y Terrestres
        </Title>

        <p className="w-[40%] text-black/80 text-lg font-normal text-center 3xl:w-[80%] sm:text-xs">
          Explora la propiedad desde arriba y desde la tierra. Compare imágenes
          de satélite con fotografías de la vida real de los mismos lugares.
        </p>
      </div>
      <div className="w-full h-max flex items-center justify-center flex-row gap-28">
        <Slider imgs={imgs} />
      </div>
    </article>
  )
}

export default Gallery
