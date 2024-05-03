import Image from "next/image"
import React from "react"

const Map = () => {
  return (
    <div className="w-full h-max flex items-center justify-center">
      <Image
        src={"/images/image-empty.svg"}
        alt="image-empty"
        width={800}
        height={800}
        className="w-1/2 my-24"
      />
    </div>
  )
}

export default Map
