<template>
  <div class="flex flex-col flex-wrap w-full lg:space-y-3 lg:py-2">
    <div class="font-lexend font-light text-xs lg:text-sm text-gray-600">Working with</div>

    <!-- Wrapping the company list in a container -->
    <div class="company-list-wrapper">
      <div ref="companyList" class="company-list animate-scroll">
        <company-item company="" label="Ankeboot Books"></company-item>
        <company-item company="bo" label="ELSARO"></company-item>
        <company-item company="bo" label="BB Trading"></company-item>
        <company-item company="bo" label="Abadir SuperMarkets"></company-item>
        <company-item company="bo" label="Maraki Fitness"></company-item>
        <company-item company="bo" label="AIA"></company-item>
        <company-item company="bo" label="Bios College"></company-item>
        <company-item company="bo" label="And more"></company-item>
      </div>
    </div>
  </div>
</template>

<script setup>
import CompanyItem from "../../components/CompanyItem.vue";
</script>

<style scoped>
/* Wrapper to prevent overflow */
.company-list-wrapper {
  overflow: hidden;
  width: 100%;
}

.company-list {
  display: flex;
  gap: 2rem;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Adding smooth scrolling animation */
.animate-scroll {
  animation: scroll 15s linear infinite;
}

/* Making the scrolling faster on smaller screens */
@media (max-width: 768px) {
  .animate-scroll {
    animation: scroll 10s linear infinite;
  }
}
</style>
