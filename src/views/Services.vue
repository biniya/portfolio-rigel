<template>
  <section
    class="bg-black flex items-center flex-col space-y-16 w-full py-20 text-white"
  >
    <div class="text-center font-semibold font-lexend text-5xl leading-relaxed">
      Websites, Mobile Apps, <br />
      Bots, and ... you name it
    </div>

    <div class="flex w-9/12 items-center flex-wrap">
      <div
        v-for="service in services"
        class="w-1/3 flex items-center justify-center p-5"
      >
        <span class="flex items-center w-7/12 text-lg space-x-3">
          <CheckCircleIcon class="w-6 fill-brand-300" />
          <span class="w-11/12"> {{ service }} </span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircleIcon } from "@heroicons/vue/20/solid/index.js";

const services = [
  "Website ",
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

<style scoped></style>
