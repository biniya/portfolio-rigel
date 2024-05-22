<template>
  <div class="flex flex-col flex-wrap w-full space-y-3 py-2">
    <div class="font-lexend font-light text-sm text-gray-600">Working with</div>

    <div ref="companyList" class="flex flex-wrap company-list">
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
</template>
<script setup>
import CompanyItem from "../../components/CompanyItem.vue";
</script>
<style scoped></style>
