<template>
  <div
    class="min-h-screen w-full font-lexend flex justify-evenly py-14 bg-gray-100"
  >
    <section class="w-5/12 flex flex-col space-y-10">
      <div class="text-3xl text-black font-light">
        Full digital product expertise <br />
        <span class="pr-4 font-semibold text-primary">under one roof </span>
      </div>

      <div class="flex flex-col space-y-5">
        <div
          v-for="(item, index) in list"
          :key="index"
          :class="
            index === selectedItemIndex
              ? 'bg-white'
              : ' hover:bg-gray-200 opacity-50'
          "
          class="flex items-center px-3 py-8 font-light space-x-5 cursor-pointer"
          @click="selectedItemIndex = index"
        >
          <div
            :class="index === selectedItemIndex ? 'pr-3 font-bold' : ''"
            class="w-1/12 text-end font-semibold leading-relaxed"
          >
            0{{ index + 1 }}
          </div>
          <div
            :class="
              index === selectedItemIndex ? 'pr-3 font-bold' : 'font-semibold'
            "
            class="w-3/12 pl-4 text-3xl"
          >
            {{ item.title }}
          </div>
          <div
            :class="index === selectedItemIndex ? 'inline-flex' : 'hidden'"
            class="w-8/12 opacity-80"
          >
            {{ item.description }}
          </div>
        </div>
      </div>
    </section>

    <section class="w-4/12 text-lg flex items-center leading-loose opacity-70">
      <div class="bg-white rounded-xl text-center shadow-sm p-3">
        Whether you want to consult an idea, add missing capabilities, quickly
        expand your team, or hand over a project - we've got you covered.
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedItemIndex = ref(0);

const list = [
  {
    title: "Ideate",
    description: "Identify, shape and validate your product idea",
  },
  {
    title: "Design",
    description: "Craft beautiful digital experiences across platforms",
  },
  {
    title: "Develop",
    description: "Bring products to life with world-class engineering",
  },
  {
    title: "Maintain",
    description: "Safeguard your product's quality and reliability",
  },
  {
    title: "Scale",
    description: "Gain flexibility to adjust and expand on the fly",
  },
];
</script>

<style scoped></style>
