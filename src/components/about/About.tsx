import React from "react"
import Title from "../title/Title"
import Image from "next/image"
import Button from "../button/Button"

const About = () => {
  return (
    <section
      id="sobre-nosotros"
      className="w-full h-max flex items-center justify-center"
    >
      <div className="w-[90%] h-max flex items-center justify-center flex-col">
        <article className="w-full h-max flex items-start justify-center flex-row mt-24">
          <div className="w-1/2 h-max flex items-center justify-center flex-col">
            <div className="w-full h-max flex items-center justify-start">
              <Title className="mt-0">¿Quienes somos?</Title>
            </div>
            <p className="text-black text-base font-medium my-10 text-justify">
              Somos una inmobiliaria rural dedicada a la venta de campos y
              desarrollos urbanos en áreas rurales y nos enorgullece ofrecer un
              servicio personalizado que combina experiencia en el mercado
              inmobiliario con un profundo amor por la belleza de la vida rural.{" "}
              <br />
              <br />
              Nuestro objetivo es ayudarlos a encontrar la propiedad perfecta
              que se adapte a sus necesidades y deseos. Con nosotros, no solo
              obtendrá una propiedad, sino una experiencia personalizada y un
              compromiso inquebrantable con la excelencia en el servicio al
              cliente. Cejas propiedades es una empresa familiar fundada hace
              mas de 40 años en el corazón de San Justo. Luego de años de
              especializarnos en la venta de propiedades urbanas, hemos
              redirigido nuestra pasión hacia los encantos y oportunidades que
              ofrece la vida rural.
              <br />
              <br />
              Contamos con un equipo altamente calificado de profesionales,
              incluyendo agrimensores,abogados, escribanos y otros expertos, es
              por eso que te ofrecemosun negocio 100% transparente, de confianza
              y con seguridad.Ofrecemos servicios de tasación y estamos aquí
              para asesorarlo avender su propiedad actual o encontrar la
              propiedad perfecta para vivir. Estamos aquí para guiarlo en cada
              paso del camino.
            </p>
            <div className="w-full h-max flex items-center justify-start">
              <Button className="bg-black px-5 py-3 hover:bg-opacity-95 text-white">
                Quiero Vender
              </Button>
            </div>
          </div>
          <div className="w-1/2 h-max flex items-center justify-center">
            <picture>
              <Image
                src={"/images/imagen-about.jpg"}
                alt="image-empty"
                width={600}
                height={600}
              />
            </picture>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
