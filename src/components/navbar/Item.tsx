import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

type ItemProps = {
  item: {
    title: string
    link: string
  }
}

const Item = ({ item }: ItemProps) => {
  return (
    <li className="">
      <Link
        href={item.link}
        className={cn(
          "relative text-black group font-medium transition-all duration-150 flex flex-col xl:text-[12px] text-base ",
          {
            "w-max h-max px-4 py-2 rounded-md bg-black text-white hover:bg-opacity-90 flex":
              item.title === "Contacto",
          }
        )}
      >
        {item.title}
        <div
          className={cn({
            " bottom-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300":
              item.title !== "Contacto",
          })}
        />
      </Link>
    </li>
  )
}

export default Item
