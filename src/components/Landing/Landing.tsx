import { cn } from "@/lib/utils"
import React from "react"
import { RiSearchLine } from "@remixicon/react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Landing = () => {
  const filterItems = [
    {
      title: "Ubicacion",
      data: [
        {
          title: "Cañuelas",
          value: "cañuelas",
        },
        {
          title: "La Plata",
          value: "la-plata",
        },
        {
          title: "CABA",
          value: "caba",
        },
      ],
    },
    {
      title: "Tipo",
      data: [
        {
          title: "Chacra",
          value: "chacra",
        },
        {
          title: "Campo",
          value: "campo",
        },
        {
          title: "Casa",
          value: "casa",
        },
        {
          title: "Departamento",
          value: "departamento",
        },
      ],
    },
    {
      title: "Tamaño",
      data: [
        {
          title: "0-100",
          value: "0-100",
        },
        {
          title: "100-200",
          value: "100-200",
        },
        {
          title: "200-300",
          value: "200-300",
        },
        {
          title: "300-400",
          value: "300-400",
        },
        {
          title: "400-500",
          value: "400-500",
        },
        {
          title: "500+",
          value: "500+",
        },
      ],
    },
    {
      title: "Estado",
      data: [
        {
          title: "Venta",
          value: "Venta",
        },
        {
          title: "Alquiler",
          value: "Alquiler",
        },

      ],
    },
    {
      icon: "search",
    },
  ]
  return (
    <main className="w-full h-[calc(100vh_-_80px)] flex items-center justify-center">
      <div className="w-[90%] h-full flex items-start justify-start">
        <section className="w-full 2xl:h-3/4 lg:h-5/6 bg-black rounded-[40px] flex items-center justify-center flex-row mt-12 animate-fade-in-down ">
          <article className="relative w-1/2 h-full flex items-center justify-center flex-col lg:gap-5">
            <div className="mx-12 flex flex-col gap-2">
              <h1 className="text-white 2xl:text-5xl lg:text-3xl font-bold leading-snug">
                ENCONTRÁ TU SUEÑO EN CEJAS PROPIEDADES
              </h1>
              <p className="text-grey text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <ul className="2xl:absolute 2xl:bottom-14 2xl:w-[105%] lg:w-[135%] 2xl:h-24 h-20 bg-white rounded-[20px] 2xl:ml-[calc(96px_+_5%)] lg:ml-[calc(96px_+_35%)] flex items-center justify-center flex-row z-10 border-2 border-black">
              {filterItems.map((item, index) => (
                <li
                  key={index}
                  className={cn(
                    "w-full h-[80%] flex items-start justify-center flex-col mx-3 gap-3",
                    {
                      "border-r-grey border-r-[1px]":
                        index !== filterItems.length - 1 &&
                        index !== filterItems.length - 2,
                      "ml-5": index === 0,
                      "w-max h-full flex items-center justify-center":
                        index === filterItems.length - 1,
                    }
                  )}
                >
                  {item.title && (
                    <small className="text-black/70 text-sm font-normal">
                      {item.title}
                    </small>
                  )}
                  {item.data && (
                    <Select>
                      <SelectTrigger className="px-0 text-black font-bold text-sm">
                        <SelectValue
                          className="text-black font-bold"
                          placeholder={item.data[0].title}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {item.data.map((data, index) => (
                          <SelectItem
                            className="text-black font-medium"
                            key={index}
                            value={data.value}
                          >
                            {data.title}{" "}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  {item.icon && (
                    <div className="w-full h-full flex items-center justify-end">
                      <button className="w-14 h-14 bg-black rounded-xl flex items-center justify-center hover:bg-opacity-90 transition-colors duration-150">
                        <RiSearchLine className="text-white" />
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </article>
          <picture className="w-1/2 h-full flex items-end justify-end">
            <div className="relative top-5 right-10 2xl:top-10 2xl:right-12 2xl:w-[460px] lg:w-[320px] 2xl:h-[550px] lg:h-[375px] bg-white rounded-t-full shadow-[0_0_10px_#000]"></div>
          </picture>
        </section>
      </div>
    </main>
  )
}

export default Landing
