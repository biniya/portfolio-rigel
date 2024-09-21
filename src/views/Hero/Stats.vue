<template>
  <!-- For medium screens and above -->
  <div
      v-if="!isMobile"
      class="w-full mt-10 lg:w-5/12 2xl:w-5/12 lg:-mt-20 flex flex-row flex-wrap h-auto lg:h-3/5 justify-evenly items-center stats gap-2"
  >
    <GradientBorder
        class="!w-32 md:!w-36 !h-28 md:!h-32 mr-8 md:mr-12"
        gradient-style="bg-gradient-to-bl from-sky-500 via-purple-500 to-indigo-700"
    >
      <template #default>
        <div class="font-bold text-4xl md:text-5xl shuffle" data-final="7+">0</div>
        <div class="text-sm">Experience</div>
      </template>
    </GradientBorder>

    <GradientBorder class="!w-32 md:!w-36 !h-28 md:!h-32">
      <template #default>
        <div class="font-bold text-4xl md:text-5xl shuffle" data-final="12+">0</div>
        <div class="text-sm">Developers</div>
      </template>
    </GradientBorder>

    <GradientBorder class="!w-32 md:!w-36 !h-28 md:!h-32 mr-8">
      <template #default>
        <div class="font-bold text-4xl md:text-5xl shuffle" data-final="5/5">0</div>
        <div class="text-sm">Review</div>
      </template>
    </GradientBorder>

    <GradientBorder class="!w-32 md:!w-36 !h-28 md:!h-32">
      <template #default>
        <div class="font-bold text-4xl md:text-5xl shuffle" data-final="20+">0</div>
        <div class="text-sm">Projects</div>
      </template>
    </GradientBorder>
  </div>

  <!-- For mobile screens -->
  <div v-if="isMobile" class="w-full flex flex-col justify-center items-center gap-6 mt-5">

   <div class="flex w-full gap-4">
     <!-- Experience Stat Card -->
     <div class="w-full max-w-sm p-4 rounded-lg bg-white relative overflow-hidden">
       <div class="absolute inset-0 bg-gradient-to-bl from-sky-500 via-purple-500 to-indigo-700 opacity-10 rounded-lg"></div>
       <div class="relative z-10 flex flex-col items-center">
         <div class="text-4xl font-bold text-gray-800 mb-1">{{ experience }} +</div>
         <div class="text-sm font-medium text-gray-600">Years of Experience</div>
       </div>
     </div>

     <!-- Developers Stat Card -->
     <div class="w-full max-w-sm p-4 rounded-lg bg-white relative overflow-hidden">
       <div class="absolute inset-0 bg-gradient-to-bl from-green-400 via-teal-500 to-blue-600 opacity-10 rounded-lg"></div>
       <div class="relative z-10 flex flex-col items-center">
         <div class="text-4xl font-bold text-gray-800 mb-1">{{ developers }} +</div>
         <div class="text-sm font-medium text-gray-600">Developers</div>
       </div>
     </div>
   </div>

    <div class="flex w-full gap-4">
      <!-- Review Stat Card -->
      <div class="w-full max-w-sm p-4 rounded-lg bg-white relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-bl from-yellow-400 via-orange-500 to-red-600 opacity-10 rounded-lg"></div>
        <div class="relative z-10 flex flex-col items-center">
          <div class="text-4xl font-bold text-gray-800 mb-1">{{ reviews }} +</div>
          <div class="text-sm font-medium text-gray-600">Customer Reviews</div>
        </div>
      </div>

      <!-- Projects Stat Card -->
      <div class="w-full max-w-sm p-4 rounded-lg bg-white relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-bl from-purple-400 via-pink-500 to-red-700 opacity-10 rounded-lg"></div>
        <div class="relative z-10 flex flex-col items-center">
          <div class="text-4xl font-bold text-gray-800 mb-1">{{ projects }} +</div>
          <div class="text-sm font-medium text-gray-600">Projects Completed</div>
        </div>
      </div>
    </div>

  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import GradientBorder from "../../components/GradientBorder.vue";

const isMobile = ref(window.innerWidth < 768);

// Detect window resize for responsiveness
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768;
});

// Stats for mobile
const experience = ref(0);
const developers = ref(0);
const reviews = ref(0);
const projects = ref(0);

// Mobile counting animation
const countUp = (finalValue, refStat, intervalTime = 50) => {
  let currentValue = 0;
  const increment = finalValue / (1000 / intervalTime); // Adjust speed
  const interval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= finalValue) {
      refStat.value = finalValue;
      clearInterval(interval);
    } else {
      refStat.value = Math.floor(currentValue);
    }
  }, intervalTime);
};

onMounted(() => {
  if (isMobile.value) {
    countUp(7, experience);
    countUp(12, developers);
    countUp(5, reviews);
    countUp(20, projects);
  }
});
</script>

<style scoped>
/* Optimize Mobile Experience */
div {
  transition: all 0.2s ease-in-out;
}

div:hover {
  transform: scale(1.02);
}
</style>
