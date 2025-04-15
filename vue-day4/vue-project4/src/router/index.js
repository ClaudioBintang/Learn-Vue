import { createWebHistory, createRouter } from "vue-router";

import About from "../vues/About.vue";
import Login from "../vues/Login.vue";
import Home from "../vues/Home.vue";
import DetailUser from "../vues/DetailUser.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/detail/:id",
    component: DetailUser,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
