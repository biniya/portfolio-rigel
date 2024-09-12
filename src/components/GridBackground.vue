<template>
  <div class="absolute inset-0 z-[-1] overflow-hidden w-full h-full">
    <div class="flex w-full h-full">
      <div class="gradient-mask grid auto-rows-auto grid-cols-auto-fill justify-items-center w-full h-full opacity-[0.03]">
        <div
            v-for="index in 850"
            :key="index"
            class="w-12 h-12 border border-gray-500"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.gradient-mask {
  mask-image: conic-gradient(rgba(0, 0, 0, 1) 30%, transparent 60%);
}

.grid-cols-auto-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
}
</style>
