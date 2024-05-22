<script setup>
import {
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
  DrawerTrigger,
} from "vaul-vue";
import { ref } from "vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
const isDrawerOpen = ref(false);

function setDrawerOpen(val) {
  isDrawerOpen.value = val;
}
</script>

<template>
  <DrawerRoot
    :open="isDrawerOpen"
    should-scale-background
    @update:open="setDrawerOpen"
  >
    <DrawerTrigger>
      <div
        class="flex space-x-2 group w-fit py-2 hover:scale-105 cursor-pointer items-center"
      >
        <span
          class="font-medium text-md hover:underline hover:underline-offset-4"
          >View Project Details</span
        >
        <box-icon
          class="fill-black h-7 w-7"
          name="right-top-arrow-circle"
          type="solid"
        ></box-icon>
      </div>
    </DrawerTrigger>
    <DrawerPortal>
      <DrawerOverlay class="z-50 fixed bg-black/40 inset-0" />
      <DrawerContent
        class="bg-white flex flex-col space-y-12 rounded-t-xl !h-full max-h-[calc(100%-(env(safe-area-inset-top)+51px+1rem))] fixed bottom-0 left-0 right-0 z-[60] px-5"
      >
        <div
          class="mt-4 mx-auto w-14 h-1.5 flex-shrink-0 rounded-full bg-gray-300"
        />
        <div class="text-center font-semibold text-4xl pb-6">
          {{ project.name }}
        </div>
        <div class="w-full flex justify-evenly">
          <div
            :class="project.theme"
            class="w-5/12 flex h-[28rem] items-center p-5 rounded-2xl"
          >
            <img
              :src="project.image"
              alt="project-name"
              class="md:h-fit rounded-2xl object-contain h-[12rem] sm:h-[15rem] w-[40rem] z-10"
              loading="eager"
            />
          </div>
          <div class="w-5/12 flex flex-col space-y-5">
            <div
              v-for="(item, index) in project.description"
              :key="index"
              class="font-light"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>

<style scoped></style>
