import { Bed, Bath, Square, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import MainImage from "./MainImage"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { BatchProps } from "@/types/types"
import SimilarProperties from "../SimilarProperties"

export default async function PropertyDetails({
  params,
}: {
  params: { id: string }
}) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  if (params.id === undefined) {
    return
  }

  const { data } = (await supabase
    .from("properties")
    .select("*")
    .eq("id", params.id)) as { data: BatchProps[] }

  const { data: similiarProperties } = (await supabase
    .from("properties")
    .select("*")
    .neq("id", params.id)
    .eq("locality", "canuelas")
    .order("id", { ascending: false })
    .limit(4)) as { data: BatchProps[] }

  if (!data || !similiarProperties) {
    return
  }

  let images = [] as any

  const folderPath = data[0].address
    .replaceAll(" ", "_")
    .replaceAll(".", "")
    .replace("ü", "u")
    .replaceAll(",", "")

  console.log(folderPath)

  const propertyImages = (
    await supabase.storage.from("images").list(folderPath)
  ).data

  if (!propertyImages) {
    return
  }

  images = [
    ...images,
    ...propertyImages.map((file) => ({
      ...file,
      path: {
        relativePath: `${folderPath}/${file.name}`,
        publicURL: supabase.storage.from("images").getPublicUrl(file.name),
      },
    })),
  ]

  return (
    <div className="w-full h-full mt-32 mx-auto px-4 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-16">
        {/* Property Images */}
        <MainImage images={images} public_url={data[0].public_url} />

        {/* Property Info */}
        <div className="space-y-6 max-h-[600px] mt-4">
          <div>
            <h1 className="text-3xl font-bold">{data[0].site}</h1>
            <p className="text-muted-foreground">{data[0].address}</p>
          </div>

          <p className="text-3xl font-bold">${data[0].price}</p>

          <div className="flex space-x-4 text-muted-foreground">
            <div className="flex items-center">
              <Bed className="w-5 h-5 mr-2" />
              <span>4 Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-5 h-5 mr-2" />
              <span>3 Baths</span>
            </div>
            <div className="flex items-center">
              <Square className="w-5 h-5 mr-2" />
              <span>2,500 sqft</span>
            </div>
            <div className="flex items-center">
              <Car className="w-5 h-5 mr-2" />
              <span>2 Garage</span>
            </div>
          </div>
          {/* Property Features */}
          <div className="">
            <h3 className="text-lg font-semibold mb-2">Cosas a destacar</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Recien Renovada</Badge>
              <Badge variant="secondary">Pisos de Madera en toda la casa</Badge>
              <Badge variant="secondary">Amplio Jardín con Piscina</Badge>
              <Badge variant="secondary">Cocina Moderna</Badge>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex space-x-4">
            <Button className="w-3/4 bg-black hover:bg-black/95 mt-4">
              Contactános para más información
            </Button>
          </div>

          {/* Property Details */}
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger
                className="text-black border-[1px] border-border"
                value="description"
              >
                Descripción
              </TabsTrigger>
              <TabsTrigger
                className="text-black border-[1px] border-border"
                value="details"
              >
                Detalles
              </TabsTrigger>
              <TabsTrigger
                className="text-black border-[1px] border-border"
                value="location"
              >
                Ubicación
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="description"
              className="text-base text-black/60"
            >
              <p>{data[0].description}</p>
            </TabsContent>
            <TabsContent value="details" className="text-base text-black/60">
              <ul className="list-disc list-inside">
                <li>Year Built: 1995</li>
                <li>Lot Size: 0.25 acres</li>
                <li>Heating: Forced air, natural gas</li>
                <li>Cooling: Central air</li>
                <li>Property Type: Single family</li>
                <li>School District: Anytown Unified</li>
              </ul>
            </TabsContent>
            <TabsContent value="location" className="text-base text-black/60">
              <p>{data[0].location}</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Similar Properties */}
      <SimilarProperties recentProperties={similiarProperties} />
    </div>
  )
}
