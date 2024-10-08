<template>
  <div
      ref="aboutSection"
      id="about"
      class="w-full font-lexend flex flex-col lg:flex-row justify-evenly py-5 bg-gray-100 relative"
  >
    <!-- Left Tabs Section for Desktop -->
    <section
        class="w-full lg:w-5/12 hidden lg:flex flex-col space-y-10 px-4 lg:px-0"
    >
      <div class="text-2xl sm:text-3xl lg:text-3xl text-black font-light">
        Full digital product expertise <br />
        <span class="pr-4 font-semibold text-primary">under one roof</span>
      </div>

      <div class="flex flex-col space-y-5">
        <div
            v-for="(item, index) in tabs"
            :key="index"
            :class="`item-${index} ${
            index === activeTab ? 'bg-white' : 'hover:bg-gray-200 opacity-50'
          } flex items-center px-3 py-5 sm:py-8 font-light space-x-3 sm:space-x-5 cursor-pointer`"
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
              class="w-4/12 sm:w-3/12 pl-4 text-lg sm:text-2xl lg:text-3xl flex items-center"
          >
            <img v-if="item.icon" :src="item.icon" alt="Icon" class="w-6 h-6 mr-2" />
            {{ item.title }}
          </div>
        </div>
      </div>
    </section>

    <!-- Right Content Section for Desktop with large centered SVG -->
    <section
        class="hidden lg:flex w-full lg:w-4/12 text-base sm:text-lg flex-col items-center justify-center leading-loose opacity-70 mt-10 lg:mt-0 px-4 lg:px-0"
    >
      <!-- Make the SVG large and centered -->
      <img
          v-if="tabs[activeTab].icon"
          :src="tabs[activeTab].icon"
          alt="Icon"
          class="w-full h-96 mx-auto mb-3"
      />
      <div class="bg-white rounded-xl text-center shadow-sm p-4">
        {{ tabs[activeTab].description }}
      </div>
    </section>

    <!-- Mobile Content Section with vertical buttons and single content -->
    <div
        v-if="!isDesktop"
        class="w-full text-base sm:text-lg flex flex-col items-center justify-center leading-loose opacity-70 lg:mt-0 px-4 lg:px-0 relative"
    >
      <div class="text-2xl text-black font-light mb-10">
        Full digital product expertise <br />
        <span class="pr-4 font-semibold text-primary">under one roof</span>
      </div>

      <!-- Vertical buttons only within the About section -->
      <div class="absolute right-0 top-10 flex flex-col space-y-4 z-50">
        <button
            v-for="(item, index) in tabs"
            :key="index"
            @click="setActiveTab(index)"
            class="items-center rounded-lg p-2 shadow-lg border-2 border-black mr-1"
            :class="{
            'bg-primary text-white': index === activeTab, // Active tab style
            'bg-gray-100 text-black': index !== activeTab, // Inactive tab style
          }"
            style="width: 40px; height: 40px;"
        >
          <img v-if="item.icon" :src="item.icon" alt="Icon" class="w-5 h-5" />
        </button>
      </div>

      <!-- Mobile Content: Show only one tab content -->
      <img
          v-if="tabs[activeTab].icon"
          :src="tabs[activeTab].icon"
          alt="Icon"
          class="w-full h-64 mx-auto mb-3"
      />
      <div class="bg-white rounded-xl text-center shadow-sm p-4">
        {{ tabs[activeTab].description }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Import SVGs from assets
import designIcon from "../assets/about/design.svg";
import developIcon from "../assets/about/develop.svg";
import ideateIcon from "../assets/about/idea.svg";
import maintainIcon from "../assets/about/mantain.svg";
import scaleIcon from "../assets/about/stepping_up.svg";

// Define the tabs content with local SVG icons
const tabs = ref([
  {
    title: "Ideate",
    description: "Identify, shape and validate your product idea.",
    icon: ideateIcon,
  },
  {
    title: "Design",
    description: "Craft beautiful digital experiences across platforms.",
    icon: designIcon,
  },
  {
    title: "Develop",
    description: "Bring products to life with world-class engineering.",
    icon: developIcon,
  },
  {
    title: "Maintain",
    description: "Safeguard your product's quality and reliability.",
    icon: maintainIcon,
  },
  {
    title: "Scale",
    description: "Gain flexibility to adjust and expand on the fly.",
    icon: scaleIcon,
  },
]);

const activeTab = ref(0);
const isDesktop = ref(window.innerWidth >= 1024);

// Set the active tab when clicked
const setActiveTab = (index) => {
  activeTab.value = index;
};

// Update the `isDesktop` flag on window resize
onMounted(() => {
  window.addEventListener("resize", () => {
    isDesktop.value = window.innerWidth >= 1024;
  });
});
</script>

<style scoped>
.tab-content {
  transition: opacity 0.3s ease-in-out;
}

.item-0,
.item-1,
.item-2,
.item-3,
.item-4 {
  transition: background-color 0.3s ease;
}

[v-cloak] {
  display: none;
}

@media (max-width: 640px) {
  section {
    width: 100%;
  }

  .text-2xl {
    font-size: 1.5rem;
  }

  .leading-relaxed {
    line-height: 1.75;
  }

  /* Adjust mobile layout */
  .mobile-button svg {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
