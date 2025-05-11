"use client"

import Title from "@/components/title/Title"
import type { Property } from "@/types/types"
import { IconHomeEdit } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import Col from "./Col"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

type DetailsProps = {
  title: string
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
    <div className="w-[90%] 2xl:w-[75%] lg:w-[90%] lg:items-center lg:flex-col h-max flex items-start justify-center flex-row gap-8 md:gap-6 sm:gap-4">
      <Col fraccion={fraccionA} />
      <Col fraccion={fraccionB} />
      <Col fraccion={fraccionC} />
    </div>
  )
}

const Details = ({ title, details, location, properties }: DetailsProps) => {
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

  return (
    <article className="w-full h-max flex items-center justify-center flex-col gap-16 py-12 bg-cream">
      <h1 className="text-primary_green text-5xl font-normal flex items-center gap-3">
        {title}
      </h1>
      <div className="w-full max-w-5xl mx-auto px-4">
        <Tabs defaultValue="details" className="w-full lg:w-[95%] mx-auto">
          <TabsList className="grid w-full h-full grid-cols-2 bg-cream border-2 border-primary_green">
            <TabsTrigger
              className="data-[state=active]:bg-primary_green data-[state=active]:text-cream text-primary_green"
              value="details"
            >
              Detalles
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-primary_green data-[state=active]:text-cream text-primary_green"
              value="location"
            >
              Ubicación
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <Card className="border-2 border-primary_green/70 bg-cream shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-primary_green text-xl">
                  Detalles de la propiedad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Check className="h-5 w-5 mt-0.5 text-primary_green flex-shrink-0" />
                    <p className="text-primary_green/90">{detail}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="location">
            <Card className="border-2 border-primary_green/70 bg-cream shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-primary_green text-xl">
                  Ubicación de la propiedad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary_green/90">{location}</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {properties && (
        <div className="w-full h-max flex items-center justify-center flex-col gap-10">
          <Title className="text-primary_green text-3xl md:text-2xl sm:text-xl font-bold flex items-center gap-3">
            <IconHomeEdit
              size={36}
              className="text-primary_green md:w-6 md:h-6"
            />
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
