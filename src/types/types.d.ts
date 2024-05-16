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
}

export interface Property {
  title: string
  list: string[]
}
