import axios from "axios"
import { GooglePlaceDetails, GoogleReview } from "@/types/types"

/**
 * Google Reviews Repository - Uses Places API (New)
 * @see https://developers.google.com/maps/documentation/places/web-service/place-details
 * @see https://developers.google.com/maps/documentation/places/web-service/text-search
 *
 * IMPORTANT: Enable "Places API (New)" in Google Cloud Console, NOT the legacy "Places API".
 */
export class GoogleReviewsRepository {
  private readonly apiKey: string
  private readonly baseUrl = "https://places.googleapis.com/v1/places"
  private readonly searchUrl = "https://places.googleapis.com/v1/places:searchText"

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

  private getHeaders(fieldMask: string) {
    return {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": this.apiKey,
      "X-Goog-FieldMask": fieldMask,
    }
  }

  /**
   * Busca un Place ID usando el nombre del lugar y su ubicación (Text Search New)
   */
  async findPlaceId(
    placeName: string,
    location?: string
  ): Promise<string | null> {
    if (!this.apiKey) {
      return null
    }

    try {
      const textQuery = location
        ? `${placeName}, ${location}`
        : `${placeName}, Cañuelas, Argentina`

      const response = await axios.post(
        this.searchUrl,
        {
          textQuery,
          languageCode: "es",
          regionCode: "AR",
        },
        {
          headers: this.getHeaders("places.id"),
        }
      )

      const places = response.data?.places
      if (places && Array.isArray(places) && places.length > 0) {
        const placeId = places[0].id
        if (placeId) return placeId
      }

      console.warn(`Place ID not found for: ${textQuery}`)
      return null
    } catch (error) {
      console.error("Error finding Place ID:", error)
      return null
    }
  }

  /**
   * Obtiene las reviews de un lugar usando su Place ID (Place Details New)
   */
  async getPlaceReviews(placeId: string): Promise<GooglePlaceDetails | null> {
    if (!this.apiKey || !placeId) {
      return null
    }

    try {
      const url = `${this.baseUrl}/${placeId}?languageCode=es`
      const response = await axios.get(url, {
        headers: this.getHeaders(
          "id,displayName,rating,userRatingCount,reviews"
        ),
      })

      const place = response.data
      if (!place) return null

      const result = place
      const reviews = (result.reviews || []).map((review: any) =>
        this.mapReviewToLegacyFormat(review)
      ) as GoogleReview[]

      return {
        place_id: result.id || placeId,
        name: result.displayName?.text || "",
        rating: result.rating ?? 0,
        user_ratings_total: result.userRatingCount ?? 0,
        reviews,
      }
    } catch (error: any) {
      const status = error.response?.status
      const data = error.response?.data

      if (status === 403 || data?.error?.message) {
        const msg = data?.error?.message || error.message
        console.error(
          "Places API (New) request denied. Possible causes:\n" +
            `1. "Places API (New)" is not enabled in Google Cloud Console\n` +
            `2. Billing is not enabled or active\n` +
            `3. API key restrictions may block this request\n` +
            `4. Error: ${msg}`
        )
      } else {
        console.error("Error fetching Google reviews:", {
          message: error.message,
          placeId,
          response: data,
        })
      }
      return null
    }
  }

  /**
   * Mapea el formato de review de la API New al formato legacy usado en la app
   */
  private mapReviewToLegacyFormat(review: any): GoogleReview {
    const author = review.authorAttribution || {}
    const textObj = review.text || review.originalText
    const text = typeof textObj === "string" ? textObj : textObj?.text || ""

    return {
      author_name: author.displayName || "Anónimo",
      author_url: author.uri,
      language: "es",
      profile_photo_url: author.photoUri,
      rating: review.rating ?? 0,
      relative_time_description:
        review.relativePublishTimeDescription || "",
      text,
      time: review.publishTime
        ? new Date(review.publishTime).getTime()
        : Date.now(),
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
