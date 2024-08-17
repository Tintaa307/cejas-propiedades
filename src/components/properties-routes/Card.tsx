import React from "react"

const Card = () => {
  return (
    <div className="w-1/2 h-[50vh] flex items-center justify-center">
      <div className="relative w-2/3 h-[60vh] bg-[url('/images/desarrollos/work-magnolias.jpg')] bg-cover bg-center rounded-[32px]">
        <footer className="absolute bottom-0 w-full h-1/3 bg-black/90 rounded-b-[32px] flex items-center justify-center">
          <div className="w-[90%] h-max flex flex-col gap-4">
            <h5 className="text-white text-2xl font-semibold">Urbano</h5>
            <p className="w-3/4 text-white/60 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              ab quae fugit maiores quisquam ad id illo labore ea laudantium?
            </p>
            <small className="text-white">+15 propiedades</small>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Card
