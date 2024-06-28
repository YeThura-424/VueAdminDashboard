import { createApp } from "vue";
import { createPinia } from "pinia";
import VueApexCharts from "vue3-apexcharts";

import "./style.css";
import "./style/index.scss";

import App from "./App.vue";
import router from "./router";
const pinia = createPinia();

createApp(App).use(router).use(pinia).use(VueApexCharts).mount("#app");
