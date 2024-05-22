<template>
  <section class="flex justify-between h-screen items-center w-10/12 mx-auto">
    <GridBackground />
    <section
      class="w-7/12 items-center flex flex-col space-y-5 justify-evenly min-h-screen h-screen pt-12"
    >
      <Description />
      <Partners />
    </section>
    <Stats />
  </section>
</template>

<script setup>
import AOS from "aos";
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import GridBackground from "../components/GridBackground.vue";
import Stats from "../views/Hero/Stats.vue";
import Partners from "../views/Hero/Partners.vue";
import Description from "../views/Hero/Description.vue";

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
  gsap.registerPlugin(TextPlugin);

  const shuffleElements = document.querySelectorAll(".shuffle");
  shuffleElements.forEach((element) => {
    const finalValue = parseInt(element.getAttribute("data-final"));
    gsap.to(element, {
      duration: 2,
      textContent: finalValue,
      roundProps: "textContent",
      ease: "none",
      snap: { textContent: 1 },
      delay: 2,
      onUpdate: function () {
        element.textContent = Math.round(element.textContent) + "+";
      },
    });
  });

  setInterval(scrollCompanyList, 20);

  gsap.from(".title", {
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 4,
    ease: "back.out(1.7)",
  });

  gsap.from(".title-part", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 1,
  });

  gsap.from(".buttons", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    delay: 1.5,
  });

  gsap.from(".stats", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    delay: 2,
  });
  gsap.from(".company-list > *", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1.5,
    ease: "power2.inOut",
    delay: 2,
  });
});
</script>

<style></style>
