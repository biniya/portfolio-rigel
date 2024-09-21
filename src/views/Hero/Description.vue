<template>
  <div class="w-full h-auto lg:h-3/5 lg:py-3 py-0 flex-col items-center md:space-y-0 lg:space-y-10 space-y-14 flex justify-evenly">
    <div class="flex flex-col w-full text-center lg:justify-center font-lexend space-y-6 lg:space-y-14">
      <div class="flex flex-col text-4xl lg:text-6xl text-black font-semibold lg:w-full lg:text-start lg:space-y-2 space-y-6">
        <span class="title ">More Than Clients,</span><br class="hidden md:inline-block"/>
        <span class="relative whitespace-nowrap lg:w-fit w-full bg">
          <span class="relative">We Become </span>
          <svg
              aria-hidden="true"
              class="absolute right-0 top-[80%] h-[0.58em] w-7/12 md:w-5/12 fill-brand-350"
              preserveAspectRatio="none"
              viewBox="0 0 418 42"
          >
            <path
                d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
            ></path>
            <span class="text-brand-350">Partners</span>
          </svg>
        </span>
      </div>

      <p class="hidden lg:w-11/12 md:flex lg:justify-start lg:mt-8 text-sm lg:text-lg font-light text-gray-600 sm:items-center w-full">
        We invest in understanding your vision and collaborate for success.<br />
        Together, we'll strategize and celebrate wins.
      </p>
    </div>

    <div class="flex items-center lg:space-y-4 space-x-5 buttons lg:w-full">
      <button class="bg-brand-400 rounded-lg hover:scale-105 text-sm lg:text-lg px-4 py-2 lg:px-6 lg:py-3 text-white font-semibold">
        <a href="#contactUs">
          Book a 15-min Call
        </a>
      </button>
      <a
          class="inline-flex w-fit items-center justify-center text-sm lg:text-lg font-medium cursor-pointer hover:scale-105 hover:font-semibold hover:underline duration-200 px-4 lg:py-1"
          href="#projects"
      >See Recent Works
        <ChevronRightIcon class="w-6 pl-1" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/20/solid/index.js";
</script>

<style scoped>
/* Adjustments for responsiveness */
.text-center {
  text-align: center;
}
@media (max-width: 768px) {
  .text-3xl {
    font-size: 1.75rem;
  }
  .text-sm {
    font-size: 0.875rem;
  }
  .button {
    padding: 0.75rem 1.5rem;
  }
}
</style>
