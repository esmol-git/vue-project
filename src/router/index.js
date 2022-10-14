import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "default layout",
      component: () => import("../layouts/DefaultLayout.vue"),
      children: [
        {
          path: "/home",
          name: "Home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/about",
          name: "About",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "/post/:id",
          name: "Post ID",
          component: () => import("../views/PostItem.vue"),
        },
      ],
    },
    {
      name: "auth layout",
      component: () => import("../layouts/AuthLayout.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("../views/Auth.vue"),
        },
      ],
    },
  ],
});

export default router;
