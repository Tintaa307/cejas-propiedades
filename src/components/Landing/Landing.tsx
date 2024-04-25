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
      title: "Precio",
      data: [
        {
          title: "0-100000",
          value: "0-100000",
        },
        {
          title: "100000-200000",
          value: "100000-200000",
        },
        {
          title: "200000-300000",
          value: "200000-300000",
        },
        {
          title: "300000-400000",
          value: "300000-400000",
        },
        {
          title: "400000-500000",
          value: "400000-500000",
        },
        {
          title: "500000+",
          value: "500000+",
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
        <section className="w-full h-3/4 bg-black rounded-[40px] flex items-center justify-center flex-row mt-12 animate-fade-in-down">
          <article className="relative w-1/2 h-full flex items-center justify-center flex-col">
            <div className="mx-12 flex flex-col gap-2">
              <h1 className="text-white text-5xl font-bold leading-snug">
                ENCONTRA TU SUEÑO EN CEJAS PROPIEDADES
              </h1>
              <p className="text-grey text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <ul className="absolute bottom-14 w-[105%] h-24 bg-white rounded-[20px] ml-[calc(96px_+_5%)] flex items-center justify-center flex-row">
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
                      <SelectTrigger className="px-0 text-black font-bold text-base">
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
            <div className="relative top-10 right-12 w-[460px] h-[550px] bg-white rounded-t-full shadow-[0_0_10px_#000]"></div>
          </picture>
        </section>
      </div>
    </main>
  )
}

export default Landing
