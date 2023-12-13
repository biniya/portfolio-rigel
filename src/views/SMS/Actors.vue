<template>
  <div
    class="h-fit flex font-basic flex-col items-center justify-center space-y-20 pt-10 pb-32"
  >
    <!--    <div class="w-7/12 h-0.5 bg-gradient-to-l from-zinc-700 to-stone-800"></div>-->
    <!--    Header-->
    <div
      class="font-bold py-10 text-transparent text-5xl bg-clip-text bg-black uppercase flex flex-col space-y-2 justify-center"
    >
      ለትምህርት ቤትዎ ሪግልን ሲጠቀሙ ሁሉም ያሸንፋል !!
    </div>

    <!--    List-->
    <div class="w-10/12 flex pb-7 space-x-10 min-h-full">
      <ActorCard
        v-for="(item, index) in actors"
        :key="index"
        :classStyle="item.classStyle"
        :dividerStyle="item.dividerStyle"
        :icon="item.icon"
        :inner-class-style="item.innerClassStyle"
        :title="item.title"
        :value="item.value"
      />
    </div>
  </div>
</template>

<script setup>
import {
  AcademicCapIcon,
  CalculatorIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/vue/24/solid";
import ActorCard from "../../components/ActorCard.vue";

const actors = [
  {
    title: "ለመምህራን",
    value:
      "Forge Stronger Bonds with Students and Parents. With RIGEL, you can easily communicate with students and parents, share resources, and track student progress.",
    icon: CalculatorIcon,
    classStyle:
      "bg-gradient-to-tr from-teal-400 via-sky-500 to-emerald-500 text-white",
    dividerStyle: "bg-gradient-to-r from-cyan-200 to-teal-200",
    innerClassStyle: "bg-gradient-to-br from-cyan-500 to-teal-500 text-white",
  },
  {
    title: "ለተማሪዎች",
    value:
      "RIGEL is a one-stop-shop for all your educational needs. With RIGEL, you can access your grades, assignments, and resources from anywhere, anytime.",
    icon: AcademicCapIcon,
    classStyle: "bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500",
    dividerStyle: "bg-gradient-to-r from-pink-200 to-amber-100",
    innerClassStyle: "bg-gradient-to-br from-orange-500 to-rose-500 text-white",
  },
  {
    title: "ለቤተሰቦች",
    value:
      "RIGEL is a one-stop-shop for all your educational needs. With RIGEL, you can access your child's grades, assignments, and resources from anywhere, anytime.",
    icon: UserGroupIcon,
    classStyle:
      "bg-gradient-to-tr from-blue-400 via-sky-500 to-indigo-500 text-white",
    dividerStyle: "bg-gradient-to-l from-indigo-100 to-sky-200",
    innerClassStyle: "bg-gradient-to-br from-sky-500 to-indigo-500",
  },
  {
    title: "ለርዕሰ መስተዳደር",
    value:
      "RIGEL is a one-stop-shop for all your educational needs. With RIGEL, you can access your child's grades, assignments, and resources from anywhere, anytime.",
    icon: UserIcon,
    classStyle:
      "bg-gradient-to-tr from-red-500 via-pink-500 to-rose-500 text-white",
    dividerStyle: "bg-gradient-to-r from-rose-200 to-red-200",
    innerClassStyle: "bg-gradient-to-br from-rose-500 to-pink-500",
  },
];
</script>
<style scoped></style>