import Title from "@/components/title/Title"
import { IconReceipt2 } from "@tabler/icons-react"
import Image from "next/image"

type BlueprintsProps = {
  blueprints: string[]
}

const Blueprints = ({ blueprints }: BlueprintsProps) => {
  return (
    <article className="w-full h-max flex items-center justify-center flex-col gap-10 py-16 bg-cream">
      <Title className="text-primary_green text-4xl font-bold flex items-center gap-3">
        Plano General y Precios
      </Title>
      <figure className="w-full h-max flex items-center justify-center">
        <Image
          src={blueprints[0] || "/placeholder.svg"}
          alt="planos"
          width={600}
          height={600}
          className="border-2 border-primary_green/30 rounded-md shadow-md md:w-[500px] sm:w-[90%] sm:h-auto"
        />
      </figure>
    </article>
  )
}

export default Blueprints
