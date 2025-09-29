import type { BatchProps } from "@/types/types"
import PropertyDetails from "@/components/properties/ContactDetails"
import SimilarProperties from "../SimilarProperties"
import ContactForm from "@/components/properties/ContactForm"
import {
  getPropertyById,
  getSimilarProperties,
  getPropertyImages,
} from "@/controllers/properties-controller"
import { actionErrorHandler } from "@/lib/handlers/actionErrorHandler"

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  try {
    // Fetch property data
    const property = await actionErrorHandler(async () => {
      return await getPropertyById(id)
    })

    // Fetch similar properties
    const similarProperties = await actionErrorHandler(async () => {
      return await getSimilarProperties(id, property.locality || "canuelas", 3)
    })

    // Fetch property images
    const folderPath = property.id

    const images = await actionErrorHandler(async () => {
      return await getPropertyImages(folderPath)
    })

    return (
      <div className="w-full min-h-screen">
        <div className="container mx-auto px-4 py-36">
          <PropertyDetails property={property} images={images} />
          <ContactForm />
          <SimilarProperties recentProperties={similarProperties || []} />
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error loading property:", error)
    return (
      <div className="container mx-auto py-20 text-center">
        Propiedad no encontrada
      </div>
    )
  }
}
