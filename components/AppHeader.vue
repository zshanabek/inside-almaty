<template>
  <header class="border-b border-black/10 bg-[var(--paper)]/95 backdrop-blur">
    <div class="container-page flex h-16 items-center justify-between">
      <NuxtLink to="/" class="text-lg font-black tracking-tight">ALMATY LOCAL</NuxtLink>
      <nav class="flex items-center gap-5 text-sm font-medium">
        <NuxtLink to="/places" class="hover:opacity-60">Места</NuxtLink>
        <NuxtLink to="/routes" class="hover:opacity-60">Маршруты</NuxtLink>
        <NuxtLink to="/map" class="hover:opacity-60">Карта</NuxtLink>
      </nav>
    </div>
  </header>
</template>
