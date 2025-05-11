"use client"
import PropertyCard from "@/components/properties-routes/Card"

const SectionsExample = () => {
  const categories = [
    {
      title: "Campos y chacras",
      filter: "chacra",
      path: "/images/img-campos-chacras.jpg",
      description:
        "En esta seccion se encuentran todos los campos y chacras disponibles para la venta. Cualquier consulta no dude en contactarnos.",
      count: "+150 propiedades",
    },
    {
      title: "Urbano",
      filter: "lote",
      path: "/images/img-loteos.jpg",
      description:
        "En esta seccion se encuentran todos los lotes disponibles para la venta. Cualquier consulta no dude en contactarnos.",
      count: "+200 propiedades",
    },
  ]

  return (
    <section id="inmuebles" className="w-full py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-12 md:mb-16">
            <span className="text-primary_green">Inmuebles en </span>
            <span className="text-cta_red">venta</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <PropertyCard
                key={index}
                title={category.title}
                filter={category.filter}
                path={category.path}
                description={category.description}
                count={category.count}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionsExample
