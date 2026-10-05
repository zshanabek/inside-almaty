<script setup lang="ts">
import type { Place } from '~/types/content'
defineProps<{ place: Place }>()
</script>

<template>
  <NuxtLink :to="`/places/${place.slug}`" class="card group block">
    <div class="aspect-[4/3] overflow-hidden bg-neutral-200">
      <img :src="place.image" :alt="place.title" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
    </div>
    <div class="p-5">
      <div class="mb-3 flex flex-wrap gap-2">
        <span v-if="place.recommended" class="pill !bg-black !text-white">Local pick</span>
        <span v-if="place.hidden_gem" class="pill">Hidden gem</span>
        <span class="pill">{{ '₸'.repeat(place.price_level) }}</span>
      </div>
      <h3 class="text-xl font-bold tracking-tight">{{ place.title }}</h3>
      <p class="mt-2 text-sm leading-6 text-neutral-600">{{ place.short_description }}</p>
      <div class="mt-5 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-neutral-500">
        <span>{{ place.category.icon }} {{ place.category.name }}</span>
        <span>{{ place.district.name }}</span>
      </div>
    </div>
  </NuxtLink>
</template>
