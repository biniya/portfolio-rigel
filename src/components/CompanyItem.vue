<template>
  <div class="flex-none h-fit w-fit text-center pr-5 py-1">
    <!-- <box-icon :name="company" class="w-8 h-8"></box-icon> -->
    <div
      class="font-semibold md:font-bold uppercase text-sm text-center lg:text-base"
    >
      {{ label }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  company: {
    type: String,
    default: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>
<style scoped></style>
