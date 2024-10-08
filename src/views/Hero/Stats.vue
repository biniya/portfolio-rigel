<template>
  <!-- For screens larger than 1409px x 922px -->
  <div
      v-if="showLargeScreen"
      class="w-full lg:w-5/12 2xl:w-5/12 flex flex-wrap justify-evenly items-center stats gap-6 py-10 lg:-mt-24"
  >
    <GradientBorder
        class="w-32 h-28 md:w-36 md:h-32 flex flex-col justify-center items-center"
        gradient-style="bg-gradient-to-bl from-sky-500 via-purple-500 to-indigo-700"
    >
      <template #default>
        <div class="font-bold text-4xl md:text-5xl shuffle">{{ desktopExperience }}+</div>
        <div class="text-sm">Experience</div>
      </template>
    </GradientBorder>

    <GradientBorder
        class="w-32 h-28 md:w-36 md:h-32 flex flex-col justify-center items-center"
        gradient-style="bg-gradient-to-bl from-sky-500 via-purple-500 to-indigo-700"
    >
      <template #default>
        <div class="font-bold text-4xl md:text-5xl shuffle">{{ desktopDevelopers }}+</div>
        <div class="text-sm">Developers</div>
      </template>
    </GradientBorder>

    <GradientBorder
        class="w-32 h-28 md:w-36 md:h-32 flex flex-col justify-center items-center"
        gradient-style="bg-gradient-to-bl from-sky-500 via-purple-500 to-indigo-700"
    >
      <template #default>
        <div class="font-bold text-4xl md:text-5xl shuffle">{{ desktopReviews }}
          <box-icon class="fill-yellow-400" name="star" type="solid" /></div>
        <div class="text-sm">Review</div>
      </template>
    </GradientBorder>

    <GradientBorder
        class="w-32 h-28 md:w-36 md:h-32 flex flex-col justify-center items-center"
        gradient-style="bg-gradient-to-bl from-sky-500 via-purple-500 to-indigo-700"
    >
      <template #default>
        <div class="font-bold text-4xl md:text-5xl shuffle">{{ desktopProjects }}+</div>
        <div class="text-sm">Projects</div>
      </template>
    </GradientBorder>
  </div>

  <!-- For screens smaller than 768px (mobile) -->
  <!--  <div v-if="isMobile" class="w-full flex flex-col justify-center items-center gap-6 mt-5">-->
<!--    <div class="flex w-full gap-4" data-aos="fade-up" data-aos-duration="1000">-->
<!--      &lt;!&ndash; Experience Stat Card &ndash;&gt;-->
<!--      <div class="w-full max-w-sm p-4 rounded-lg bg-white relative overflow-hidden">-->
<!--        <div class="absolute inset-0 bg-gradient-to-bl from-sky-500 via-purple-500 to-indigo-700 opacity-10 rounded-lg"></div>-->
<!--        <div class="relative z-10 flex flex-col items-center">-->
<!--          <div class="text-4xl font-bold text-gray-800 mb-1">{{ experience }}+</div>-->
<!--          <div class="text-sm font-medium text-gray-600">Experience</div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; Developers Stat Card &ndash;&gt;-->
<!--      <div class="w-full max-w-sm p-4 rounded-lg bg-white relative overflow-hidden">-->
<!--        <div class="absolute inset-0 bg-gradient-to-bl from-green-400 via-teal-500 to-blue-600 opacity-10 rounded-lg"></div>-->
<!--        <div class="relative z-10 flex flex-col items-center">-->
<!--          <div class="text-4xl font-bold text-gray-800 mb-1">{{ developers }}+</div>-->
<!--          <div class="text-sm font-medium text-gray-600">Developers</div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="flex w-full gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">-->
<!--      &lt;!&ndash; Review Stat Card &ndash;&gt;-->
<!--      <div class="w-full max-w-sm p-4 rounded-lg bg-white relative overflow-hidden">-->
<!--        <div class="absolute inset-0 bg-gradient-to-bl from-yellow-400 via-orange-500 to-red-600 opacity-10 rounded-lg"></div>-->
<!--        <div class="relative z-10 flex flex-col items-center">-->
<!--          <div class="text-4xl font-bold text-gray-800 mb-1">{{ reviews }}-->
<!--            <box-icon class="fill-yellow-400" name="star" type="solid" />-->
<!--          </div>-->
<!--          <div class="text-sm font-medium text-gray-600">Reviews</div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; Projects Stat Card &ndash;&gt;-->
<!--      <div class="w-full max-w-sm p-4 rounded-lg bg-white relative overflow-hidden">-->
<!--        <div class="absolute inset-0 bg-gradient-to-bl from-purple-400 via-pink-500 to-red-700 opacity-10 rounded-lg"></div>-->
<!--        <div class="relative z-10 flex flex-col items-center">-->
<!--          <div class="text-4xl font-bold text-gray-800 mb-1">{{ projects }}+</div>-->
<!--          <div class="text-sm font-medium text-gray-600">Projects</div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import GradientBorder from "../../components/GradientBorder.vue";

// Reactive reference to track screen size state
const showLargeScreen = ref(false);
const isMobile = ref(false);

// Function to check screen dimensions
const handleResize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width > 1409) {
    showLargeScreen.value = true;
    isMobile.value = false;
  } else if (width < 768) {
    showLargeScreen.value = false;
    isMobile.value = true;
  } else {
    showLargeScreen.value = false;
    isMobile.value = false;
  }
};

// Add event listener when the component mounts
onMounted(() => {
  handleResize(); // Ensure it's checked on the first load
  window.addEventListener('resize', handleResize); // Monitor resizing
});

// Clean up event listener when the component unmounts
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

// Stats for desktop
const desktopExperience = ref(0);
const desktopDevelopers = ref(0);
const desktopReviews = ref(0);
const desktopProjects = ref(0);

// Stats for mobile
const experience = ref(0);
const developers = ref(0);
const reviews = ref(0);
const projects = ref(0);

// Function to increment numbers with animation (used for both desktop and mobile layouts)
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
  // Initialize desktop stats counting
  if (showLargeScreen.value) {
    countUp(7, desktopExperience);
    countUp(12, desktopDevelopers);
    countUp(5, desktopReviews);
    countUp(20, desktopProjects);
  }

  // Initialize mobile stats counting
  if (isMobile.value) {
    countUp(7, experience);
    countUp(12, developers);
    countUp(5, reviews);
    countUp(20, projects);
  }
});
</script>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6rem;
}

div {
  transition: all 0.2s ease-in-out;
}

div:hover {
  transform: scale(1.02);
}
</style>
