<template>
  <section
      class="flex flex-col md:flex-row h-auto lg:justify-between lg:h-screen items-center w-11/12 lg:w-10/12 mx-auto py-0 pb-10 lg:py-0"
  >
    <!-- Background Grid -->
    <GridBackground class="absolute top-0 left-0 w-full h-full lg:block hidden" />

    <!-- Left Section (Description and Partners) -->
    <section
        class="w-full lg:w-7/12 items-center flex flex-col lg:space-y-4 space-y-10 justify-evenly mt-20 lg:mt-0 lg:min-h-screen lg:pt-12"
    >
      <Description />
      <Partners />
    </section>

    <!-- Right Section (Stats) -->
    <Stats />
  </section>
</template>

<script setup>
import AOS from "aos";
import { onMounted } from "vue";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import GridBackground from "../components/GridBackground.vue";
import Stats from "../views/Hero/Stats.vue";
import Partners from "../views/Hero/Partners.vue";
import Description from "../views/Hero/Description.vue";

AOS.init();

AOS.init({
  duration: 1600,
});

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
});
</script>

<style scoped></style>
