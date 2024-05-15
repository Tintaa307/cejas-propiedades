import React from "react"
import Title from "../title/Title"
import {
  RiMapPinLine,
  RiDragMoveFill,
  RiHotelBedLine,
  RiDropLine,
} from "@remixicon/react"
import Item from "./Item"
import Button from "../button/Button"

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
              <Item key={index} index={index} property={property} />
            ))}
          </ul>
        </main>
        <div className="w-full h-max flex items-center justify-center">
          <Button className="px-7 py-3 text-lg mb-2 hover:bg-opacity-90 bg-black text-white">
            Ver Todas
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Properties
