import { defineNuxtPlugin } from "#app";
import VueGoogleMaps from "@fawmi/vue-google-maps";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyDljUoBaSn73fT_pzdD5qPlyeRqBIMVWck",
      libraries: "places", // This is required if you use the Autocomplete plugin
      useGeolocation: true,
    },
    autobindAllEvents: true,
  });
});
