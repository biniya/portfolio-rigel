<template>
  <section
    class="w-full h-[32rem] my-4 py-10 font-lexend bg-white flex justify-center"
  >
    <div
      :class="direction === 'reverse' ? 'flex-row-reverse' : ''"
      class="w-11/12 min-h-full h-full flex justify-between"
    >
      <div
        v-if="showImage"
        :class="project.theme"
        class="w-5/12 flex h-[28rem] items-center p-5 rounded-2xl"
      >
        <img
          :src="project.image"
          alt="project-name"
          class="md:h-fit rounded-2xl object-contain h-[12rem] sm:h-[15rem] w-[40rem] z-10 animate-bounce animate-once"
          loading="eager"
        />
      </div>

      <div
        :class="showImage ? 'w-6/12' : 'w-11/12'"
        class="flex justify-center flex-col space-y-8"
      >
        <div class="font-semibold w-11/12 text-4xl">
          {{ project.name }}
        </div>

        <div
          v-for="(item, index) in project.description"
          :key="index"
          class="font-light"
        >
          {{ item }}
        </div>

        <slot name="additional-project-description" />

        <div class="flex space-x-6 w-full">
          <div
            class="flex space-x-2 group w-fit py-2 hover:scale-105 cursor-pointer items-center"
          >
            <span class="font-medium text-md">View Project Details</span>
            <box-icon
              class="fill-black h-7 w-7"
              name="right-top-arrow-circle"
              type="solid"
            ></box-icon>
          </div>

          <a
            :class="[
              { 'opacity-60 cursor-not-allowed': project.demoLink === null },
              project.theme,
            ]"
            :href="project?.demoLink"
            class="flex space-x-2 group w-fit px-5 py-2 cursor-pointer hover:shadow-sm rounded-3xl items-center"
            target="_blank"
          >
            <span
              :class="'text:' + project.theme"
              class="font-medium text-md text-black"
              >{{ project.demoLink ? "View Demo" : "Demo Unavailable" }}</span
            >
            <box-icon
              :class="project.demoLink !== null ? 'group-hover:fill-white' : ''"
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

/* Customize scrollbar styles */
::-webkit-scrollbar {
  width: 1px;
  height: 3px;
  background: white;
}
</style>
