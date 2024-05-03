<template>
  <section class="w-full flex justify-center font-lexend bg-gray-50">
    <div class="flex flex-col space-y-20 w-11/12 h-full py-10 font-inter">
      <div
        class="flex flex-col w-full min-h-full text-center pr-5 justify-evenly items-center text-4xl font-semibold space-y-2"
      >
        <div>Meet the minds behind the magic;</div>
        <div>Our exceptional team</div>
      </div>

      <div class="flex space-x-4 h-full w-full">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="p-3 w-[40rem] min-h-full font-lexend flex justify-between items-center bg-white shadow-sm rounded-xl"
        >
          <div
            class="w-4/12 flex flex-col items-center space-y-3 justify-evenly h-full"
          >
            <img
              :alt="member.name + 'photo'"
              :src="member.imageSrc"
              class="rounded-3xl object-cover lg:w-28 w-20 shadow-sm"
              role="img"
            />

            <h1 class="font-semibold text-xl text-center font-lexend">
              {{ member.name }}
            </h1>
          </div>
          <div class="w-7/12">
            <p class="text-black font-semibold text-center">
              {{ member.title }}
            </p>
            <p class="text-center h-32 text-gray-600 text-sm pt-3 font-normal">
              {{ member.roleDescription }}
            </p>
            <div
              class="flex w-full bg-gray-50 justify-evenly py-1 px-3 rounded-3xl items-end"
            >
              <a
                v-if="member.github"
                :href="member.github"
                class="h-full flex items-center"
                target="_blank"
              >
                <box-icon
                  class="fill-gray-500 hover:fill-gray-900"
                  name="github"
                  type="logo"
                ></box-icon>
              </a>

              <a
                v-if="member.linkedIn"
                :href="member.linkedIn"
                class="h-full flex items-center"
                target="_blank"
              >
                <box-icon
                  class="fill-gray-500 hover:fill-blue-500"
                  name="linkedin"
                  type="logo"
                ></box-icon>
              </a>

              <a
                v-if="member.upwork"
                :href="member.upwork"
                class="h-full flex items-center"
                target="_blank"
              >
                <box-icon
                  class="fill-gray-500 hover:fill-green-500"
                  name="upwork"
                  type="logo"
                ></box-icon>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex w-full justify-center">
        <span
          class="flex space-x-2 text-lg font-medium font-lexend group w-fit px-5 py-2 cursor-pointer text-white bg-brand-350 shadow-lg hover:scale-105 rounded-3xl items-center"
          >View Full Team</span
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import adil from "../assets/teams/adil.jpeg";
import biniyam from "../assets/teams/biniyamLemma.jpeg";
import addis from "../assets/teams/addis.jpeg";

onMounted(() => {
  // AOS.init({
  //   duration: 1200,
  // });
});

const teamMembers = [
  {
    imageSrc: adil,
    name: "Adil Abdu",
    title: "CTO | Technical Lead",
    roleDescription:
      "Our CTO is the lead author on an IEEE Access publication on unsupervised machine learning algorithms, involved in internationally nominated projects.",
    linkedIn: "http://www.linkedin.com/in/yosefseboka",
    github: "https://github.com/adilabdu",
    upwork: "https://www.upwork.com/freelancers/~012639c223643a15e8",
    location: "Ethiopia",
  },
  {
    imageSrc: addis,
    name: "Addismiraph Abebe ",
    title: "Sales and Marketing Director",
    roleDescription:
      "A sales and marketing expert with a proven track record of success in the tech industry. Addismiraph's strategic insights and leadership skills are invaluable to our team.",
    linkedIn: "https://www.linkedin.com/in/addismiraph/",
    location: "Ethiopia",
  },
  {
    imageSrc: biniyam,
    name: "Biniyam Lemma ",
    title: "Full Stack Developer | COO",
    roleDescription:
      "As a dynamic leader and skilled full-stack developer, Biniyam's strategic insights and technical expertise drive our company's success and growth.",
    linkedIn: "https://www.linkedin.com/in/biniyam-lemma-2a580615a/",
    github: "https://github.com/biniya",
    location: "Ethiopia",
  },
];
</script>
