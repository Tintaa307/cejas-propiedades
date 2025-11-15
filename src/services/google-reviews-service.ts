import { GoogleReviewsRepository } from "@/repository/google-reviews-repository"
import { DevelopmentReview, GooglePlaceDetails } from "@/types/types"

export class GoogleReviewsService {
  private readonly googleReviewsRepository: GoogleReviewsRepository

  constructor() {
    this.googleReviewsRepository = new GoogleReviewsRepository()
  }

  /**
   * Busca el Place ID si no está disponible y luego obtiene las reviews
   */
  async getReviewsForDevelopment(
    placeId: string | undefined,
    developmentName: string,
    developmentTitle: string,
    location?: string
  ): Promise<DevelopmentReview | null> {
    let finalPlaceId = placeId

    // Si no hay placeId, intenta buscarlo
    if (!finalPlaceId) {
      console.log(`Buscando Place ID para: ${developmentTitle}`)
      finalPlaceId = await this.googleReviewsRepository.findPlaceId(
        developmentTitle,
        location
      )

      if (!finalPlaceId) {
        console.warn(
          `No se pudo encontrar Place ID para: ${developmentTitle}`
        )
        return null
      }

      console.log(
        `Place ID encontrado para ${developmentTitle}: ${finalPlaceId}`
      )
    }

    const placeDetails =
      await this.googleReviewsRepository.getPlaceReviews(finalPlaceId)

    if (!placeDetails) {
      return null
    }

    return {
      developmentName,
      developmentTitle,
      placeId: finalPlaceId,
      reviews: placeDetails.reviews,
      rating: placeDetails.rating,
      totalReviews: placeDetails.user_ratings_total,
    }
  }

  async getReviewsForAllDevelopments(
    developments: Array<{
      placeId?: string
      developmentName: string
      developmentTitle: string
      location?: string
    }>
  ): Promise<DevelopmentReview[]> {
    if (developments.length === 0) {
      return []
    }

    // Procesar todos los desarrollos (con o sin placeId)
    const results = await Promise.all(
      developments.map(async (dev) => {
        const review = await this.getReviewsForDevelopment(
          dev.placeId,
          dev.developmentName,
          dev.developmentTitle,
          dev.location
        )
        return review
      })
    )

    // Filtrar solo los que tienen reviews
    return results.filter(
      (result): result is DevelopmentReview => result !== null
    )
  }
}

