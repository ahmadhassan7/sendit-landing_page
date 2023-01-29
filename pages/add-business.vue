<template>
  <Navbar />
  <div
    class="sm:px-6 lg:px-8 max-w-screen-xl min-h-screen h-auto px-4 py-16 mx-auto text-white"
  >
    <div class="mx-auto text-center">
      <h1 class="sm:text-3xl md:text-5xl text-2xl font-bold">
        Add your business to <span class="text-green-600"> Sendit </span>
      </h1>

      <p class="max-w-lg mx-auto mt-4 text-gray-500">
        Join our community of South Africa's finest food businesses and get
        access to get your business online with SendIt
      </p>
    </div>

    <form
      @submit.prevent="submit"
      class="max-w-md mx-auto mt-8 mb-0 space-y-4 text-gray-200"
    >
      <div>
        <label
          class="bg-zinc-800 focus-within:ring-0 block w-full p-4 pr-12 text-sm border-0 rounded-lg shadow-sm outline-none"
          for="file_input"
          >{{ pathName }}</label
        >
        <input
          class="hidden"
          accept="image/*"
          @change="getLink($event)"
          id="file_input"
          type="file"
        />
      </div>
      <div>
        <label for="name" class="sr-only">Name of your business</label>
        <div>
          <input
            type="text"
            v-model="name"
            class="focus:outline-none bg-zinc-800 focus-within:ring-0 w-full p-4 pr-12 text-sm border-0 rounded-lg shadow-sm outline-none"
            placeholder="Enter name of business"
          />
        </div>
      </div>
      <div>
        <label for="email" class="sr-only">Email</label>
        <div>
          <input
            type="email"
            v-model="email"
            class="bg-zinc-800 focus-within:ring-0 w-full p-4 pr-12 text-sm border-0 rounded-lg shadow-sm outline-none"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div>
        <label for="category" class="sr-only"
          >Category of business e.g Meat shop, Burgers joint</label
        >
        <HeadlessListbox v-model="selectedCategory">
          <div class="relative mt-1">
            <HeadlessListboxButton
              class="relative w-full cursor-default rounded-lg bg-zinc-800 py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
              <span class="block truncate">{{ selectedCategory.name }}</span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <ChevronUpDownIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </HeadlessListboxButton>

            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <HeadlessListboxOptions
                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-800 text-zinc-300 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <HeadlessListboxOption
                  v-slot="{ active, selected }"
                  v-for="category in categories"
                  :key="category.name"
                  :value="category"
                  as="template"
                >
                  <li
                    :class="[
                      active ? 'bg-zinc-700 text-green-600' : 'text-zinc-300',
                      'relative cursor-default select-none py-2 pl-10 pr-4',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-medium' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ category.name }}</span
                    >
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </HeadlessListboxOption>
              </HeadlessListboxOptions>
            </transition>
          </div>
        </HeadlessListbox>
      </div>

      <div>
        <label for="phone" class="sr-only">Phone</label>
        <div>
          <input
            type="text"
            v-model="phone"
            class="focus:outline-none bg-zinc-800 focus-within:ring-0 w-full p-4 pr-12 text-sm border-0 rounded-lg shadow-sm outline-none"
            placeholder="Enter your business phone number"
          />
        </div>
      </div>
      <div>
        <label for="location" class="sr-only">Location</label>
        <div>
          <GMapAutocomplete @place_changed="setPlace">
            <template #input="slotProps">
              <v-text-field v-bind="slotProps" />
            </template>
          </GMapAutocomplete>
        </div>
      </div>
      <div>
        <label for="about" class="sr-only">About your business</label>
        <div>
          <textarea
            v-model="about"
            placeholder="Tell us about your business"
            class="focus:outline-none bg-zinc-800 focus-within:ring-0 w-full p-4 pr-12 text-sm border-0 rounded-lg shadow-sm outline-none resize-y"
            id="about"
          ></textarea>
        </div>
      </div>

      <div class="flex items-center justify-end">
        <button
          type="submit"
          class="hover:bg-green-700 w-full inline-block px-5 py-3 text-sm font-medium text-white bg-green-600 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
    <HeadlessTransitionRoot appear :show="isOpen" as="template">
      <HeadlessDialog as="div" @close="closeModal" class="relative z-10">
        <HeadlessTransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex items-center justify-center min-h-full p-4 text-center"
          >
            <HeadlessTransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <HeadlessDialogPanel
                class="rounded-2xl w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-zinc-900 border-2 border-zinc-700 shadow-xl"
              >
                <HeadlessDialogTitle
                  as="h3"
                  :class="isWentWrong ? 'text-red-600' : 'text-green-600'"
                  class="text-lg font-medium leading-6"
                >
                  {{ modalHead }}!
                </HeadlessDialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-300">
                    {{ modalBody }}
                  </p>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    :class="
                      isWentWrong
                        ? 'text-red-900 bg-red-100 hover:bg-red-200 focus-visible:ring-red-500'
                        : 'text-green-900 bg-green-100 hover:bg-green-200 focus-visible:ring-green-500'
                    "
                    class="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md"
                    @click="isOpen = false"
                  >
                    {{ modalBtn }}
                  </button>
                </div>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </div>
</template>
<script setup>
import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "~~/firebase/config";
import Navbar from "~~/layouts/navbar.vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import {
  getStorage,
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
useHead({
  title: "Sendit - Add your business",
  meta: [
    {
      name: "description",
      content: "Add your business to our directory",
    },
  ],
});
let modalHead = ref("Congratulations!");
let modalBody = ref(
  "You have been added to our waiting list! We are thrilled to have you join us and look forward to having you as a part of our community. Thank you for your patience and understanding"
);
let modalBtn = ref("Got it, thanks!");
let isWentWrong = ref(false);
let center = ref();
let location = ref();
let name = ref();
let email = ref();
let category = ref();
let phone = ref();
let about = ref();
let logo = ref("");
let isOpen = ref(false);
let categories = ref([]);
const selectedCategory = ref({
  name: "Select Category of your business",
});
let getCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "foodcategories"));
  querySnapshot.forEach((doc) => {
    categories.value.push({
      name: doc.data().categoryname,
    });
  });
  selectedCategory.value = categories.value[0];
};
getCategories();
let submit = async () => {
  let data = {
    storename: name.value,
    email: email.value,
    categoryname: selectedCategory.value.name,
    phonenumber: phone.value,
    address: location.value,
    about: about.value,
    center: center.value,
    logo: logo.value,
  };
  const querySnapshot = await getDocs(
    query(collection(db, "pending-stores"), where("email", "==", email.value))
  );
  if (querySnapshot.size > 0) {
    isWentWrong.value = true;
    modalHead.value = "Oops!";
    modalBody.value =
      "We know you are excited to join us, but you have already applied. We will get back to you soon!";
    modalBtn.value = "Okay! I'll not spam you";
    openModal();
    return;
  }
  const querySnapshot2 = await getDocs(
    query(
      collection(db, "pending-stores"),
      where("storename", "==", name.value)
    )
  );
  if (querySnapshot2.size > 0) {
    isWentWrong.value = true;
    modalHead.value = "Oops!";
    modalBody.value =
      "This store name is already taken. Please try another one";
    modalBtn.value = "Okay!";
    openModal();
    return;
  } else {
    try {
      await addDoc(collection(db, "pending-stores"), data).then(() => {
        isWentWrong.value = false;
        modalHead.value = "Congratulations!";
        modalBody.value =
          "You have been added to our waiting list! We are thrilled to have you join us and look forward to having you as a part of our community. Thank you for your patience and understanding";
        modalBtn.value = "Got it, thanks!";
        openModal();
        name.value = "";
        email.value = "";
        category.value = "";
        phone.value = "";
        about.value = "";
        logo.value = "";
        location.value = "";
        center.value = "";
        let inputs = document.querySelectorAll("input");
        inputs.forEach((input) => {
          input.value = "";
        });
      });
    } catch (error) {
      console.log(error);
      isWentWrong.value = true;
      modalHead.value = "Oops!";
      modalBody.value = "Something went wrong. Please try again later";
      modalBtn.value = "Okay!";
      openModal();
    }
  }
};
//  run function on blur of input
const setPlace = (place) => {
  let obj = {
    lat: place.geometry.location.lat(),
    lng: place.geometry.location.lng(),
  };
  center.value = obj;
  location.value = place.formatted_address;
};
let pathName = ref("Upload logo (Optional)");
let path = ref();
let getLink = async (e) => {
  pathName.value = e.target.files[0].name;
  path.value = e.target.files[0];
  setTimeout(() => {
    const storage = getStorage();
    const storageRef = sRef(storage, "new/" + pathName.value);
    const uploadTask = uploadBytesResumable(storageRef, path.value);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            pathName.value = "Upload is paused";
            break;
          case "running":
            pathName.value = "Upload is running";
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          logo.value = downloadURL.toString();
          pathName.value = "Uploaded";
        });
      }
    );
  }, 1000);
};

// const selectedPerson = ref(people[0]);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>
<style>
.pac-target-input {
  @apply w-full font-sans !font-medium rounded-lg focus:outline-none bg-zinc-800 outline-none p-4 pr-12 !m-0 border-0 focus-within:ring-0 text-sm shadow-sm;
}
</style>
