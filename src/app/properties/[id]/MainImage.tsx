"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

const MainImage = ({
  images,
  public_url,
}: {
  images: any
  public_url: string
}) => {
  const [mainImage, setMainImage] = useState(public_url)
  const [propertyImages, setPropertyImages] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [areImagesLoading, setAreImagesLoading] = useState(true)

  useEffect(() => {
    console.log(images)
    if (images.length > 0) {
      const folderPath = images[0].path.relativePath.split("/")[0]

      const CompleteUrl = images[0].path.publicURL.data.publicUrl.replace(
        "images",
        `images/${folderPath}/`
      )

      setMainImage(CompleteUrl)
    }
  }, [images])

  useEffect(() => {
    if (images.length > 0) {
      const folderPath = images[0].path.relativePath.split("/")[0]
      images.map((img: any) => {
        const url = img.path.publicURL.data.publicUrl.replace(
          "images",
          `images/${folderPath}/`
        ) as string

        setPropertyImages((prev: any) =>
          [...prev, url].filter(
            (value, index, self) => self.indexOf(value) === index
          )
        )
      })
    }
  }, [])

  const handleLoadMainImage = () => {
    console.log("load")
    setIsLoading(false)
  }

  const handleImagesLoad = () => {
    console.log("load")
    setAreImagesLoading(false)
  }

  return (
    <div className="space-y-4">
      <Skeleton
        className={cn("w-full h-[600px] rounded-xl bg-gray-300", {
          hidden: !isLoading,
        })}
      />
      <Image
        width={600}
        height={600}
        src={mainImage || "/images/image-empty.svg"}
        alt="Main property image"
        loading="lazy"
        onLoad={handleLoadMainImage}
        className={cn(
          "w-full h-[600px] rounded-lg object-cover relative z-20",
          {
            "absolute opacity-0 -z-10": isLoading,
          }
        )}
      />
      <Skeleton
        className={cn("w-full h-[80px] rounded-xl bg-gray-300", {
          hidden: !areImagesLoading,
        })}
      />
      <div
        className={cn("flex space-x-2 overflow-x-auto", {
          hidden: isLoading,
        })}
      >
        {propertyImages.map((img, index) => (
          <Image
            width={96}
            height={64}
            key={index}
            src={img || "/images/image-empty.svg"}
            onLoad={handleImagesLoad}
            loading="lazy"
            alt={`Property image ${index + 1}`}
            className="w-24 h-16 rounded-md cursor-pointer object-cover relative z-20"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  )
}

export default MainImage
