<template>
  <div
      ref="aboutSection"
      id="about"
      class="max-h-fit w-full font-lexend flex justify-evenly py-5 bg-gray-100"
      @wheel="handleWheel"
  >
    <!-- Left Tabs Section -->
    <section class="w-5/12 flex flex-col space-y-10">
      <div class="text-3xl text-black font-light">
        Full digital product expertise <br />
        <span class="pr-4 font-semibold text-primary">under one roof</span>
      </div>

      <div class="flex flex-col space-y-5">
        <div
            v-for="(item, index) in tabs"
            :key="index"
            :class="`item-${index} ${
            index === activeTab
              ? 'bg-white'
              : 'hover:bg-gray-200 opacity-50'
          } flex items-center px-3 py-8 font-light space-x-5 cursor-pointer`"
            @click="setActiveTab(index)"
        >
          <div
              :class="index === activeTab ? 'pr-3 font-bold' : ''"
              class="w-1/12 text-end font-semibold leading-relaxed"
          >
            0{{ index + 1 }}
          </div>
          <div
              :class="index === activeTab ? 'pr-3 font-bold' : 'font-semibold'"
              class="w-3/12 pl-4 text-3xl"
          >
            {{ item.title }}
          </div>
          <div
              :class="index === activeTab ? 'inline-flex' : 'hidden'"
              class="w-8/12 opacity-80"
          >
            {{ item.description }}
          </div>
        </div>
      </div>
    </section>

    <!-- Right Content Section -->
    <section class="w-4/12 text-lg flex items-center leading-loose opacity-70">
      <div class="bg-white rounded-xl text-center shadow-sm p-3">
        Whether you want to consult an idea, add missing capabilities, quickly
        expand your team, or hand over a project - we've got you covered.
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Define the tabs content
const tabs = ref([
  {
    title: "Ideate",
    description: "Identify, shape and validate your product idea",
  },
  {
    title: "Design",
    description: "Craft beautiful digital experiences across platforms",
  },
  {
    title: "Develop",
    description: "Bring products to life with world-class engineering",
  },
  {
    title: "Maintain",
    description: "Safeguard your product's quality and reliability",
  },
  {
    title: "Scale",
    description: "Gain flexibility to adjust and expand on the fly",
  },
]);

const activeTab = ref(0);
const lastTabIndex = tabs.value.length - 1;
let isScrolling = false; // to prevent rapid scrolling
const aboutSection = ref(null);

// Set the active tab when clicked
const setActiveTab = (index) => {
  activeTab.value = index;
};

// Custom scrolling within the About section with delay
const handleWheel = (event) => {
  // If we are at the first tab and scrolling up, or at the last tab and scrolling down,
  // we need to stop preventing the default scroll and let the user scroll normally
  if (
      (activeTab.value === 0 && event.deltaY < 0) || // If first tab and scrolling up
      (activeTab.value === lastTabIndex && event.deltaY > 0) // If last tab and scrolling down
  ) {
    // Do not prevent default here, let normal scrolling occur
    return;
  }

  // Prevent normal scroll during tab navigation
  event.preventDefault();

  if (isScrolling) return; // Prevent scrolling if already in progress

  isScrolling = true; // Set scrolling lock

  // Handle scrolling down (next tab)
  if (event.deltaY > 0 && activeTab.value < lastTabIndex) {
    activeTab.value++;
  }
  // Handle scrolling up (previous tab)
  else if (event.deltaY < 0 && activeTab.value > 0) {
    activeTab.value--;
  }

  // Add a delay before allowing the next scroll event
  setTimeout(() => {
    isScrolling = false;
  }, 1000); // Adjust the delay as needed
};

// Detect if the About section is in view and center it
const scrollToCenter = () => {
  const aboutSectionElement = aboutSection.value;
  const rect = aboutSectionElement.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

  if (isVisible) {
    aboutSectionElement.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

// Add event listener to detect when the About section is in view
onMounted(() => {
  window.addEventListener("scroll", scrollToCenter);
});

// Clean up the event listener when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener("scroll", scrollToCenter);
  window.removeEventListener("wheel", handleWheel);
});
</script>

<style scoped>
.tab-content {
  transition: opacity 0.3s ease-in-out;
}

[v-cloak] {
  display: none;
}
</style>