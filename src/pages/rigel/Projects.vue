<template>
  <div
      class="w-11/12 md:w-10/12 mx-auto h-full min-h-screen pt-14 md:pt-24 font-lexend flex flex-col items-center space-y-5"
  >
    <div class="font-semibold w-full text-2xl md:text-6xl py-5">Projects & ShowCases</div>
    <div class="flex h-full w-full justify-between md:items-center flex-col md:flex-row md:flex-wrap">
      <Project
          v-for="(item, index) in projects"
          :key="index"
          :project="item"
          :show-image="false"
          class="md:!w-[48%] md:!h-[30rem] w-full !bg-gray-100 !text-start rounded-xl shadow-sm"
      >
        <!-- Gebeta specific project description -->
        <template v-if="item.id === 2" #additional-project-description>
          <div class="py-8 font-lexend border-y w-full border-black flex justify-between">
            <div class="w-5/12 flex md:flex-row flex-col space-x-2 items-end">
              <span class="text-5xl font-bold">100k+</span>
              <span class="text-lg">Installs</span>
            </div>
            <div class="w-5/12">
              <div class="flex md:flex-row flex-col md:space-x-2 items-end">
                <span class="text-5xl font-bold">
                  4.7<box-icon class="fill-yellow-400" name="star" type="solid" />
                </span>
                <span class="text-lg">Rating</span>
              </div>
            </div>
          </div>
        </template>

        <!-- Elsaro Patients App specific description -->
        <template v-if="item.id === 7" #additional-project-description>
          <div class="py-8 font-lexend border-y w-full border-black flex justify-between">
            <div class="w-5/12 flex md:flex-row flex-col space-x-2 items-end">
              <span class="text-5xl font-bold">50k+</span>
              <span class="text-lg">Installs</span>
            </div>
            <div class="w-5/12">
              <div class="flex md:flex-row flex-col space-x-2 items-end">
                <span class="text-5xl font-bold">
                  4.5<box-icon class="fill-yellow-400" name="star" type="solid" />
                </span>
                <span class="text-lg">Rating</span>
              </div>
            </div>
          </div>
        </template>

        <!-- Elsaro Doctors App specific description -->
        <template v-if="item.id === 8" #additional-project-description>
          <div class="py-8 font-lexend border-y w-full border-black flex justify-between">
            <div class="w-5/12 flex md:flex-row flex-col space-x-2 items-end">
              <span class="text-5xl font-bold">10k+</span>
              <span class="text-lg">Installs</span>
            </div>
            <div class="w-5/12">
              <div class="flex md:flex-row flex-col space-x-2 items-end">
                <span class="text-5xl font-bold">
                  4.8<box-icon class="fill-yellow-400" name="star" type="solid" />
                </span>
                <span class="text-lg">Rating</span>
              </div>
            </div>
          </div>
        </template>
      </Project>
    </div>
    <div class="flex w-11/12 lg:w-full font-lexend items-center justify-center py-2 md:py-10">
      <span
          class="flex lg:text-lg text-sm space-x-2 group w-fit px-5 py-2 cursor-pointer text-white bg-brand-350 shadow-lg hover:scale-105 rounded-3xl items-center"
          @click="$router.push({ path: '/' })"
      >
        Back to Home
      </span>
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
    demoLink: "/SMS",
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
    id: 4,
    name: "Elsaro - Diagnosis Center",
    theme: "bg-[#34A853]",
    category: "Web app",
    description: [
      "A modern diagnosis center offering advanced medical services. Patients can book appointments, view test results, and consult with doctors online.",
    ],
    link: "https://elsaro.net",
    image: null,
    demoLink: "https://elsaro.net",
  },
  {
    id: 5,
    name: "Kiwi Bingo",
    theme: "bg-[#F59E0B]",
    category: "Web app",
    description: [
      "Kiwi Bingo is an online bingo platform where users can deposit, play, and withdraw money while enjoying a smooth and interactive gaming experience.",
    ],
    link: "https://kiwibingo.com",
    image: null,
    demoLink: null,
  },
  {
    id: 6,
    name: "Raka Cars",
    theme: "bg-[#0D9488]",
    category: "Web app",
    description: [
      "Raka Cars is an online platform for buying and selling cars. Users can post their cars for sale or browse listings to find their next vehicle.",
    ],
    link: "https://rakacars.com/",
    image: null,
    demoLink: "https://rakacars.com/",
  },
  {
    id: 7,
    name: "Elsaro - Patients App",
    theme: "bg-[#3B82F6]",
    category: "Mobile app",
    description: [
      "A mobile app for patients to manage their appointments, view test results, and communicate with doctors from the Elsaro Diagnosis Center.",
    ],
    image: null,
    demoLink: null,
  },
  {
    id: 8,
    name: "Elsaro - Doctors App",
    theme: "bg-[#6B7280]",
    category: "Mobile app",
    description: [
      "A mobile app for doctors at Elsaro Diagnosis Center to manage their patient appointments, view test results, and consult with patients online.",
    ],
    image: null,
    demoLink: null,
  }
];
</script>

<style scoped></style>
