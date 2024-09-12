<template>
  <div :class="gradientStyle" class="rounded-md w-full h-full p-1">
    <div
      class="bg-white rounded-sm h-full w-full flex flex-col items-center justify-evenly"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  gradientStyle: {
    type: String,
    default: "bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-700",
  },
});
</script>

<style scoped></style>
