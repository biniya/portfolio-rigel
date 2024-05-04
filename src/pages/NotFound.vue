<template>
  <section class="bg-white text-black font-lexend">
    <div
      class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12"
    >
      <div class="wf-ull lg:w-1/2">
        <p class="text-xl font-bold p-3 border-l-2 border-brand-300">
          404 error
        </p>
        <h1 class="mt-3 text-2xl font-semibold dark:text-white md:text-3xl">
          Page not found
        </h1>
        <p class="mt-4">Sorry, the page you are looking for doesn't exist.</p>
        <div class="flex items-center mt-6 gap-x-3">
          <router-link
            class="flex items-center justify-center w-1/2 py-2 text-sm transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto px-5 border-black hover:scale-105 hover:bg-brand-350 hover:text-white"
            to="/"
          >
            <svg
              class="w-5 h-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Home</span>
          </router-link>
        </div>
      </div>

      <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
        <img
          alt="page-not-found"
          class="w-full max-w-lg lg:mx-auto"
          src="../assets/404.svg"
        />
      </div>
    </div>
  </section>
</template>
<script setup></script>
