import Title from "@/components/title/Title"
import { Property } from "@/types/types"
import { IconHomeEdit } from "@tabler/icons-react"
import React, { useEffect, useState } from "react"
import Col from "./Col"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"

type DetailsProps = {
  details: string[]
  location: string
  properties?: Property[]
}

const Table = ({
  fraccionA,
  fraccionB,
  fraccionC,
}: {
  fraccionA: Property | undefined
  fraccionB: Property | undefined
  fraccionC: Property | undefined
}) => {
  return (
    <div className="w-[90%] 2xl:w-[75%] lg:w-[90%] lg:items-center lg:flex-col h-max flex items-start justify-center flex-row gap-24">
      <Col fraccion={fraccionA} />
      <Col fraccion={fraccionB} />
      <Col fraccion={fraccionC} />
    </div>
  )
}

const Details = ({ details, location, properties }: DetailsProps) => {
  const [fraccionA, setFraccionA] = useState<Property | undefined>(undefined)
  const [fraccionB, setFraccionB] = useState<Property | undefined>(undefined)
  const [fraccionC, setFraccionC] = useState<Property | undefined>(undefined)

  useEffect(() => {
    const A = properties?.find((property) => property.title === "Fraccion 1A")
    const B = properties?.find((property) => property.title === "Fraccion 1B")
    const C = properties?.find((property) => property.title === "Fraccion 1C")

    if (!A && !B && !C) return

    setFraccionA(A)
    setFraccionB(B)
    setFraccionC(C)
  }, [properties])

  useEffect(() => {
    console.log(fraccionA)
  }, [fraccionA])

  return (
    <article className="w-full h-max flex items-center justify-center flex-col gap-24">
      <Tabs defaultValue="details" className="w-full max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 bg-gray-200">
          <TabsTrigger className="text-black" value="details">
            Detalles
          </TabsTrigger>
          <TabsTrigger className="text-black" value="location">
            Ubicacion
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Detalles de la propiedad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Check className="h-5 w-5 mt-0.5 text-green-500" />
                  <p>{detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="location">
          <Card>
            <CardHeader>
              <CardTitle>Ubicación de la propiedad</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{location}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      {properties && (
        <div className="w-full h-max flex items-center justify-center flex-col gap-12">
          <Title className="flex flex-row items-center gap-5 text-black text-4xl font-bold">
            <IconHomeEdit size={40} className="text-black" />
            Características
          </Title>
          <article className="w-full h-max flex items-center justify-center flex-row">
            <Table
              fraccionA={fraccionA}
              fraccionB={fraccionB}
              fraccionC={fraccionC}
            />
          </article>
        </div>
      )}
    </article>
  )
}

export default Details
