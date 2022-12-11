<template>
  <section class="h-screen overflow-auto w-full bg-hero">
    <Navbar />
    <main>
      <main
        class="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center text-white"
      >
        <div
          class="lg:min-h-screen w-full lg:w-[50%] p-5 flex justify-center items-center"
        >
          <h1
            class="text-4xl leading-[3rem] md:leading-[6rem] sm:text-5xl py-10 lg:py-0 md:text-4xl font-semibold text-center lg:text-left"
          >
            We order, collect and deliver your essential meat and groceries right to your doorstep
          </h1>
        </div>
        <div
          class="h-full w-full flex justify-center items-center lg:w-[50%] pt-20 lg:pt-0"
        >
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_RLM6k1uUAL.json"
            background="transparent"
            speed="1"
            class="w-[300px] z-[1]"
            loop
            autoplay
          ></lottie-player>
        </div>
      </main>
    </main>
    <main class="bg-black p-2">
      <addStore />
      <Working />
      <Download />
      <faq />
    </main>
    <Footer />
  </section>
</template>
<script setup>
import Navbar from "~~/layouts/navbar.vue";
import Footer from "~~/layouts/footer.vue";
useHead({
  title: "Sendit - Home",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Sendit - Home",
    },
  ],
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
.router-link-exact-active {
  @apply text-green-600;
}
.bg-hero {
  /* background: #000000;
  background: linear-gradient(54deg, #000000 0%, #000000 55%, #168200b9 160%); */

  background-color: hsla(0, 0%, 0%, 1);
  background-image: radial-gradient(
      at 40% 20%,
      hsla(0, 0%, 0%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, #0a4e1a75 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 0%, 0%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340, 0%, 0%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(20, 0%, 0%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(240, 0%, 0%, 1) 0px, transparent 50%);
}
</style>
