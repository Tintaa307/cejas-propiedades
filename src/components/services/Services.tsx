"use client"

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import {
  IconCrane,
  IconRulerMeasure,
  IconMoneybag,
  IconHammer,
  IconNotebook,
  IconHierarchy3,
  IconDimensions,
  IconSortAscending,
} from "@tabler/icons-react"

const ServicesExample = () => {
  const testimonials = [
    {
      title: "Planos",
      description:
        "Nuestros servicios incluyen planos de parcelación, distribución de servicios públicos y diseño de infraestructura, contribuyendo al desarrollo ordenado y sostenible de comunidades residenciales y comerciales.",
      icon: <IconCrane size={30} className="text-white" />,
    },
    {
      title: "Agrimensuras",
      description:
        "Levantamientos topográficos precisos y delimitación de terrenos, fundamentales para la planificación urbana, subdivisión de propiedades y cumplimiento de regulaciones legales.",
      icon: <IconRulerMeasure size={30} className="text-white" />,
    },
    {
      title: "Sucesiones",
      description:
        "Asesoramiento legal y administrativo en la gestión de trámites sucesorios, asegurando una transferencia justa y eficiente de bienes de acuerdo con la legislación vigente.",
      icon: <IconSortAscending size={30} className="text-white" />,
    },
    {
      title: "Tasaciones",
      description:
        "Confección  de informes técnicos  del valor de bienes inmuebles basada en análisis de mercado local, inspección detallada del estado del inmueble.",
      icon: <IconMoneybag size={30} className="text-white" />,
    },
    {
      title: "Subdivisiones",
      description:
        "Proceso de dividir terrenos grandes en parcelas más pequeñas, con cumplimiento normativo y planificación adecuada para desarrollar nuevos proyectos inmobiliarios o comerciales.",
      icon: <IconDimensions size={30} className="text-white" />,
    },
    {
      title: "Construcciones",
      description:
        "Gestión integral de proyectos de construcción, planificación inicial, ejecución y entrega final. Incluyendo construcción tradicional, steel framing, etc.",
      icon: <IconHammer size={30} className="text-white" />,
    },
    {
      title: "Administraciónes",
      description:
        "Servicios de gestión y administración de propiedades, cobranza de alquileres,  y resolución de conflictos.",
      icon: <IconHierarchy3 size={30} className="text-white" />,
    },
    {
      title: "Usucapion",
      description:
        "Dormaliza tu derecho de propiedad mediante posesión continua y legal.",
      icon: <IconNotebook size={30} className="text-white" />,
    },
  ]

  return (
    <section className="w-full py-16 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-normal text-center mb-12">
          <span className="text-primary_green">¿Por qué </span>
          <span className="text-cta_red">elegirnos</span>
          <span className="text-primary_green">?</span>
        </h2>

        <div className="flex justify-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesExample
