import React from "react"
import Title from "../title/Title"
import {
  RiMapPinLine,
  RiDragMoveFill,
  RiHotelBedLine,
  RiDropLine,
} from "@remixicon/react"
import Image from "next/image"

const Properties = () => {
  const properties = [
    {
      src: "/images/image-example.svg",
      location: "Plomer, Prov. BA",
      land_size: "2.800m²",
      beds: "3 beds",
      baths: "2 baths",
      icons: [
        <RiMapPinLine key={0} />,
        <RiDragMoveFill key={1} />,
        <RiHotelBedLine key={2} />,
        <RiDropLine key={3} />,
      ],
      price: "18.000$USD",
    },
    {
      src: "/images/image-example.svg",
      location: "Plomer, Prov. BA",
      land_size: "2.800m²",
      beds: "3 beds",
      baths: "2 baths",
      icons: [
        <RiMapPinLine key={0} />,
        <RiDragMoveFill key={1} />,
        <RiHotelBedLine key={2} />,
        <RiDropLine key={3} />,
      ],
      price: "18.000$USD",
    },
    {
      src: "/images/image-example.svg",
      location: "Plomer, Prov. BA",
      land_size: "2.800m²",
      beds: "3 beds",
      baths: "2 baths",
      icons: [
        <RiMapPinLine key={0} />,
        <RiDragMoveFill key={1} />,
        <RiHotelBedLine key={2} />,
        <RiDropLine key={3} />,
      ],
      price: "18.000$USD",
    },
    {
      src: "/images/image-example.svg",
      location: "Plomer, Prov. BA",
      land_size: "2.800m²",
      beds: "3 beds",
      baths: "2 baths",
      icons: [
        <RiMapPinLine key={0} />,
        <RiDragMoveFill key={1} />,
        <RiHotelBedLine key={2} />,
        <RiDropLine key={3} />,
      ],
      price: "18.000$USD",
    },
    {
      src: "/images/image-example.svg",
      location: "Plomer, Prov. BA",
      land_size: "2.800m²",
      beds: "3 beds",
      baths: "2 baths",
      icons: [
        <RiMapPinLine key={0} />,
        <RiDragMoveFill key={1} />,
        <RiHotelBedLine key={2} />,
        <RiDropLine key={3} />,
      ],
      price: "18.000$USD",
    },
    {
      src: "/images/image-example.svg",
      location: "Plomer, Prov. BA",
      land_size: "2.800m²",
      beds: "3 beds",
      baths: "2 baths",
      icons: [
        <RiMapPinLine key={0} />,
        <RiDragMoveFill key={1} />,
        <RiHotelBedLine key={2} />,
        <RiDropLine key={3} />,
      ],
      price: "18.000$USD",
    },
  ]

  return (
    <section className="w-full h-max flex items-center justify-center">
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-12">
        <div className="w-full h-max flex items-center justify-center">
          <Title text="Inmuebles en Venta" />
        </div>
        <main className="w-full h-max flex items-center justify-center">
          <ul className="grid grid-cols-3 place-content-center gap-16">
            {properties.map((property, index) => (
              <li key={index} className="flex flex-col gap-4">
                <Image
                  src={property.src}
                  alt={property.src}
                  width={400}
                  height={400}
                  className="rounded-[40px]"
                />
                <div className="w-full h-max flex items-center justify-start flex-row gap-4">
                  {property.icons[0]}
                  <h4 className="text-black text-base font-medium">
                    {property.location}
                  </h4>
                </div>
                <article className="w-full h-max flex items-center justify-between flex-row gap-4">
                  <div className="flex flex-row gap-3">
                    {property.icons[1]}
                    <h4 className="text-black text-base font-medium">
                      {property.land_size}
                    </h4>
                  </div>
                  <div className="flex flex-row gap-3">
                    {property.icons[2]}
                    <h4 className="text-black text-base font-medium">
                      {property.beds}
                    </h4>
                  </div>
                  <div className="flex flex-row gap-3">
                    {property.icons[3]}
                    <h4 className="text-black text-base font-medium">
                      {property.baths}
                    </h4>
                  </div>
                </article>
                <footer className="w-full h-max flex items-center justify-between">
                  <strong className="text-xl">{property.price}</strong>
                  <button className="w-max h-max flex items-center justify-center text-black text-lg font-normal border-[2px] border-black rounded-2xl px-5 py-3">
                    Más detalles
                  </button>
                </footer>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </section>
  )
}

export default Properties
