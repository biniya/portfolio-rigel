<template>
  <section
      class="w-full h-auto lg:h-[32rem] my-4 py-5 lg:py-10 font-lexend bg-white flex justify-center"
  >
    <div
        :class="direction === 'reverse' ? 'flex-col lg:flex-row-reverse lg:space-y-0 space-y-20 pt-20 lg:pt-0 pb-10 lg:pb-0 ' : 'flex-col lg:flex-row lg:space-y-0 space-y-20'"
        class="w-full lg:w-11/12 min-h-full h-full flex justify-between lg:border-none border-b"
    >
      <div
          v-if="showImage"
          :class="project.theme"
          class="w-full lg:w-5/12 flex h-[12rem] sm:h-[18rem] lg:h-[28rem] items-center p-5 rounded-2xl"
      >
        <img
            :src="project.image"
            alt="project-name"
            class="h-full object-contain rounded-2xl"
            loading="eager"
        />
      </div>

      <div
          :class="showImage ? 'w-full lg:w-6/12' : 'w-full lg:w-11/12'"
          class="flex justify-center flex-col space-y-4 lg:space-y-8 px-5"
      >
        <div class="font-semibold w-full lg:w-11/12 text-2xl lg:text-4xl">
          {{ project.name }}
        </div>

        <div
            v-for="(item, index) in project.description"
            :key="index"
            class="font-light text-sm lg:text-base"
        >
          {{ item }}
        </div>

        <slot name="additional-project-description" />

        <div class="flex space-x-6 items-center w-full">
          <div
              class="flex space-x-2 group w-fit py-2 hover:scale-105 cursor-pointer items-center"
          >
            <ProjectDetailsDrawer :project="project" />
          </div>

          <a
              :class="[project.theme, project.demoLink ? 'hover:scale-105' : 'opacity-60 cursor-not-allowed']"
              :href="project.demoLink"
              class="flex space-x-2 group w-fit h-fit py-2.5 px-5 hover:shadow-sm rounded-3xl items-center"
              target="_blank"
          >
            <span
                class="font-medium text-md text-black"
            >{{ project.demoLink ? 'View Demo' : 'Demo Unavailable' }}</span>
            <box-icon
                class="fill-black h-7 w-7"
                name="globe"
                type="solid"
            ></box-icon>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectDetailsDrawer from "./ProjectDetailsDrawer.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
  direction: {
    type: String,
    default: "right",
  },
  showImage: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
/* Add responsive adjustments */
@media (max-width: 640px) {
  section {
    flex-direction: column;
  }

  img {
    height: auto;
    width: 100%;
  }
}

/* Bounce animation */
@keyframes bounce-once {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-once {
  animation: bounce-once 1s;
  animation-iteration-count: 1;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}
</style>
