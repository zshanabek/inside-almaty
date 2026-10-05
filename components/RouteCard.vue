<script setup lang="ts">
import type { GuideRoute } from '~/types/content'
defineProps<{ route: GuideRoute }>()
</script>

<template>
  <NuxtLink :to="`/routes/${route.slug}`" class="card group block">
    <div class="aspect-[16/9] overflow-hidden">
      <img :src="route.image" :alt="route.title" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
    </div>
    <div class="p-5">
      <p class="eyebrow">{{ route.duration_hours }} ч · ~{{ route.estimated_budget.toLocaleString('ru-RU') }} ₸</p>
      <h3 class="mt-2 text-2xl font-bold tracking-tight">{{ route.title }}</h3>
      <p class="mt-2 text-sm leading-6 text-neutral-600">{{ route.description }}</p>
    </div>
  </NuxtLink>
</template>
