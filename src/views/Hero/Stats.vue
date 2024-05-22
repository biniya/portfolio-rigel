<template>
  <div
    class="w-5/12 2xl:w-4/12 -mt-20 flex flex-wrap h-3/5 justify-evenly items-center stats"
  >
    <GradientBorder
      class="!w-36 !h-32 mr-12"
      gradient-style="bg-gradient-to-bl from-sky-500 via-purple-500 to-indigo-700"
    >
      <template #default>
        <div class="font-bold text-5xl shuffle" data-final="7+">0</div>
        <div class="text-sm">Experience</div>
      </template>
    </GradientBorder>

    <GradientBorder class="!w-36 !h-32">
      <template #default>
        <div class="font-bold text-5xl shuffle" data-final="12+">0</div>
        <div class="text-sm">Developers</div>
      </template>
    </GradientBorder>

    <GradientBorder class="!w-36 !h-32 mr-12">
      <template #default>
        <div class="font-bold text-5xl shuffle" data-final="5/5">0</div>
        <div class="text-sm">Review</div>
      </template>
    </GradientBorder>

    <GradientBorder class="!w-36 !h-32">
      <template #default>
        <div class="font-bold text-5xl shuffle" data-final="20+">0</div>
        <div class="text-sm">Projects</div>
      </template>
    </GradientBorder>
  </div>
</template>
<script setup>
import GradientBorder from "../../components/GradientBorder.vue";
</script>

<style scoped></style>
