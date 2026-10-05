<script setup lang="ts">
const route = useRoute()
const { categories, places } = useGuideContent()
const active = computed(() => String(route.query.category || ''))
const filtered = computed(() => active.value ? places.value.filter(p => p.category.slug === active.value) : places.value)
useHead({ title: 'Места' })
</script>

<template>
  <section class="container-page py-14">
    <p class="eyebrow">Каталог</p>
    <h1 class="section-title mt-2">Места Алматы</h1>
    <div class="mt-7"><CategoryChips :categories="categories" /></div>
    <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <PlaceCard v-for="place in filtered" :key="place.id" :place="place" />
    </div>
  </section>
</template>
