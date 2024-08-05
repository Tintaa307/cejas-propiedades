import Item from "./Item"
import Title from "../title/Title"

const Works = () => {
  const works = [
    {
      title: "La Cañada",
      src: "/images/work-canada.svg",
      link: "/canada",
    },
    {
      title: "Pueblo Chico",
      src: "/images/work-pueblo-chico.svg",
      link: "/pueblo",
    },
    {
      title: "Las Gardenias",
      src: "/images/work-gardenias.svg",
      link: "/gardenias",
    },
    {
      title: "El Retiro",
      src: "/images/work-retiro.svg",
      link: "/retiro",
    },
    {
      title: "La Comarca",
      src: "/images/work-comarca.svg",
      link: "/comarca",
    },
    {
      title: "La Estación",
      src: "/images/work-estacion.svg",
      link: "/estacion",
    },
    {
      title: "Las Magnolias",
      src: "/images/work-estacion.svg",
      link: "/magnolias",
    },
    {
      title: "La Cañanda II",
      src: "/images/work-estacion.svg",
      link: "/canada2",
    },
  ]

  return (
    <section
      id="desarrollos"
      className="w-full h-max flex items-center justify-center"
    >
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-12">
        <div className="w-full h-max flex items-center justify-center">
          <Title>Desarrollos</Title>
        </div>
        <ul className="w-full h-max grid grid-cols-3 place-content-center gap-20 mb-24">
          {works.map((work, index) => (
            <Item key={index} index={index} {...work} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Works
