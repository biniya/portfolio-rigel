<template>
  <div
    :class="classStyle"
    class="rounded-lg flex justify-between w-full font-basic px-3 py-4"
  >
    <div class="w-1/12 flex items-start pt-1 h-full">
      <component
        :is="icon"
        :class="iconStyle"
        class="w-6 text-teal-500"
      ></component>
    </div>

    <div class="flex w-10/12 flex-col space-y-2">
      <span class="text-2xl font-bold uppercase">{{ title }}</span>
      <span class="font-medium text-sm text-gray-700">{{ description }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  iconStyle: {
    type: String,
    default: "text-black",
  },
  classStyle: {
    type: String,
    default: "",
  },
});
</script>
<style scoped></style>
