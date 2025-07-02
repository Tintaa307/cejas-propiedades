import { createClient } from "@/lib/supabase/server"
import type { BatchProps } from "@/types/types"
import PropertyDetails from "@/components/properties/ContactDetails"
import SimilarProperties from "../SimilarProperties"
import ContactForm from "@/components/properties/ContactForm"

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const supabase = await createClient()

  const { id } = await params

  // Fetch property data
  const { data } = (await supabase
    .from("properties")
    .select("*")
    .eq("id", id)) as { data: BatchProps[] }

  if (!data || data.length === 0) {
    return (
      <div className="container mx-auto py-20 text-center">
        Propiedad no encontrada
      </div>
    )
  }

  // Fetch similar properties
  const { data: similarProperties } = (await supabase
    .from("properties")
    .select("*")
    .neq("id", id)
    .eq("locality", data[0].locality || "canuelas")
    .order("id", { ascending: false })
    .limit(3)) as { data: BatchProps[] }

  // Fetch property images
  let images = [] as any
  const folderPath = data[0].address
    .replaceAll(" ", "_")
    .replaceAll(".", "")
    .replace("ü", "u")
    .replaceAll(",", "")

  const propertyImages = (
    await supabase.storage.from("images").list(folderPath)
  ).data

  if (propertyImages) {
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
  }

  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto px-4 py-36">
        <PropertyDetails property={data[0]} images={images} />
        <ContactForm />
        <SimilarProperties recentProperties={similarProperties || []} />
      </div>
    </div>
  )
}
