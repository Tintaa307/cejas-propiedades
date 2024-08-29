import Item from "./Item"
import Title from "../title/Title"

const Works = () => {
  const works = [
    {
      title: "La Cañada",
      src: "/images/dron-images/canada-dron.jpg",
      link: "/canada",
      isSold: false,
    },
    {
      title: "Pueblo Chico",
      src: "/images/dron-images/pueblo-dron.jpg",
      link: "/pueblo",
      isSold: false,
    },
    {
      title: "Las Gardenias",
      src: "/images/dron-images/gardenias-dron.jpg",
      link: "/gardenias",
      isSold: false,
    },
    {
      title: "El Retiro",
      src: "/images/dron-images/retiro-dron.jpg",
      link: "/retiro",
      isSold: false,
    },
    {
      title: "La Comarca",
      src: "/images/dron-images/comarca-dron.jpg",
      link: "/comarca",
      isSold: true,
    },
    {
      title: "La Estación",
      src: "/images/dron-images/estacion-dron.jpg",
      link: "/estacion",
      isSold: false,
    },
    {
      title: "Las Magnolias",
      src: "/images/dron-images/magnolias-dron.jpg",
      link: "/magnolias",
      isSold: false,
    },
    {
      title: "La Cañanda II",
      src: "/images/dron-images/canada2-dron.jpg",
      link: "/canada2",
      isSold: false,
    },
  ]

  return (
    <section
      id="desarrollos"
      className="w-full h-max flex items-center justify-center"
    >
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-12">
        <div className="w-full h-max flex items-center justify-center">
          <Title>
            Conoce nuestros <span className="text-[#BF0909]">desarrollos</span>
          </Title>
        </div>
        <ul className="w-full h-max grid grid-cols-1 place-content-center gap-20 mb-24">
          {works.map((work, index) => (
            <Item key={index} index={index} {...work} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Works
