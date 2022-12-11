<template>
  <main class="pt-10 ">
    <div class="container mx-auto">
      <div class="flex flex-col justify-center items-center text-white">
        <h1 class="text-2xl lg:text-5xl font-semibold">How SendIt works?</h1>
        <!-- <p class="max-w-[42rem] text-xs sm:text-base text-center pt-4">
          To get delivery via SendIt, simply locate the restaurants you want something from
           browse through a variety of menu they are offering
          select the items you want and place your order.
        </p> -->
        <div
          class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 py-4 lg:py-10 w-fit-content mx-auto"
        >
          <div
            v-for="index in 1"
            :key="index + '1'"
            data-tilt
            class="rounded-2xl hover:0 bg-gradient-to-r from-green-600 via-green-900 to-green-700 p-0.5 shadow-xl"
          >
            <div class="block rounded-xl bg-black p-6 sm:p-4">
              <div class="mt-16 sm:pr-8">
                  Find a restaurant
                <h3 class="text-xl font-bold text-gray-100">
                </h3>
                <p class="mt-2 text-sm text-gray-300">
                  To get delivery via SendIt, simply locate the restaurants you want something from
                  browse through a variety of menu they are offering,
                  select the items you want, make the payment and your order will be placed. 
                  Rest of the working you will leave to SendIt we will deliver it at your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import VanillaTilt from "vanilla-tilt";
import { onMounted } from "vue";

onMounted(() => {
  const tilt = document.querySelectorAll("[data-tilt]");
  VanillaTilt.init(tilt, {
    max: 12,
    speed: 1000,
    scale: 1.05,
    glare: false,
  });
});
</script>
<style></style>
