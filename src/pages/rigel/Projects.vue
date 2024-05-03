<template>
  <div
    class="w-10/12 mx-auto h-full min-h-screen pt-24 font-lexend flex flex-col items-center space-y-5"
  >
    <div class="font-semibold w-full text-6xl py-5">Projects & ShowCases</div>
    <div class="flex h-full w-full justify-between items-center flex-wrap">
      <Project
        v-for="(item, index) in projects"
        :key="index"
        :project="item"
        :show-image="false"
        class="!w-[48%] !h-[30rem] !bg-gray-100 !text-start rounded-xl shadow-sm"
      >
        <template v-if="item.id === 2" #additional-project-description>
          <div
            class="py-8 font-lexend border-y w-full border-black flex justify-between"
          >
            <div class="w-5/12 flex space-x-2 items-end">
              <span class="text-5xl font-bold"> 100k+ </span>

              <span class="text-lg"> Installs </span>
            </div>

            <div class="w-5/12">
              <div class="flex space-x-2 items-end">
                <span class="text-5xl font-bold">
                  4.7<box-icon
                    class="fill-yellow-400"
                    name="star"
                    type="solid"
                  />
                </span>

                <span class="text-lg"> Rating </span>
              </div>
            </div>
          </div>
        </template>
      </Project>
    </div>
  </div>
</template>

<script setup>
import Project from "../../views/Projects/ProjectCard.vue";
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
];
</script>

<style scoped></style>
