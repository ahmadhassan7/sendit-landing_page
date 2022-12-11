<template>
  <section id="faq" class="py-10 2xl:py-40">
    <div class="container px-4 mx-auto">
      <div class="mb-20 text-center">
        <div class="text-3xl lg:text-5xl font-bold text-white capitalize">
          Hey! Have any questions?
        </div>
      </div>
      <div class="max-w-4xl mx-auto">
        <ul v-for="(items, index) in faqItems" :key="index">
          <li
            @click="items.opened = !items.opened"
            class="mb-4 px-4 lg:px-8 py-4 bg-green-500/10 rounded-2xl"
          >
            <button class="flex w-full text-left text-gray-300">
              <div class="w-auto mr-8">
                <span
                  class="flex items-center justify-center w-12 h-12 text-lg font-bold border border-green-600 text-green-700 rounded-full"
                  >{{ index + 1 }}</span
                >
              </div>
              <div class="w-full mt-3">
                <div class="flex items-center justify-between faq">
                  <h3 class="text-xs sm:text-sm md:text-xl font-normal faq">
                    {{ items.question }}
                  </h3>
                  <span v-if="!items.opened" class="ml-4 text-green-500">
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span v-if="items.opened" class="ml-4 text-green-500">
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div
                  v-if="items.opened"
                  :class="[items.opened ? 'animate-fade-in' : '']"
                  class="mt-6 border-l-2 pl-2 border-gray-50 md:pl-10"
                >
                  <p class="mb-5 text-xs sm:text-sm md:text-base">
                    {{ items.answer }}
                  </p>
                </div>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

let faqItems = ref([
  // {
  //   question: "How secured is Sendit?",
  //   answer:
  //     "Sendit is super secured. We use the best security practices to protect your data. We use industry leading security technologies to protect your data.",
  //   opened: false,
  // },
  {
    question: "Is Sendit free to use?",
    answer: "Yes Sendit is totally free to use.",
    opened: false,
  },
  {
    question: "Where is SendIT available?",
    answer: "SendIt is available in South Africa only. Our targeted area's are Fordsburg and Mayfair included.",
    opened: false,
  },
  {
    question: "On which stores Sendit is avialable?",
    answer: "Sendit is available on Playstore for android users and on Appstore for iOS users.",
    opened: false,
  },
  {
    question: "How can I contact Sendit?",
    answer:
      "You can contact us by emailing us at info@senditdelivery.co.za",
    opened: false,
  },
]);
</script>
<style scoped>
.animate-fade-in {
  -webkit-animation: fadeIn;
  animation: fadeIn 0.7s ease-in-out;
}
</style>
