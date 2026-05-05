"use client"

import { Star, User, Clock } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import reviewsData from "@/data/reviews.json"
import { Review } from "@/types/types"

const reviews = reviewsData.reviews as Review[]

const renderStars = (rating: number) => (
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

const GoogleReviews = () => {
  if (reviews.length === 0) return null

  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  return (
    <section id="reviews" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal">
              <span className="text-primary_green">Reseñas de </span>
              <span className="text-cta_red">Google</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Lo que dicen nuestros clientes sobre nuestros desarrollos
            </p>
          </div>

          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-2">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={`${review.author_name}-${index}`}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-cream rounded-lg border border-primary_green shadow-md p-6 h-full hover:shadow-lg transition-shadow flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary_green/20 flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-primary_green" />
                        </div>
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
                      <span>{review.relative_time_description}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12 lg:-left-16" />
            <CarouselNext className="right-2 md:-right-12 lg:-right-16" />
          </Carousel>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Promedio general:{" "}
              <span className="font-semibold text-primary_green">
                {averageRating.toFixed(1)}
              </span>{" "}
              de 5 estrellas
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Basado en {reviews.length} reseñas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoogleReviews
