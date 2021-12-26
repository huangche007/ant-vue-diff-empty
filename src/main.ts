import "core-js/stable";
import "regenerator-runtime/runtime";
import { createApp, watch } from "vue";
import App from "./App.vue";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router";
import routes from "./router";
import "./public-path";
import { install } from "./locale";
import { useComponent } from "@/utils/antdvRegistry.js";
import i18n from "@/assets/language";
import "@/styles/index.less";
let app, router;

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: boolean;
  }
}
const __qiankun__ = window.__POWERED_BY_QIANKUN__;

export async function bootstrap(props) {}

export async function mount(props) {
  app = createApp(App);
  install(app);
  useComponent(app);
  router = createRouter({
    // history: createWebHashHistory(__qiankun__ ? '/auth/' : '/'),
    history: createWebHistory(__qiankun__ ? "/auth/" : "/"),
    routes
  });
  app
    .use(router)
    .use(i18n)
    .mount("#app");
}

export async function unmount(props) {
  app = null;
  router = null;
}

__qiankun__ || mount({});
