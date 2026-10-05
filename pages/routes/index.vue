<script setup lang="ts">
const { routes } = useGuideContent()
useHead({ title: 'Маршруты' })
</script>
<template>
  <section class="container-page py-14">
    <p class="eyebrow">Готовые планы</p><h1 class="section-title mt-2">Маршруты по Алматы</h1>
    <div class="mt-10 grid gap-5 lg:grid-cols-2"><RouteCard v-for="route in routes" :key="route.id" :route="route" /></div>
  </section>
</template>
