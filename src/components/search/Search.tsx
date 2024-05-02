import React from "react"
import Filter from "../filter/Filter"

const Search = () => {
  return (
    <section className="w-full h-max flex items-center justify-center flex-col gap-8">
      <h3 className="text-black font-bold text-3xl mt-12">
        Buscar propiedades
      </h3>
      <Filter />
    </section>
  )
}

export default Search
