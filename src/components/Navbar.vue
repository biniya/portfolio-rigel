<template>
  <nav
    v-if="showNavBar"
    :class="navBarStore.style"
    class="fixed top-0 w-full z-50 lg:px-16 md:px-10 lg:py-3 py-2 md:flex md:justify-between md:items-center text-center font-semibold font-lexend"
  >
    <div class="flex items-center justify-between">
      <router-link
        :class="navBarStore.secondaryStyle"
        class="w-fit text-2xl px-5 font-bold rounded-md lowercase"
        href="#home"
        to="/"
      >
        rigel.<span :class="navBarStore.logoStyle">studio</span>
      </router-link>

      <!-- Mobile menu button -->
      <div class="flex md:hidden" @click="handleMenuClick">
        <button
          v-if="!navBarStore.showNavBar"
          :class="navBarStore.secondaryStyle"
          class="pr-4"
          type="button"
        >
          <svg class="w-6 h-6" viewBox="0 0 24 24">
            <path
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
        <box-icon
          v-else
          :class="navBarStore.menuButtonStyle"
          name="x"
        ></box-icon>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul
      :class="
        navBarStore.showNavBar
          ? 'flex  mt-10 z-50 ' + navBarStore.menuStyle
          : 'hidden'
      "
      class="flex-col underline underline-offset-8 lg:no-underline font-light h-screen md:h-fit space-y-10 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
    >
      <a
        v-for="(section, index) in sections"
        v-if="!isOnSubRoute"
        :key="index"
        :class="'border-' + navBarStore.secondaryStyle"
        :href="section.linkId"
        class="text-md hover:border-b-2 font-medium hover:font-bold uppercase"
        @click="scrollToSection($event, section.linkId)"
      >
        {{ section.name }}
      </a>

      <a
        v-if="isOnSubRoute"
        class="uppercase hover:text-primary"
        href="#contact"
        @click="navBarStore.toggleNavBar()"
      >
        Contact
      </a>
    </ul>
  </nav>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useNavBarStore } from "../store/navbar_store.js";

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
    // Remove navbar on SMS sub-route
    if (newPath === "/SMS") {
      showNavBar.value = false;
    }
  },
);

function scrollToSection(event, linkId) {
  event.preventDefault();
  const targetElement = document.querySelector(linkId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
  navBarStore.toggleNavBar();

  switch (linkId) {
    case "#home":
      navBarStore.currentPage = "home";
      break;
    case "#about":
      navBarStore.currentPage = "about";
      break;
    case "#projects":
      navBarStore.currentPage = "projects";
      break;
    case "#contact":
      navBarStore.currentPage = "contact";
      break;
    default:
      break;
  }
  navBarStore.setMenuTheme();
}

const handleMenuClick = () => {
  navBarStore.toggleNavBar();
  navBarStore.toggleMenu();
  navBarStore.setMenuTheme();
};
</script>

<style scoped></style>