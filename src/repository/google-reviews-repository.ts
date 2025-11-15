import axios from "axios"
import { GooglePlaceDetails, GoogleReview } from "@/types/types"

export class GoogleReviewsRepository {
  private readonly apiKey: string
  private readonly baseUrl =
    "https://maps.googleapis.com/maps/api/place/details/json"
  private readonly searchUrl =
    "https://maps.googleapis.com/maps/api/place/textsearch/json"
  private readonly findPlaceUrl =
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"

  constructor() {
    this.apiKey = process.env.GOOGLE_PLACES_API_KEY || ""
    if (!this.apiKey) {
      console.warn(
        "GOOGLE_PLACES_API_KEY is not set. Google Reviews will not work."
      )
      console.warn("Please set GOOGLE_PLACES_API_KEY in your .env.local file")
    } else {
      console.log("Google Places API Key is configured")
    }
  }

  /**
   * Busca un Place ID usando el nombre del lugar y su ubicación
   */
  async findPlaceId(
    placeName: string,
    location?: string
  ): Promise<string | null> {
    if (!this.apiKey) {
      return null
    }

    try {
      const query = location
        ? `${placeName}, ${location}`
        : `${placeName}, Cañuelas, Argentina`

      const response = await axios.get(this.searchUrl, {
        params: {
          query: query,
          key: this.apiKey,
          language: "es",
          region: "ar",
        },
      })

      if (response.data.status === "OK" && response.data.results.length > 0) {
        // Retorna el primer resultado que coincida mejor
        return response.data.results[0].place_id
      }

      console.warn(`Place ID not found for: ${query}`)
      return null
    } catch (error) {
      console.error("Error finding Place ID:", error)
      return null
    }
  }

  /**
   * Obtiene las reviews de un lugar usando su Place ID
   */
  async getPlaceReviews(placeId: string): Promise<GooglePlaceDetails | null> {
    if (!this.apiKey || !placeId) {
      return null
    }

    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          place_id: placeId,
          fields: "place_id,name,rating,user_ratings_total,reviews",
          key: this.apiKey,
          language: "es",
        },
      })

      if (response.data.status === "OK" && response.data.result) {
        const result = response.data.result
        return {
          place_id: result.place_id,
          name: result.name,
          rating: result.rating || 0,
          user_ratings_total: result.user_ratings_total || 0,
          reviews: (result.reviews || []).map((review: any) => ({
            author_name: review.author_name,
            author_url: review.author_url,
            language: review.language,
            profile_photo_url: review.profile_photo_url,
            rating: review.rating,
            relative_time_description: review.relative_time_description,
            text: review.text,
            time: review.time,
          })) as GoogleReview[],
        }
      }

      // Log específico de errores de la API
      if (response.data.status === "NOT_FOUND") {
        console.error(`Place ID not found: ${placeId}`)
      } else if (response.data.status === "REQUEST_DENIED") {
        const errorMessage = response.data.error_message || "Unknown error"
        console.error(
          "API request denied. Check your API key and billing settings."
        )
        console.error(
          `Error details: ${errorMessage}\n` +
            `Possible causes:\n` +
            `1. Places API is not enabled in Google Cloud Console\n` +
            `2. Billing is not enabled or active\n` +
            `3. API key doesn't have access to Places API\n` +
            `4. API key is invalid or expired`
        )
      } else {
        console.error(
          `API Error: ${response.data.status} - ${
            response.data.error_message || "Unknown error"
          }`
        )
      }

      return null
    } catch (error: any) {
      console.error("Error fetching Google reviews:", {
        message: error.message,
        placeId,
        response: error.response?.data,
      })
      return null
    }
  }

  async getMultiplePlaceReviews(
    placeIds: Array<{
      placeId: string
      developmentName: string
      developmentTitle: string
    }>
  ): Promise<
    Array<{
      developmentName: string
      developmentTitle: string
      data: GooglePlaceDetails | null
    }>
  > {
    const results = await Promise.all(
      placeIds.map(async ({ placeId, developmentName, developmentTitle }) => {
        const data = await this.getPlaceReviews(placeId)
        return {
          developmentName,
          developmentTitle,
          data,
        }
      })
    )

    return results
  }
}
