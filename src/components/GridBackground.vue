<template>
  <div class="absolute top-0 -z-50 h-screen mx-auto w-full">
    <div class="flex w-full h-full">
      <div class="gradient-mask flex flex-wrap w-11/12 opacity-[0.03] border">
        <div
          v-for="index in 850"
          :key="index"
          class="aspect-square w-20 h-20 border border-black"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.gradient-mask {
  mask-image: conic-gradient(rgba(0, 0, 0, 1) 0%, transparent 95%);
}
</style>
