<template>
  <section
      class="w-full lg:w-9/12 mx-auto flex flex-col space-y-5 lg:space-y-10 lg:py-8 py-5 items-center min-h-screen"
  >
    <div class="font-bold text-3xl lg:text-5xl text-center lg:pt-10 pb-5">Recent Works</div>

    <Project
        v-for="(item, index) in projects"
        :key="index"
        :direction="index % 2 === 0 ? 'right' : 'reverse'"
        :project="item"
    >
      <template v-if="item.id === 2" #additional-project-description>
        <div
            class="py-8 font-lexend border-y w-full border-black flex justify-between"
        >
          <div class="w-6/12 flex space-x-2 items-end">
            <span class="text-4xl lg:text-5xl font-bold"> 100k+ </span>
            <span class="text-lg"> Installs </span>
          </div>

          <div class="w-6/12">
            <div class="flex space-x-2 items-end">
              <span class="text-4xl lg:text-5xl font-bold">
                4.7<box-icon class="fill-yellow-400" name="star" type="solid" />
              </span>
              <span class="text-lg"> Rating </span>
            </div>
          </div>
        </div>
      </template>
    </Project>

    <div class="flex w-11/12 lg:w-full font-lexend items-center justify-between py-10">
      <span class="font-semibold text-lg lg:text-5xl">And that is not all..</span>
      <span
          class="flex lg:text-lg text-sm space-x-2 group w-fit px-5 py-2 cursor-pointer text-white bg-brand-350 shadow-lg hover:scale-105 rounded-3xl items-center"
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

const projects = [
  {
    id: 1,
    name: "Rigel - School Management Software",
    theme: "bg-[#3B3486]",
    category: "Web and Mobile app",
    description: [
      "A groundbreaking platform seamlessly integrating AI into classrooms. Experience personalized teaching support and tailored assessments through our AI-Integrated Lesson Plans and Question Generator.",
      "Gain real-time insights into student performance with Live Grade Reports and Rankings, while promoting accountability and a holistic view of behavior through Real-Time Absentee Recording and Inclusive Conduct Assessment.",
    ],
    link: "/SMS",
    image: rigelSMS,
    demoLink: null,
  },
  {
    id: 2,
    name: "Gebeta App",
    theme: "bg-rose-500",
    category: "Mobile app",
    description: [
      "This app uses Accessibility services to provide users with a convenient and easy-to-use way to manage their telecoms services. The app allows users to recharge their balance, send call me backs, transfer credit, buy and send Ethio Gebeta packages, view their remaining balance and package amount, and track their expenses.",
    ],
    image: gebeta,
    demoLink: "https://gebeta.apk.gold/",
  },
  {
    id: 3,
    name: "Bet+ - Sports Betting Software",
    theme: "bg-[#0C356A] ",
    category: "Web app",
    description: [
      "The ultimate sports betting platform that revolutionizes the way you connect with your favorite sports games and place your bets, all through a seamless web app experience. Designed to cater to sports enthusiasts and avid bettors, Offers a comprehensive suite of features that enhance the sports betting journey.",
    ],
    image: betPlus,
    demoLink: null,
  },
];
</script>
