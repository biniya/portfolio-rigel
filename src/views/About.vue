<template>
  <div
      ref="aboutSection"
      id="about"
      class="w-full font-lexend flex flex-col lg:flex-row justify-evenly py-5 bg-gray-100"
  >
    <!-- Left Tabs Section -->
    <section class="w-full lg:w-5/12 flex flex-col space-y-10 px-4 lg:px-0">
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
              class="w-4/12 sm:w-3/12 pl-4 text-lg sm:text-2xl lg:text-3xl"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </section>

    <!-- Right Content Section -->
    <section class="w-full lg:w-4/12 text-base sm:text-lg flex items-center leading-loose opacity-70 mt-10 lg:mt-0 px-4 lg:px-0">
      <div class="bg-white rounded-xl text-center shadow-sm p-4">
        {{ tabs[activeTab].description }}
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define the tabs content
const tabs = ref([
  {
    title: "Ideate",
    description: "Identify, shape and validate your product idea.",
  },
  {
    title: "Design",
    description: "Craft beautiful digital experiences across platforms.",
  },
  {
    title: "Develop",
    description: "Bring products to life with world-class engineering.",
  },
  {
    title: "Maintain",
    description: "Safeguard your product's quality and reliability.",
  },
  {
    title: "Scale",
    description: "Gain flexibility to adjust and expand on the fly.",
  },
]);

const activeTab = ref(0);

// Set the active tab when clicked
const setActiveTab = (index) => {
  activeTab.value = index;
};
</script>

<style scoped>
/* Style for the tab transitions and interaction */
.tab-content {
  transition: opacity 0.3s ease-in-out;
}

.item-0, .item-1, .item-2, .item-3, .item-4 {
  transition: background-color 0.3s ease;
}

[v-cloak] {
  display: none;
}

@media (max-width: 640px) {
  /* Stack content vertically and adjust font sizes on mobile */
  section {
    width: 100%;
  }

  .text-2xl {
    font-size: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .text-3xl {
    font-size: 2rem;
  }

  .leading-relaxed {
    line-height: 1.75;
  }
}
</style>
