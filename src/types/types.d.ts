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
}

export interface Property {
  title: string
  list: string[]
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
}

export type FilterProps = {
  location: string
  type: string
  operation: string
  size: string
  price: string
}
