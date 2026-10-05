<script setup lang="ts">
const routeParam = useRoute()
const { getRoute } = useGuideContent()
const guideRoute = computed(() => getRoute(String(routeParam.params.slug)))
if (!guideRoute.value) throw createError({ statusCode: 404, statusMessage: 'Маршрут не найден' })
useHead({ title: guideRoute.value?.title })
</script>
<template>
  <article v-if="guideRoute" class="container-page py-12">
    <p class="eyebrow">{{ guideRoute.duration_hours }} ч · ~{{ guideRoute.estimated_budget.toLocaleString('ru-RU') }} ₸</p>
    <h1 class="mt-3 max-w-4xl text-5xl font-black tracking-[-0.04em] md:text-7xl">{{ guideRoute.title }}</h1>
    <p class="mt-5 max-w-2xl text-xl leading-8 text-neutral-600">{{ guideRoute.description }}</p>
    <img :src="guideRoute.image" :alt="guideRoute.title" class="mt-10 aspect-[16/7] w-full rounded-[2rem] object-cover" />
    <div class="mt-12 max-w-3xl">
      <div v-for="stop in guideRoute.stops" :key="stop.position" class="grid grid-cols-[48px_1fr] gap-5 border-t border-black/10 py-7">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-black font-bold text-white">{{ stop.position }}</div>
        <div><NuxtLink :to="`/places/${stop.place.slug}`" class="text-2xl font-bold hover:underline">{{ stop.place.title }}</NuxtLink><p class="mt-2 text-neutral-600">{{ stop.note }}</p><p class="mt-2 text-sm font-semibold">~{{ stop.stay_minutes }} мин</p></div>
      </div>
    </div>
  </article>
</template>
