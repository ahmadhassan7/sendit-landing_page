<template>
  <main class="w-full bg-[#000000d3]">
    <div class="container mx-auto">
      <div class="py-4 text-white">
        <article
          class="rounded-xl bg-gradient-to-r from-green-500 via-green-900 to-green-600 p-0.5"
        >
          <div class="rounded-[10px] p-4 bg-[#100f0f] sm:p-6">
            <main class="flex justify-start items-start">
              <div
                class="mt-0.5 flex flex-col items-center justify-center w-full lg:w-[60%] text-lg font-medium text-gray-900 dark:text-white"
              >
                <div>
                  <h1 class="text-xl md:text-3xl font-semibold pb-5">
                    List your business with us on SendIt
                  </h1>
                  <ul class="list-disc pl-4 text-xs sm:text-sm">
                    <li class="pb-4">
                      Would you like to engage new customers to enjoy your
                      amazing food and groceries? So would we!
                    </li>
                    <li class="pb-4">
                      We're always looking for new restaurants and shops to join
                      our platform.
                    </li>
                    <li class="pb-4">
                      If you're interested in joining our family, please fill
                      out the form the link and we'll be in touch.
                    </li>
                  </ul>
                </div>
                <div class="flex justify-start items-start w-full p-4">
                  <button class="px-6 py-2 bg-green-600 font-normal rounded-lg">
                    Register your business
                  </button>
                </div>
              </div>
              <div class="w-[40%] hidden lg:flex justify-end items-end">
                <img src="../assets/img/store.svg" class="w-56" alt="" />
              </div>
            </main>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>
<script setup></script>
<style scoped>
.border-gradient {
  z-index: -1;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.457) 0%,
    rgba(255, 255, 255, 0.5606836484593838) 25%,
    rgba(0, 0, 0, 0.47) 50%,
    rgba(235, 237, 237, 0.594297093837535) 75%,
    rgba(0, 0, 0, 0.547) 100%
  );
}
@keyframes rotate-color {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotate-color {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.animate-gradient {
  animation: rotate-color 5s linear infinite;
  -webkit-animation: rotate-color 5s linear infinite;
}
</style>
