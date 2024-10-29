import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "animate.css";

// Group all Font Awesome imports and setup together
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Add icons to library before creating the app
library.add(fas, far, fab);

const app = createApp(App);

// Register the component globally
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.mount("#app");
