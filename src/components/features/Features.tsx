import { getActiveFeaturedProperties } from "@/controllers"
import { actionErrorHandler } from "@/lib/handlers/actionErrorHandler"
import { AppActionException } from "@/types/exceptions"
import type { FeaturedProperty } from "@/lib/validations/FeaturedPropertySchema"
import FeaturesCarousel from "./FeaturesCarousel"

const loadFeaturedProperties = async (): Promise<FeaturedProperty[]> => {
  try {
    return await actionErrorHandler(async () => {
      return (await getActiveFeaturedProperties()) as FeaturedProperty[]
    })
  } catch (error) {
    if (error instanceof AppActionException) {
      return []
    }
    throw error
  }
}

const Features = async () => {
  const items = await loadFeaturedProperties()

  if (items.length === 0) {
    return null
  }

  return (
    <section id="ingresos" className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="bg-primary_green rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-12">
                Descubrí nuestros{" "}
                <span className="font-serif italic">nuevos ingresos</span>
              </h2>

              <FeaturesCarousel items={items} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
