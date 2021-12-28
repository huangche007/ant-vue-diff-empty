import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./router";
import "./styles/cus.min.css";
import { useComponent } from "@/utils/antdvRegistry.js";
let app, router;
// eslint-disable-next-line prefer-const
app = createApp(App);
useComponent(app);
// eslint-disable-next-line prefer-const
router = createRouter({
  history: createWebHistory("/"),
  routes
});
app.use(router).mount("#app");
