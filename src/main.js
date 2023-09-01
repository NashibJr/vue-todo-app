import { createApp } from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";
import { RiDeleteBinLine, PxNotesDelete } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import Todo from "./components/Todo.vue";

addIcons(RiDeleteBinLine, PxNotesDelete);

const app = createApp(App);
app
  .component("Header", Header)
  .component("v-icon", OhVueIcon)
  .component("Todo", Todo);
app.mount("#app");
