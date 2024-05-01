"use client"

import React, { useEffect, useState } from "react"
import Title from "../title/Title"

const Information = () => {
  const [salesNumber, setSalesNumber] = useState(0)
  const [hectariasNumber, setHectariasNumber] = useState(0)
  const [clientsNumber, setClientsNumber] = useState(0)

  const data = [
    {
      number: 100,
      title: "Ventas exitosas",
      simbol: "+",
    },
    {
      number: 200,
      title: "Hectareas adquiridas",
      simbol: "+",
    },
    {
      number: 99,
      title: "Clientes satisfechos",
      simbol: "%",
    },
  ]

  useEffect(() => {
    if (salesNumber < 100) {
      setTimeout(() => {
        setSalesNumber(salesNumber + 1)
      }, 70)
    }

    if (hectariasNumber < 200) {
      setTimeout(() => {
        setHectariasNumber(hectariasNumber + 1)
      }, 50)
    }

    if (clientsNumber < 99) {
      setTimeout(() => {
        setClientsNumber(clientsNumber + 1)
      }, 70)
    }
  }, [salesNumber, hectariasNumber, clientsNumber])

  return (
    <section className="w-full h-max flex items-center justify-center">
      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-14">
        <div className="w-full h-max flex items-center justify-center">
          <Title text="Tu conformidad es nuestra prioridad" />
        </div>
        <ul className="w-full h-max flex items-center justify-center flex-row gap-20">
          {data.map((item, index) => (
            <li
              key={index}
              className="w-[300px] h-[220px] flex items-center justify-center bg-black rounded-[40px] flex-col gap-4"
            >
              {item.number === 100 && (
                <h2 className="text-7xl font-bold text-white">
                  {item.simbol}
                  {salesNumber}
                </h2>
              )}
              {item.number === 200 && (
                <h2 className="text-7xl font-bold text-white">
                  {item.simbol}
                  {hectariasNumber}
                </h2>
              )}
              {item.number === 99 && (
                <h2 className="text-7xl font-bold text-white">
                  {clientsNumber}
                  {item.simbol}
                </h2>
              )}
              <p className="text-base text-white/80 font-normal">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
        <div className="w-full h-max flex items-center justify-center text-center">
          <p className="w-2/3 text-black text-base font-normal mb-4">
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Information
