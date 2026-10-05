<script setup lang="ts">
import type { Category } from '~/types/content'
defineProps<{ categories: Category[] }>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <NuxtLink v-for="category in categories" :key="category.id" :to="`/places?category=${category.slug}`" class="pill hover:bg-black hover:text-white">
      <span class="mr-2">{{ category.icon }}</span>{{ category.name }}
    </NuxtLink>
  </div>
</template>
