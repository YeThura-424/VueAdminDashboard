import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style/element/index.scss";

import "./style.css";
import App from "./App.vue";
import router from "./router";
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
