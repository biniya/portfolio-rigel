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
        <span class="font-medium text-md hover:underline hover:underline-offset-4">
          View Project Details
        </span>
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
          class="bg-white flex flex-col space-y-5 md:space-y-12 rounded-t-xl !h-full max-h-[calc(100%-(env(safe-area-inset-top)+51px+1rem))] fixed bottom-0 left-0 right-0 z-[60] px-5"
      >
        <div class="mt-4 mx-auto w-14 h-1.5 flex-shrink-0 rounded-full bg-gray-300" />

        <!-- Project title -->
        <div class="text-center font-semibold text-2xl md:text-4xl md:pb-6">
          {{ project.name }}
        </div>

        <!-- Scrollable content area -->
        <div class="flex-grow overflow-y-auto">
          <div class="w-full flex md:flex-row flex-col md:justify-evenly space-y-5 md:space-y-0">
            <!-- Image Section -->
            <div
                :class="project.theme"
                class="md:w-5/12 w-full flex h-[16rem] md:h-[28rem] items-center p-5 rounded-2xl"
            >
              <img
                  :src="project.image"
                  alt="project-name"
                  class="md:h-fit rounded-2xl object-contain h-[12rem] sm:h-[15rem] w-[40rem] z-10"
                  loading="eager"
              />
            </div>

            <!-- Description Section (scrollable content) -->
            <div class="w-full md:w-5/12 flex flex-col space-y-5 overflow-y-auto max-h-[30vh] md:max-h-[45vh]">
              <div
                  v-for="(item, index) in project.description"
                  :key="index"
                  class="font-light"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
  DrawerTrigger,
} from "vaul-vue";

const isDrawerOpen = ref(false);

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

function setDrawerOpen(val) {
  isDrawerOpen.value = val;
}
</script>

<style scoped></style>
