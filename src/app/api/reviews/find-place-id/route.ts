import { NextRequest, NextResponse } from "next/server"
import { GoogleReviewsRepository } from "@/repository/google-reviews-repository"

export const dynamic = "force-dynamic"

/**
 * API endpoint para ayudar a encontrar Place IDs
 * Uso: GET /api/reviews/find-place-id?name=Pueblo Chico&location=Cañuelas
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const placeName = searchParams.get("name")
    const location = searchParams.get("location") || "Cañuelas, Argentina"

    if (!placeName) {
      return NextResponse.json(
        { error: "Parameter 'name' is required" },
        { status: 400 }
      )
    }

    const googleReviewsRepository = new GoogleReviewsRepository()
    const placeId = await googleReviewsRepository.findPlaceId(
      placeName,
      location
    )

    if (!placeId) {
      return NextResponse.json(
        {
          error: "Place ID not found",
          message: `No se pudo encontrar un Place ID para "${placeName}" en ${location}`,
        },
        { status: 404 }
      )
    }

    // Obtener también los detalles para verificar
    const placeDetails = await googleReviewsRepository.getPlaceReviews(placeId)

    return NextResponse.json({
      placeId,
      placeName,
      location,
      details: placeDetails
        ? {
            name: placeDetails.name,
            rating: placeDetails.rating,
            totalReviews: placeDetails.user_ratings_total,
            reviewsCount: placeDetails.reviews.length,
          }
        : null,
      message: "Place ID encontrado exitosamente",
    })
  } catch (error: any) {
    console.error("Error finding Place ID:", error)
    return NextResponse.json(
      {
        error: "Failed to find Place ID",
        message: error.message || "Error desconocido",
      },
      { status: 500 }
    )
  }
}




