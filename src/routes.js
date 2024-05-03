import { createRouter, createWebHistory } from "vue-router";
import RigelSMSPage from "./pages/RigelSMS.vue";
import NotFoundPage from "./pages/NotFound.vue";
import Home from "./pages/rigel/LandingPage.vue";
import Projects from "./pages/rigel/Projects.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/SMS", component: RigelSMSPage },
  { path: "/projects", component: Projects },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes,
});

export default router;
