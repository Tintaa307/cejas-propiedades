import React from "react"
import { RiSearchLine } from "@remixicon/react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const Filter = () => {
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
    <ul className="w-1/2 h-24 bg-black rounded-[20px] flex items-center justify-center flex-row z-10 mb-4">
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
            <small className="text-white/70 text-xs font-normal">
              {item.title}
            </small>
          )}
          {item.data && (
            <Select>
              <SelectTrigger className="px-0 text-white font-normal text-base bg-transparent">
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
              <button className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:bg-opacity-90 transition-colors duration-150">
                <RiSearchLine className="text-black" />
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Filter
