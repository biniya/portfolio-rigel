<template>
  <div
      class="w-full mt-10 lg:w-5/12 2xl:w-5/12 lg:-mt-20 flex flex-row flex-wrap h-auto lg:h-3/5 justify-evenly items-center stats gap-2"
  >
    <GradientBorder
        class="!w-32 md:!w-36 !h-28 md:!h-32 mr-8 md:mr-12"
        gradient-style="bg-gradient-to-bl from-sky-500 via-purple-500 to-indigo-700"
    >
      <template #default>
        <div class="font-bold text-4xl md:text-5xl shuffle" data-final="7+">0</div>
        <div class="text-sm">Experience</div>
      </template>
    </GradientBorder>

    <GradientBorder class="!w-32 md:!w-36 !h-28 md:!h-32">
      <template #default>
        <div class="font-bold text-4xl md:text-5xl shuffle" data-final="12+">0</div>
        <div class="text-sm">Developers</div>
      </template>
    </GradientBorder>

    <GradientBorder class="!w-32 md:!w-36 !h-28 md:!h-32 mr-8">
      <template #default>
        <div class="font-bold text-4xl md:text-5xl shuffle" data-final="5/5">0</div>
        <div class="text-sm">Review</div>
      </template>
    </GradientBorder>

    <GradientBorder class="!w-32 md:!w-36 !h-28 md:!h-32">
      <template #default>
        <div class="font-bold text-4xl md:text-5xl shuffle" data-final="20+">0</div>
        <div class="text-sm">Projects</div>
      </template>
    </GradientBorder>
  </div>
</template>

<script setup>
import GradientBorder from "../../components/GradientBorder.vue";
</script>

<style scoped></style>
