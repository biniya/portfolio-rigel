<template>
  <div class="w-full">
    <nav
        v-if="showNavBar"
        :class="navBarStore.style"
        class="fixed top-0 w-full z-50 px-6 lg:px-24 py-4 lg:py-6 flex justify-between items-center font-semibold font-lexend"
    >
      <!-- Logo Section -->
      <div class="flex items-center">
        <router-link
            :class="navBarStore.secondaryStyle"
            class="text-lg lowercase font-inter"
            href="#home"
            to="/"
        >
          rigel.<span :class="navBarStore.logoStyle">studio</span>
        </router-link>
      </div>

      <!-- Mobile menu button -->
      <div class="flex md:hidden" @click="handleMenuClick">
        <button class="focus:outline-none">
          <!-- Hamburger Icon -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <!-- Navigation Links for Desktop -->
      <ul class="hidden md:flex items-center space-x-10">
        <a
            v-for="(section, index) in sections"
            :key="index"
            :href="section.linkId"
            class="text-sm hover:border-b-2 font-normal hover:font-bold uppercase px-4"
            @click="scrollToSection($event, section.linkId)"
        >
          {{ section.name }}
        </a>

        <!-- Call-to-Action Button (Desktop) -->
        <div class="bg-brand-350 rounded-lg px-4 py-2 text-white cursor-pointer hover:scale-105 transition-transform">
          Book a 15-min Call
        </div>
      </ul>

      <!-- Mobile Menu Links with Semi-transparent Background -->
      <ul
          v-if="navBarStore.showMenu"
          class="flex flex-col items-center fixed top-0 left-0 w-full h-full bg-white z-50 space-y-10 pt-16 transition-transform duration-300 md:hidden"
      >
        <a
            v-for="(section, index) in sections"
            :key="index"
            :href="section.linkId"
            class="text-lg uppercase font-normal px-6"
            @click="scrollToSection($event, section.linkId)"
        >
          {{ section.name }}
        </a>

        <!-- Call-to-Action Button (Mobile) -->
        <div class="bg-brand-350 rounded-lg px-6 py-2 text-white cursor-pointer hover:scale-105 transition-transform">
          Book a 15-min Call
        </div>

        <!-- X button to close the menu -->
        <div class="absolute top-0 right-0 mr-10 mt-10" @click="handleMenuClick">
          <XMarkIcon class="w-10 h-10" />
        </div>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useNavBarStore } from "../store/navbar_store.js";
import { XMarkIcon } from "@heroicons/vue/24/outline/index.js";

const navBarStore = useNavBarStore();
const showNavBar = ref(true);

const sections = [
  { name: "Home", linkId: "#home" },
  { name: "About", linkId: "#about" },
  { name: "Projects", linkId: "#projects" },
  { name: "Contact", linkId: "#contact" },
];

const route = useRouter().currentRoute;
const isOnSubRoute = ref(false);
const subRoute = "/SMS";

watch(
    () => route.value.path,
    (newPath) => {
      isOnSubRoute.value = newPath === subRoute;
      if (newPath === "/SMS") {
        showNavBar.value = false;
      }
    }
);

function scrollToSection(event, linkId) {
  event.preventDefault();
  const targetElement = document.querySelector(linkId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
  navBarStore.toggleNavBar();
}

const handleMenuClick = () => {
  navBarStore.toggleMenu(); // Toggles the menu visibility
};
</script>

<style scoped>
/* Transition for mobile menu opening and closing */
ul {
  transition: all 0.3s ease-in-out;
}
</style>
