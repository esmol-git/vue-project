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
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "/post/:id",
          name: "postId",
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
