import { createApp } from "vue";
import App from "./App.vue";
import {createPinia} from 'pinia';
import '@/assets/style/icomoon/icomoon_style/icomoon_style.css';

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
