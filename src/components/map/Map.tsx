import Image from "next/image"
import React from "react"
import { RiMapPinLine } from "@remixicon/react"

const Map = () => {
  return (
    <div className="w-full h-max flex items-center justify-center">
      <div className="relative w-max h-max">
        <Image
          src={"/images/mapa-cejas-big.jpg"}
          alt="image-empty"
          width={1920}
          height={1080}
          className="my-24 drop-shadow-[0_0_8px_#d9d9d9] border-[#d9d9d9] border-[1px]"
        />
        <div className="absolute top-2/3 mt-12 -ml-10 left-1/3 w-max h-max rounded-full flex items-center justify-center">
          {/*el retiro*/}
          <RiMapPinLine
            className="text-black animate-pulse animation-delay-150 cursor-pointer"
            size={30}
          />
        </div>
        <div className="absolute top-3/4 mt-[84px] -ml-[108px] left-1/3 w-max h-max rounded-full flex items-center justify-center">
          {/*pueblo chico*/}
          <RiMapPinLine
            className="text-black animate-pulse animation-delay-200 cursor-pointer"
            size={30}
          />
        </div>
        <div className="absolute top-[58%] left-[42%] w-max h-max rounded-full flex items-center justify-center">
          {/*las gardenias*/}
          <RiMapPinLine
            className="text-black animate-pulse animation-delay-75 cursor-pointer"
            size={30}
          />
        </div>
        <div className="absolute top-1/2 mt-4 left-[36%] w-max h-max rounded-full flex items-center justify-center">
          {/*la cañada*/}
          <RiMapPinLine
            className="text-black animate-pulse animation-delay-300 cursor-pointer"
            size={30}
          />
        </div>
        <div className="absolute top-[48%] left-1/3 w-max h-max rounded-full flex items-center justify-center">
          {/*???*/}
          <RiMapPinLine
            className="text-black animate-pulse animation-delay-400 cursor-pointer"
            size={30}
          />
        </div>
      </div>
    </div>
  )
}

export default Map
