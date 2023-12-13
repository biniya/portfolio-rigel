<template>
  <div :class="classStyle" class="w-1/4 rounded-lg font-basic p-1">
    <div
      :class="innerClassStyle"
      class="flex w-full flex-col min-h-full justify-evenly space-y-5 p-3"
    >
      <component :is="icon" class="w-10"></component>

      <h1 class="text-3xl font-bold">{{ title }}</h1>
      <span :class="dividerStyle" class="w-full h-[0.1rem]"> </span>
      <p class="">{{ value }}</p>

      <div class="w-full flex justify-end">
        <box-icon
          class="fill-white w-7 h-7 hover:w-8 cursor-pointer hover:h-8"
          name="subdirectory-right"
        ></box-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  classStyle: {
    type: String,
    default:
      "bg-gradient-to-br from-fuchsia-500 via-orange-400 to-pink-500 text-white",
  },
  dividerStyle: {
    type: String,
    default: "bg-gradient-to-r from-purple-500 to-fuchsia-500",
  },
  innerClassStyle: {
    type: String,
    default: "bg-[#1F1F23] text-white",
  },
});
</script>
<style scoped></style>
