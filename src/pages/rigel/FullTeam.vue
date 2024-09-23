<template>
  <section class="w-full flex justify-center font-lexend pt-20 md:pt-28 md:pb-0">
    <div class="flex flex-col space-y-5 lg:space-y-5 w-11/12 h-full font-inter">
      <div
          class="flex w-full min-h-full text-center justify-evenly items-center text-lg lg:text-4xl font-semibold"
      >
        Meet the Full Team
      </div>

      <div class="flex lg:flex-row lg:flex-wrap flex-col gap-2 justify-center">
        <div
            v-for="(member, index) in fullTeamMembers"
            :key="index"
            class="p-3 my-2 w-full md:w-[35rem] flex flex-col md:flex-row items-center bg-white shadow-md rounded-xl"
        >
          <div
              class="w-full md:w-4/12 flex flex-col items-center space-y-3 justify-evenly"
          >
            <img
                :alt="member.name + ' photo'"
                :src="member.imageSrc"
                class="rounded-3xl object-cover lg:w-28 w-20 shadow-sm"
                role="img"
            />
            <h1 class="font-semibold text-lg lg:text-xl text-center">
              {{ member.name }}
            </h1>
          </div>

          <div class="w-full md:w-7/12 mt-4 md:mt-0 md:ml-5">
            <p class="text-black font-semibold text-center md:text-left">
              {{ member.title }}
            </p>
            <p class="text-center md:text-left h-32 text-gray-600 text-sm pt-3 font-normal">
              {{ member.roleDescription }}
            </p>
            <div
                class="flex w-full justify-center md:justify-start bg-gray-50 py-1 px-3 rounded-3xl items-end space-x-3"
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
        <router-link
            to="/"
            class="flex space-x-2 text-sm lg:text-lg font-medium group w-fit px-5 py-2 cursor-pointer text-white bg-brand-350 shadow-lg hover:scale-105 rounded-3xl items-center"
        >
          Back to Home
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import adil from "../../assets/teams/adil.jpeg";
import biniyam from "../../assets/teams/biniyamLemma.jpg";
import addis from "../../assets/teams/addis.jpeg";
import beka from "../../assets/teams/bekaHaile.jpeg";
import bereket from "../../assets/teams/bereketGobeze.jpeg";
import eyouel from "../../assets/teams/eyouelKenfu.jpeg";
import firaol from "../../assets/teams/firaolDida.jpeg";
import haben from "../../assets/teams/habenAmare.jpeg";
import kalid from "../../assets/teams/kalidAbdu.jpeg";
import yosef from "../../assets/teams/yosefSeboka.jpeg";

const fullTeamMembers = [
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
    name: "Biniyam Lemma",
    title: "Full Stack Developer | COO",
    roleDescription:
        "As a dynamic leader and skilled full-stack developer, Biniyam's strategic insights and technical expertise drive our company's success and growth.",
    linkedIn: "https://www.linkedin.com/in/biniyam-lemma-2a580615a/",
    github: "https://github.com/biniya",
    upwork: "https://www.upwork.com/freelancers/~019d74242b5d7ffda9",
    location: "Ethiopia",
  },
  {
    imageSrc: kalid,
    name: "Kalid Abdu",
    title: "CEO | Full Stack Developer | Team Leader",
    roleDescription: "A full stack developer and team leader with great management skills and amazing technical talent, leading as the CEO.",
    linkedIn: "https://www.linkedin.com/in/kalid-abdu-871a0422a/",
    github: "https://github.com/kalid10/",
    upwork: "https://www.upwork.com/freelancers/~01941e5442f9956d70?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2F",
    location: "Ethiopia",
  },
  {
    imageSrc: bereket,
    name: "Bereket Gobeze",
    title: "Full Stack Developer | Consultant",
    roleDescription: "An intelligent full stack developer and consultant, known for his big talent and problem-solving skills.",
    linkedIn: "https://www.linkedin.com/in/bereket-gobeze/",
    github: "https://github.com/bereketnyb",
    upwork: "https://www.upwork.com/freelancers/~014a86bfed9c9882bf?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~014a86bfed9c9882bf%2Fprofile",
    location: "Ethiopia",
  },
  {
    imageSrc: eyouel,
    name: "Eyouel Kenfu",
    title: "Full Stack Developer",
    roleDescription: "A focused full stack developer with excellent coding experience and passion for learning new technologies.",
    github: "https://github.com/eyouelaya",
    location: "USA",
  },
  {
    imageSrc: beka,
    name: "Beka Haile",
    title: "Full Stack Developer",
    roleDescription: "Full stack developer with great experience in team leadership and management.",
    linkedIn: "https://ae.linkedin.com/in/beka-haile-589793195",
    location: "UAE",
  },
  {
    imageSrc: firaol,
    name: "Firaol Dida",
    title: "Full Stack Developer",
    roleDescription: "A full stack developer who is deeply focused on delivering high-quality solutions in tech.",
    github: "https://github.com/FiraolDida",
    upwork: "https://www.upwork.com/freelancers/~01ccb2d02064d3492d",
    location: "USA",
  },
  {
    imageSrc: haben,
    name: "Haben Amare",
    title: "Full Stack Developer | System Administrator",
    roleDescription: "An amazing talent with vast coding experience, and also manages administrative systems.",
    linkedIn: "https://et.linkedin.com/in/haben",
    github: "https://github.com/habenamare",
    location: "Portugal",
  },
  {
    imageSrc: yosef,
    name: "Yosef Seboka",
    title: "Frontend Developer | Data Analyst",
    roleDescription: "Frontend developer with a strong skill set in data analysis and an eye for building user-friendly applications.",
    linkedIn: "https://et.linkedin.com/in/yosefseboka",
    github: "https://github.com/yosef-seboka",
    location: "Ethiopia",
  },
];
</script>

<style scoped>
/* Flexbox responsive design */
@media (max-width: 768px) {
  .space-x-4 {
    flex-wrap: wrap;
  }

  img {
    width: 100px;
    height: 100px;
  }

  .space-y-20 {
    gap: 20px;
  }
}
</style>
