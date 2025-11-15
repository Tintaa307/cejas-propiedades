export interface Root {
  works: Work[]
}

export interface Work {
  title: string
  value: string
  location: string
  details: string[]
  imgs: any[]
  blueprints: any[]
  map: string
  properties?: Property[]
  list?: string[]
  video: string
  isSold: boolean
  isComingSoon?: boolean
  placeId?: string
}

export interface Property {
  title: string
  list: string[]
  prices: string[]
}

export interface BatchProps {
  id: string
  description: string
  address: string
  site: string
  price: string
  location: string
  onsale: boolean
  type: string
  public_url: string
  locality: string
  name: string
}

export type FilterProps = {
  location: string
  type: string
  operation: string
  price: string
  sortBy: string
}

export interface PublicUser {
  id: string
  email: string
  name: string
  phone: string
  role: "customer" | "admin"
}

export type AppActionError = {
  statusCode: number
  message: string
  userMessage?: string
  fieldErrors?: Record<string, string[]>
  details?: unknown
}

export interface GoogleReview {
  author_name: string
  author_url?: string
  language: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

export interface GooglePlaceDetails {
  place_id: string
  name: string
  rating: number
  user_ratings_total: number
  reviews: GoogleReview[]
}

export interface DevelopmentReview {
  developmentName: string
  developmentTitle: string
  placeId?: string
  reviews: GoogleReview[]
  rating: number
  totalReviews: number
}