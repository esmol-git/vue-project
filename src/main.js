import { createApp } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import App from "./App.vue";
import router from "./router";

import "./assets/style/sass/main.scss";
import "./assets/fonts/icon/style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(autoAnimatePlugin);

app.mount("#app");
