import React from "react"
import Title from "../title/Title"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"
import {
  IconCrane,
  IconRulerMeasure,
  IconMoneybag,
  IconDimensions,
  IconHammer,
  IconHierarchy3,
  IconSortAscending,
  IconNotebook,
} from "@tabler/icons-react"

const Services = () => {
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
    <section
      id="servicios"
      className="w-full h-max flex items-center justify-center overflow-hidden"
    >
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-12 sm:gap-6">
        <div className="w-full h-max flex items-center justify-center">
          <Title className="sm:text-center">
            Nuestros <span className="text-[#BF0909]">servicios</span>
          </Title>
        </div>
        <div className="h-[25rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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

export default Services
