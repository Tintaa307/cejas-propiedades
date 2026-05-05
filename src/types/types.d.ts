export interface Root {
  works: Work[]
}

export interface Work {
  title: string
  value: string
  location: string
  details: string[]
  imgs: string[]
  blueprints: string[]
  map: string
  properties?: Property[]
  list?: string[]
  video: string
  isSold: boolean
  isComingSoon?: boolean
}

export interface Property {
  title: string
  list: string[]
  prices: string[]
}

export type PropertyCurrency = "ARS" | "USD"

export interface BatchProps {
  id: number
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
  currency: PropertyCurrency
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

export interface Review {
  author_name: string
  rating: number
  relative_time_description: string
  text: string
  developmentTitle: string
}

export interface PropertyImageEntry {
  name: string
  id?: string
  updated_at?: string
  created_at?: string
  last_accessed_at?: string
  metadata?: Record<string, unknown> | null
  path: {
    relativePath: string
    publicURL: {
      data: {
        publicUrl: string
      }
    }
  }
}
