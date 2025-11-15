"use client"

import { useEffect, useState } from "react"
import { DevelopmentReview, GoogleReview } from "@/types/types"
import { Star, RefreshCw, User, Clock } from "lucide-react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface GoogleReviewsProps {
  refreshInterval?: number
}

const GoogleReviews = ({ refreshInterval = 300000 }: GoogleReviewsProps) => {
  const [reviews, setReviews] = useState<DevelopmentReview[]>([])
  const [loading, setLoading] = useState(true)
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date())
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchReviews = async () => {
    try {
      setRefreshing(true)
      setError(null)
      const response = await fetch("/api/reviews")
      const data = await response.json()

      if (response.ok) {
        console.log("Reviews data received:", data)
        setReviews(data.reviews || [])
        setLastRefresh(new Date())
        if (!data.reviews || data.reviews.length === 0) {
          setError(
            "No se encontraron reseñas. Verifica la configuración del Place ID."
          )
        }
      } else {
        console.error("API Error:", data)
        setError(data.message || "Error al obtener las reseñas")
        setReviews([])
      }
    } catch (error: any) {
      console.error("Error fetching reviews:", error)
      setError("Error de conexión al obtener las reseñas")
      setReviews([])
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchReviews()

    // Set up auto-refresh
    const interval = setInterval(() => {
      fetchReviews()
    }, refreshInterval)

    return () => clearInterval(interval)
  }, [refreshInterval])

  const formatTimeAgo = (relativeTime: string) => {
    return relativeTime
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>
    )
  }

  if (loading) {
    return (
      <section id="reviews" className="w-full py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center justify-center py-12">
              <RefreshCw className="w-8 h-8 animate-spin text-primary_green" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (reviews.length === 0 && !loading) {
    return (
      <section id="reviews" className="w-full py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal">
                  <span className="text-primary_green">Reseñas de </span>
                  <span className="text-cta_red">Google</span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Lo que dicen nuestros clientes sobre nuestros desarrollos
                </p>
              </div>
            </div>
            {error && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 text-sm">{error}</p>
                <p className="text-yellow-700 text-xs mt-2">
                  Verifica que el Place ID esté configurado correctamente y que
                  la API de Google Places esté habilitada.
                </p>
              </div>
            )}
            {!error && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No hay reseñas disponibles en este momento.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Combine all reviews from all developments
  const allReviews: Array<GoogleReview & { developmentTitle: string }> = []
  reviews.forEach((development) => {
    development.reviews.forEach((review) => {
      allReviews.push({
        ...review,
        developmentTitle: development.developmentTitle,
      })
    })
  })

  // Sort by time (newest first)
  allReviews.sort((a, b) => b.time - a.time)

  return (
    <section id="reviews" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal">
                <span className="text-primary_green">Reseñas de </span>
                <span className="text-cta_red">Google</span>
              </h2>
              <p className="text-gray-600 mt-2">
                Lo que dicen nuestros clientes sobre nuestros desarrollos
              </p>
            </div>
            <button
              onClick={fetchReviews}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-2 text-sm text-primary_green hover:text-primary_green/80 transition-colors disabled:opacity-50"
              title="Actualizar reseñas"
            >
              <RefreshCw
                className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`}
              />
              <span className="hidden md:inline">Actualizar</span>
            </button>
          </div>

          {refreshing && (
            <div className="mb-4 text-sm text-gray-500 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin" />
              Actualizando reseñas...
            </div>
          )}

          <div className="mb-4 text-xs text-gray-500">
            Última actualización: {lastRefresh.toLocaleTimeString("es-AR")}
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allReviews.map((review, index) => (
                <CarouselItem
                  key={`${review.time}-${index}`}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-cream rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {review.profile_photo_url ? (
                          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={review.profile_photo_url}
                              alt={review.author_name}
                              width={40}
                              height={40}
                              className="rounded-full object-cover"
                              onError={(e) => {
                                // Hide image on error
                                e.currentTarget.style.display = "none"
                              }}
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-primary_green/20 flex items-center justify-center flex-shrink-0">
                            <User className="w-5 h-5 text-primary_green" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {review.author_name}
                          </h3>
                          <p className="text-xs text-gray-500 truncate">
                            {review.developmentTitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">{renderStars(review.rating)}</div>

                    <p className="text-gray-700 text-sm mb-4 line-clamp-4 flex-grow">
                      {review.text}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto">
                      <Clock className="w-3 h-3 flex-shrink-0" />
                      <span>
                        {formatTimeAgo(review.relative_time_description)}
                      </span>
                    </div>

                    {review.author_url && (
                      <a
                        href={review.author_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-xs text-primary_green hover:underline inline-block"
                      >
                        Ver en Google
                      </a>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12 lg:-left-16" />
            <CarouselNext className="right-2 md:-right-12 lg:-right-16" />
          </Carousel>

          {reviews.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Promedio general:{" "}
                <span className="font-semibold text-primary_green">
                  {(
                    reviews.reduce((sum, dev) => sum + dev.rating, 0) /
                    reviews.length
                  ).toFixed(1)}
                </span>{" "}
                de 5 estrellas
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Basado en{" "}
                {reviews.reduce((sum, dev) => sum + dev.totalReviews, 0)}{" "}
                reseñas
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default GoogleReviews
