<template>
  <section class="flex justify-between w-10/12 mx-auto">
    <GridBackground />
    <section
      class="w-7/12 items-center flex flex-col space-y-5 justify-evenly min-h-screen h-screen pt-12"
    >
      <div
        class="w-full h-3/5 py-3 items-center flex-col space-y-3 md:space-y-0 flex justify-evenly"
      >
        <div
          class="flex flex-col w-full font-lexend justify-center space-y-8 lg:space-y-10"
        >
          <div
            class="text-5xl w-full text-start lg:text-6xl flex flex-col space-y-2 text-black font-semibold"
          >
            <span class=""> More Than Clients,</span>
            <span class="relative whitespace-nowrap w-fit">
              <span class="relative">We Become </span>
              <svg
                aria-hidden="true"
                class="absolute right-0 top-[80%] h-[0.58em] w-5/12 fill-primary"
                preserveAspectRatio="none"
                viewBox="0 0 418 42"
              >
                <path
                  d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                ></path>
                <span class="text-primary">Partners</span>
              </svg>
            </span>
          </div>

          <!--          Mobile version-->
          <p class="lg:hidden font-light w-11/12">
            With creativity and technology, we craft software solutions that
            redefine possibilities. Join us in forging a digital ETHIOPIA!
          </p>

          <!--          Desktop version-->
          <p
            class="w-11/12 text-lg mt-8 font-light text-gray-600 hidden md:inline-block"
          >
            We invest in understanding your vision and collaborate for
            success.<br />
            Together, we'll strategize and celebrate wins.
          </p>
        </div>

        <div class="flex w-full space-x-5">
          <div
            class="bg-primary rounded-lg cursor-pointer hover:scale-105 px-6 text-lg py-3 font-semibold text-white"
          >
            Book a 15-min Call
          </div>

          <a
            class="inline-flex w-fit items-center justify-center text-lg font-medium cursor-pointer hover:scale-105 hover:font-semibold hover:underline duration-200 px-4 py-1 text-center"
            href="#contact"
            >See Recent Works
            <ChevronRightIcon class="w-6 pl-1" />
          </a>
        </div>
      </div>

      <div class="flex flex-col flex-wrap w-full space-y-3 py-2">
        <div class="font-lexend font-light text-sm text-gray-600">
          Working with
        </div>

        <div ref="companyList" class="flex flex-wrap">
          <company-item company="" label="Ankeboot Books"></company-item>
          <company-item company="bo" label="ELSARO"></company-item>
          <company-item company="bo" label="BB Trading"></company-item>
          <!--          <company-item company="bo" label="Abadir SuperMarkets"></company-item>-->
          <company-item company="bo" label="Maraki Fitness"></company-item>
          <company-item company="bo" label="AIA"></company-item>
          <company-item company="bo" label="Bios College"></company-item>
          <company-item company="bo" label="Gurella Marketing"></company-item>
          <company-item company="bo" label="And more"></company-item>
        </div>
      </div>
    </section>
    <div class="w-5/12 flex min-h-full items-center">
      <div class="bg-yellow-400 h-56 w-44 rounded-xl text-black">sdf</div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import CompanyItem from "../components/CompanyItem.vue";
import { onMounted, ref } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/20/solid/index.js";
import GridBackground from "../components/GridBackground.vue";

AOS.init();

AOS.init({
  // Global settings:
  disable: false,
  duration: 1600,
});
const companyList = ref();

const scrollCompanyList = () => {
  if (
    companyList.value.scrollLeft >=
    companyList.value.scrollWidth - companyList.value.clientWidth
  ) {
    companyList.value.scrollLeft = 0;
  } else {
    companyList.value.scrollLeft += 1;
  }
};

onMounted(() => {
  setInterval(scrollCompanyList, 20);
});
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.scrollbar-hide {
  -ms-overflow-style: none; /* for Internet Explorer and Edge */
  scrollbar-width: none; /* for Firefox */
}

.bg-image {
  background-image: url("../assets/dark_star.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@keyframes pulse {
  0% {
    box-shadow:
      0 0 10px #fff,
      0 0 20px #23e0fd,
      0 0 30px #08f,
      0 0 40px #08f,
      0 0 50px #08f,
      0 0 60px #08f;
  }
  50% {
    box-shadow:
      0 0 20px #fff,
      0 0 30px #23e0fd,
      0 0 40px #08f,
      0 0 50px #08f,
      0 0 60px #08f,
      0 0 70px #08f;
  }
  100% {
    box-shadow:
      0 0 10px #fff,
      0 0 20px #23e0fd,
      0 0 30px #08f,
      0 0 40px #08f,
      0 0 50px #08f,
      0 0 60px #08f;
  }
}

.glow {
  box-shadow:
    0 0 10px #23e0fd,
    0 0 20px #23e0fd,
    0 0 30px #08f,
    0 0 40px #08f,
    0 0 50px #08f,
    0 0 60px #08f;
  animation: pulse 2s infinite;
}
</style>
