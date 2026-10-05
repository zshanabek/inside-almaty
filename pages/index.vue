<script setup lang="ts">
const { categories, places, routes } = useGuideContent()
useHead({ title: 'Гид по Алматы' })
</script>

<template>
  <div>
    <section class="container-page py-14 md:py-24">
      <p class="eyebrow">Независимый городской гид</p>
      <h1 class="mt-4 max-w-5xl text-5xl font-black leading-[0.96] tracking-[-0.05em] md:text-8xl">
        Алматы без туристической воды.
      </h1>
      <p class="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
        Только места, куда я сам бы пошёл и повёл друзей: еда, прогулки, горы и готовые маршруты.
      </p>
      <div class="mt-8"><CategoryChips :categories="categories" /></div>
    </section>

    <section class="container-page py-10">
      <div class="mb-8 flex items-end justify-between gap-4">
        <div><p class="eyebrow">Выбор редакции</p><h2 class="section-title mt-2">Начните отсюда</h2></div>
        <NuxtLink to="/places" class="text-sm font-semibold underline underline-offset-4">Все места</NuxtLink>
      </div>
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <PlaceCard v-for="place in places.slice(0, 3)" :key="place.id" :place="place" />
      </div>
    </section>

    <section class="container-page py-16">
      <p class="eyebrow">Не думайте, куда идти</p>
      <h2 class="section-title mt-2">Готовые маршруты</h2>
      <div class="mt-8 grid gap-5 lg:grid-cols-2">
        <RouteCard v-for="route in routes" :key="route.id" :route="route" />
      </div>
    </section>

    <section class="container-page py-10">
      <div class="rounded-[2rem] bg-black px-7 py-10 text-white md:px-12 md:py-16">
        <p class="eyebrow !text-white/50">Принцип проекта</p>
        <p class="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          Если место среднее — мы так и скажем. Если специально ехать не стоит — тоже.
        </p>
      </div>
    </section>
  </div>
</template>
