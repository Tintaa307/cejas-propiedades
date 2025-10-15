import Title from "@/components/title/Title"
import Image from "next/image"

type BlueprintsProps = {
  blueprints: string[]
}

const Blueprints = ({ blueprints }: BlueprintsProps) => {
  return (
    <article className="w-full h-max flex items-center justify-center flex-col gap-10 py-16">
      <Title className="text-primary_green text-5xl max-sm:text-2xl font-normal flex items-center text-center gap-3">
        Plano General y Precios
      </Title>
      <figure className="w-full h-max flex items-center justify-center flex-col gap-10">
        {Array.isArray(blueprints) ? (
          blueprints.map((blueprint, index) => (
            <Image
              key={index}
              src={blueprint}
              alt="planos"
              width={900}
              height={900}
              className="border-2 border-primary_green/30 rounded-md shadow-md md:w-[900px] sm:w-[90%] sm:h-auto"
            />
          ))
        ) : (
          <Image
            src={blueprints}
            alt="planos"
            width={900}
            height={900}
            className="border-2 border-primary_green/30 rounded-md shadow-md md:w-[900px] sm:w-[90%] sm:h-auto"
          />
        )}
      </figure>
    </article>
  )
}

export default Blueprints
