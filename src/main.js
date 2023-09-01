import { createApp } from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";
import { RiDeleteBinLine } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";

addIcons(RiDeleteBinLine);

const app = createApp(App);
app.component("Header", Header).component("v-icon", OhVueIcon);
app.mount("#app");
