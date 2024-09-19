import Item from "./Item"
import Title from "../title/Title"

const Works = () => {
  const works = [
    {
      title: "La Cañada",
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/canada-dron.JPG",
      link: "/canada",
      isSold: false,
    },
    {
      title: "Pueblo Chico",
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/pueblo-dron.JPG",
      link: "/pueblo",
      isSold: false,
    },
    {
      title: "Las Gardenias",
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/gardenias-dron.JPG",
      link: "/gardenias",
      isSold: false,
    },
    {
      title: "El Retiro",
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/retiro-dron.JPG",
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
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/img-estacion.jpg",
      link: "/estacion",
      isSold: false,
    },
    {
      title: "Las Magnolias",
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/magnolias-dron.jpg",
      link: "/magnolias",
      isSold: false,
    },
    {
      title: "La Cañada II",
      src: "https://dmcxbrwufzuvbiooeyde.supabase.co/storage/v1/object/public/images/desarrollos/canada2-dron.JPG",
      link: "/canada2",
      isSold: false,
    },
  ]

  return (
    <section
      id="desarrollos"
      className="w-full h-max flex items-center justify-center"
    >
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-12 ">
        <div className="w-full h-max flex items-center justify-center">
          <Title className="sm:text-center">
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
