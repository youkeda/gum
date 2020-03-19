import Vue from "vue";
import App from "./App.vue";
import Gum from "./index";
import router from "./examples/router";

Vue.use(Gum);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
