import { cn } from "@/lib/utils"
import { Property } from "@/types/types"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import React from "react"

const Col = ({ fraccion }: { fraccion: Property | undefined }) => {
  return (
    <div className="w-max h-max border-[2px] border-black rounded-[15px]">
      <header className="w-full h-max bg-black flex items-center justify-center rounded-t-[10px]">
        <h6 className="text-white font-semibold text-lg p-5">
          {fraccion?.title}
        </h6>
      </header>
      <ul className="w-full flex flex-col">
        {fraccion &&
          fraccion?.list.map((property, index) => (
            <li
              key={index}
              className={cn("border-b-[1px] border-black px-10 py-3", {
                "border-none": index === fraccion.list.length - 1,
              })}
            >
              <p className="text-black text-base font-medium flex flex-row gap-3">
                <IconArrowNarrowRight size={25} className="text-black" />
                {property}
              </p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Col
