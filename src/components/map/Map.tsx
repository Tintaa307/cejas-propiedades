import Image from "next/image"
import React from "react"

const Map = () => {
  return (
    <div className="w-full h-max flex items-center justify-center">
      <Image
        src={"/images/mapa-cejas-big.jpg"}
        alt="image-empty"
        width={1920}
        height={1080}
        className="my-24 drop-shadow-[0_0_8px_#d9d9d9] border-[#d9d9d9] border-[1px]"
      />
    </div>
  )
}

export default Map
