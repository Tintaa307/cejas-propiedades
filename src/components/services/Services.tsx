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
} from "@tabler/icons-react"

const Services = () => {
  const testimonials = [
    {
      title: "Planos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos rerum debitis delectus sint eius labore modi nam reiciendis temporibus?",
      icon: <IconCrane size={30} className="text-white" />,
    },
    {
      title: "Agrimensuras",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos rerum debitis delectus sint eius labore modi nam reiciendis temporibus?",
      icon: <IconRulerMeasure size={30} className="text-white" />,
    },
    {
      title: "Sucesiones",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos rerum debitis delectus sint eius labore modi nam reiciendis temporibus?",
      icon: <IconSortAscending size={30} className="text-white" />,
    },
    {
      title: "Tasaciones",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos rerum debitis delectus sint eius labore modi nam reiciendis temporibus?",
      icon: <IconMoneybag size={30} className="text-white" />,
    },
    {
      title: "Subdivisiones",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos rerum debitis delectus sint eius labore modi nam reiciendis temporibus?",
      icon: <IconDimensions size={30} className="text-white" />,
    },
    {
      title: "Construcciones",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos rerum debitis delectus sint eius labore modi nam reiciendis temporibus?",
      icon: <IconHammer size={30} className="text-white" />,
    },
    {
      title: "Administraciónes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos rerum debitis delectus sint eius labore modi nam reiciendis temporibus?",
      icon: <IconHierarchy3 size={30} className="text-white" />,
    },
  ]
  return (
    <section className="w-full h-max flex items-center justify-center">
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-12">
        <div className="w-full h-max flex items-center justify-center">
          <Title text="Servicios" />
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
