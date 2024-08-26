"use client"

import { Button } from "@/components/ui/button"
import { BatchProps } from "@/types/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

const SimilarProperties = ({
  recentProperties,
}: {
  recentProperties: BatchProps[]
}) => {
  const router = useRouter()
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Otras propiedades similares</h2>
      <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-2 gap-4">
        {recentProperties.map((item) => (
          <div
            key={item.id}
            className="border border-black/20 rounded-lg p-5 shadow-lg cursor-pointer"
          >
            <Image
              width={400}
              height={400}
              src={item.public_url}
              alt={`Similar property ${item}`}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="font-semibold">{item.address}</h3>
            <p className="text-sm text-muted-foreground mb-2">${item.price}</p>
            <div className="flex justify-between text-sm text-muted-foreground mt-4">
              <span>3 Beds</span>
              <span>2 Baths</span>
              <span>2,200 sqft</span>
            </div>
            <Button
              onClick={() => router.push(`/properties/${item.id}`)}
              variant={"default"}
              className="mt-6 bg-black hover:bg-black/95"
            >
              Ver propiedad
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SimilarProperties
