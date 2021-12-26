import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./router";
import { useComponent } from "@/utils/antdvRegistry.js";
import "@/styles/index.less";
let app, router;

export async function bootstrap(props) {}

export async function mount(props) {
  app = createApp(App);
  useComponent(app);
  router = createRouter({
    // history: createWebHashHistory(__qiankun__ ? '/auth/' : '/'),
    history: createWebHistory("/"),
    routes
  });
  app.use(router).mount("#app");
}

export async function unmount(props) {
  app = null;
  router = null;
}
mount({});
