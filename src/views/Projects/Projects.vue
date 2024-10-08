<template>
  <section
      id="#projects"
      class="w-full lg:w-9/12 mx-auto flex flex-col space-y-5 lg:space-y-10 lg:py-8 py-5 items-center min-h-screen"
  >
    <div class="font-bold text-3xl lg:text-5xl text-center lg:pt-10 pb-5">Recent Works</div>

    <Project
        v-for="(item, index) in projects"
        :key="index"
        :direction="index % 2 === 0 ? 'right' : 'reverse'"
        :project="item"
    />

    <div class="flex w-11/12 lg:w-full font-lexend items-center justify-between py-1 md:py-10">
      <span class="font-semibold text-lg lg:text-5xl">And that is not all..</span>
      <span
          class="flex lg:text-lg text-sm space-x-2 group w-fit px-5 py-2 cursor-pointer text-white bg-brand-350 shadow-lg hover:scale-105 rounded-3xl items-center"
          @click="$router.push({ name: 'Projects' })"
      >View All Works</span
        >
    </div>
  </section>
</template>

<style scoped></style>

<script setup>
import Project from "./ProjectCard.vue";
import rigelSMS from "../../assets/projects/rigel2.png";
import betPlus from "../../assets/projects/bet+.png";
import gebeta from "../../assets/projects/gebeta1.png";
import elsaro from "../../assets/projects/elsaro.png";
import bingo from "../../assets/projects/bingo.png";
import raka from "../../assets/projects/raka.png";

const projects = [
  {
    id: 1,
    name: "Raka Cars",
    theme: "bg-[#0D9488]",
    category: "Web app",
    description: [
      "Raka Cars is an online marketplace for buying and selling vehicles. Users can easily list their cars for sale or browse a wide range of listings to find their next vehicle. With a user-friendly interface, " +
      "Raka Cars simplifies the car trading process for both sellers and buyers."
    ],
    link: "https://rakacars.com/",
    image: raka,
    demoLink: "https://rakacars.com/",
  },
  {
    id: 2,
    name: "Elsaro - Diagnosis Center",
    theme: "bg-[#42568c]",
    category: "Web app",
    description: [
      "A cutting-edge diagnostics center equipped with the latest medical technologies, offering a wide range of diagnostic and health services tailored to meet the needs of patients. " +
      "Patients can seamlessly book appointments on the app provided, receive real-time access to their diagnostic reports, and consult with our team of specialized doctors through secure video consultations. "
    ],
    link: "https://elsaro.net",
    image: elsaro,
    demoLink: "https://elsaro.net",
  },
  {
    id: 3,
    name: "Kiwi Bingo",
    theme: "bg-[#1d9f32]",
    category: "Web app",
    description: [
      "Kiwi Bingo is a modern online bingo platform offering a seamless experience for players to deposit, play, and withdraw winnings securely. " +
      "Featuring a variety of bingo games, and a user-friendly interface, it provides an engaging and interactive environment for both casual and competitive players. " +
      "With secure payments and fast withdrawals, Kiwi Bingo brings excitement and rewards to the online bingo community."
    ],
    link: "https://kiwibingo.com",
    image: bingo,
    demoLink: null,
  },
];
</script>
