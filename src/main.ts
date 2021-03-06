import { createApp } from "vue";
import router from "@/router";
import App from "@/App.vue";

createApp(App as any)
  .use(router)
  .mount("#wrapper");
