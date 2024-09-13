<template>
  <section class="bg-black flex items-center flex-col lg:space-y-16 w-full py-10 lg:py-20 text-white">
    <div class="text-center font-semibold font-lexend text-3xl md:text-5xl leading-relaxed">
      Websites, Mobile Apps, <br />
      Bots, and ... you name it
    </div>

    <!-- Services list -->
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center lg:w-10/12 w-9/12 mt-8">
      <div
          v-for="(service, index) in services"
          :key="index"
          class="p-4 flex items-center justify-start lg:justify-center"
      >
        <span class="flex items-center text-base sm:text-lg space-x-3">
          <CheckCircleIcon class="w-5 sm:w-6 fill-brand-300" />
          <span> {{ service }} </span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircleIcon } from "@heroicons/vue/20/solid/index.js";

const services = [
  "Website",
  "Mobile App",
  "Consultation",
  "Telegram Bot",
  "Analytics",
  "Internal Analysis",
  "Brainstorming",
  "Monitoring",
  "Service",
];
</script>

<style scoped>
/* Ensure proper spacing and responsiveness */
@media (max-width: 640px) {
  .text-center {
    font-size: 1.75rem; /* Smaller heading size for mobile */
  }
  .p-4 {
    padding: 1rem; /* Reduced padding on mobile */
  }
  .text-base {
    font-size: 0.875rem; /* Smaller text size on mobile */
  }
}

@media (min-width: 768px) {
  .text-center {
    font-size: 2.5rem; /* Larger heading size for tablets and desktops */
  }
  .text-lg {
    font-size: 1.125rem; /* Larger text for services on larger screens */
  }
}
</style>
