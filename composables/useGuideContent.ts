import { categories, places, routes } from '~/data/mock'

export function useGuideContent() {
  // MVP: demo data first. Replace these refs with Directus queries when CMS content is ready.
  const allCategories = ref(categories)
  const allPlaces = ref(places)
  const allRoutes = ref(routes)

  const getPlace = (slug: string) => allPlaces.value.find((place) => place.slug === slug)
  const getRoute = (slug: string) => allRoutes.value.find((route) => route.slug === slug)

  return { categories: allCategories, places: allPlaces, routes: allRoutes, getPlace, getRoute }
}
