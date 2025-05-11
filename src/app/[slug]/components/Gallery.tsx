import { IconSatellite } from "@tabler/icons-react"
import Slider from "./Slider"
import Title from "@/components/title/Title"

type GalleryProps = {
  imgs: string[]
}

const Gallery = ({ imgs }: GalleryProps) => {
  return (
    <article className="w-full h-max flex items-center justify-center flex-col gap-10 py-16 bg-cream">
      <div className="w-full h-max flex items-center justify-center flex-col gap-4">
        <Title className="text-primary_green text-5xl font-normal flex items-center gap-3">
          <IconSatellite
            size={36}
            className="text-primary_green md:w-6 md:h-6 sm:hidden"
          />
          Imágenes Satelitales y Terrestres
        </Title>
        <p className="w-[60%] md:w-[80%] sm:w-[90%] text-primary_green/80 text-lg md:text-base sm:text-sm font-normal text-center">
          Explora la propiedad desde arriba y desde la tierra. Compare imágenes
          de satélite con fotografías de la vida real de los mismos lugares.
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <Slider imgs={imgs} />
      </div>
    </article>
  )
}

export default Gallery
