import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";
import "./style.css";

createApp(App).use(Toast).mount("#app");
