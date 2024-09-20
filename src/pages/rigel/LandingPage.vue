<template>
  <main>
    <Hero id="home" ref="homeRef"></Hero>
    <Services id="services" ref="servicesRef"></Services>
    <About id="about" ref="aboutRef"></About>
    <Projects id="projects" ref="projectsRef"></Projects>
    <Team ref="teamRef" data-aos="fade-up"></Team>
    <ContactUs id="contactUs" ref="contactUsRef" data-aos="fade-up"></ContactUs>
<!--    <Contact id="contact" ref="contactRef" data-aos="fade-up"></Contact>-->
  </main>
</template>

<script setup>
import Hero from "../../views/Hero.vue";
import About from "../../views/About.vue";
import Team from "../../views/Team.vue";
import Contact from "../../views/Contact.vue";
import AOS from "aos";
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { useNavBarStore } from "../../store/navbar_store.js";
import Services from "../../views/Services.vue";
import Projects from "../../views/Projects/Projects.vue";
import ContactUs from "../../views/ContactUs.vue";

const navBarStore = useNavBarStore();

onMounted(() => {
  AOS.init({});

  nextTick(() => {
    window.addEventListener("scroll", handleScroll);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const homeRef = ref(null);
const aboutRef = ref(null);
const teamRef = ref(null);
const projectsRef = ref(null);
const contactRef = ref(null);
const servicesRef = ref(null);

const handleScroll = () => {
  let scrollPosition = window.scrollY;

  let homePosition = homeRef.value.$el.offsetTop;
  let aboutPosition = aboutRef.value.$el.offsetTop;
  let teamPosition = teamRef.value.$el.offsetTop;
  let projectsPosition = projectsRef.value.$el.offsetTop - 90;
  let contactPosition = contactRef.value.$el.offsetTop;
  let servicesPosition = servicesRef.value.$el.offsetTop - 70;

  if (scrollPosition >= homePosition && scrollPosition < servicesPosition) {
    navBarStore.currentPage = "home";
    navBarStore.setNavBarTheme(
      "bg-white text-black",
      "text-black fill-gray-700",
      "text-primary",
    );
  } else if (
    scrollPosition >= servicesPosition &&
    scrollPosition < aboutPosition
  ) {
    // navBarStore.currentPage = "about";
    navBarStore.setNavBarTheme(
      "bg-black text-white",
      "text-white fill-black",
      "text-primary",
    );
  } else if (
    scrollPosition >= aboutPosition &&
    scrollPosition < projectsPosition
  ) {
    navBarStore.currentPage = "about";
    navBarStore.setNavBarTheme(
      "bg-gray-100 text-black",
      "text-black fill-black",
      "text-primary",
    );
  } else if (
    scrollPosition >= projectsPosition &&
    scrollPosition < teamPosition
  ) {
    navBarStore.currentPage = "projects";
    navBarStore.setProjectsNavBarTheme();
  } else if (
    scrollPosition >= teamPosition &&
    scrollPosition < contactPosition
  ) {
    navBarStore.currentPage = "team";
    navBarStore.setNavBarTheme(
      "bg-gray-100",
      "text-black fill-black",
      "text-primary",
    );
  }

  if (navBarStore.showMenu) navBarStore.setMenuTheme();
};
</script>

<style scoped></style>
