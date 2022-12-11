<template>
  <main
    class="sticky z-10 top-0 left-0 bg-[#2f2f2f] bg-opacity-20 backdrop-filter backdrop-blur-lg"
  >
    <nav
      aria-label="Site Nav"
      class="flex items-center justify-between p-4 container mx-auto"
    >
      <NuxtLink
        to="/"
        class="inline-flex px-3 py-2 font-semibold items-center justify-center rounded-lg !text-white"
      >
        <img src="../assets/img/logo.png" class="w-10 mr-1.5" alt="" />
        SendIt
        <span class="sr-only !text-white">SendIt</span>
      </NuxtLink>

      <ul class="flex items-center gap-2 text-sm font-medium text-gray-200">
        <li>
          <NuxtLink class="rounded-lg px-1 lg:px-3 py-2" to="/">
            Home
          </NuxtLink>
        </li>

        <li>
          <NuxtLink class="rounded-lg px-1 lg:px-3 py-2" to="/add-business">
            Register your business
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </main>
</template>
<script setup></script>
<style></style>
