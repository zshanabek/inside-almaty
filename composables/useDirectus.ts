export const useDirectus = () => {
  const config = useRuntimeConfig()

  return $fetch.create({
    baseURL: `${config.public.directusUrl}/items`,
  })
}
