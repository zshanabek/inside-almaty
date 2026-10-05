export type Category = {
  id: number
  name: string
  slug: string
  icon: string
}

export type District = {
  id: number
  name: string
  slug: string
}

export type Place = {
  id: number
  title: string
  slug: string
  category: Category
  district: District
  short_description: string
  description: string
  verdict: string
  address: string
  latitude: number
  longitude: number
  price_level: number
  average_check?: number
  recommended: boolean
  hidden_gem?: boolean
  tourist_trap?: boolean
  best_time?: string
  duration_minutes?: number
  image: string
  tags: string[]
}

export type RouteStop = {
  place: Place
  position: number
  stay_minutes: number
  note?: string
}

export type GuideRoute = {
  id: number
  title: string
  slug: string
  description: string
  duration_hours: number
  estimated_budget: number
  image: string
  stops: RouteStop[]
}
