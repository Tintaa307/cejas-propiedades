import { NextRequest, NextResponse } from "next/server"
import { GoogleReviewsService } from "@/services/google-reviews-service"
import worksData from "@/works.json"

export const dynamic = "force-dynamic"
export const revalidate = 300 // Revalidate every 5 minutes

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const developmentName = searchParams.get("development")

    const googleReviewsService = new GoogleReviewsService()

    if (developmentName) {
      // Get reviews for a specific development
      const work = worksData.works.find((w) => w.title === developmentName)

      if (!work) {
        return NextResponse.json(
          { error: "Development not found" },
          { status: 404 }
        )
      }

      const review = await googleReviewsService.getReviewsForDevelopment(
        work.placeId,
        work.title,
        work.value,
        work.location
      )

      if (!review) {
        return NextResponse.json(
          {
            error: "Reviews not found",
            message:
              "No se pudieron obtener las reviews. Verifica el Place ID o que el lugar exista en Google Maps.",
          },
          { status: 404 }
        )
      }

      return NextResponse.json(review)
    } else {
      // Get reviews for all developments (excluye los vendidos)
      const developments = worksData.works
        .filter((work) => !work.isSold && work.placeId)
        .map((work) => ({
          placeId: work.placeId,
          developmentName: work.title,
          developmentTitle: work.value,
          location: work.location,
        }))

      const reviews =
        await googleReviewsService.getReviewsForAllDevelopments(developments)

      return NextResponse.json({
        reviews,
        total: reviews.length,
        message:
          reviews.length === 0
            ? "No se encontraron reviews. Asegúrate de tener configurados los Place IDs o que los desarrollos existan en Google Maps."
            : `Se obtuvieron reviews de ${reviews.length} desarrollo(s)`,
      })
    }
  } catch (error: any) {
    console.error("Error fetching reviews:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch reviews",
        message: error.message || "Error desconocido al obtener las reviews",
      },
      { status: 500 }
    )
  }
}

