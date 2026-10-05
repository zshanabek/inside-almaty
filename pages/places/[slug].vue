<script setup lang="ts">
const route = useRoute()
const { getPlace } = useGuideContent()
const place = computed(() => getPlace(String(route.params.slug)))
if (!place.value) throw createError({ statusCode: 404, statusMessage: 'Место не найдено' })
useHead({ title: place.value?.title })
</script>

<template>
  <article v-if="place" class="container-page py-10 md:py-16">
    <div class="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
      <div>
        <img :src="place.image" :alt="place.title" class="aspect-[4/3] w-full rounded-[2rem] object-cover" />
      </div>
      <div class="lg:sticky lg:top-8">
        <p class="eyebrow">{{ place.category.name }} · {{ place.district.name }}</p>
        <h1 class="mt-3 text-5xl font-black tracking-[-0.04em] md:text-6xl">{{ place.title }}</h1>
        <div class="mt-5 flex flex-wrap gap-2">
          <span v-if="place.recommended" class="pill !bg-black !text-white">Local pick</span>
          <span v-if="place.hidden_gem" class="pill">Hidden gem</span>
          <span class="pill">{{ '₸'.repeat(place.price_level) }}</span>
        </div>
        <div class="mt-8 rounded-3xl border border-black/10 bg-white p-6">
          <p class="eyebrow">Мой вердикт</p>
          <p class="mt-2 text-xl font-semibold leading-8">{{ place.verdict }}</p>
        </div>
        <dl class="mt-7 grid grid-cols-2 gap-5 text-sm">
          <div><dt class="text-neutral-500">Средний чек</dt><dd class="mt-1 font-semibold">{{ place.average_check?.toLocaleString('ru-RU') || '—' }} ₸</dd></div>
          <div><dt class="text-neutral-500">Лучшее время</dt><dd class="mt-1 font-semibold">{{ place.best_time }}</dd></div>
          <div><dt class="text-neutral-500">Сколько времени</dt><dd class="mt-1 font-semibold">~{{ place.duration_minutes }} мин</dd></div>
          <div><dt class="text-neutral-500">Адрес</dt><dd class="mt-1 font-semibold">{{ place.address }}</dd></div>
        </dl>
      </div>
    </div>
    <div class="mt-14 max-w-3xl">
      <h2 class="text-3xl font-bold tracking-tight">Зачем сюда идти</h2>
      <p class="mt-4 text-lg leading-8 text-neutral-700">{{ place.description }}</p>
    </div>
  </article>
</template>
