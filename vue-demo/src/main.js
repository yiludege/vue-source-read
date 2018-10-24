import Vue from "vue";
import router from "./router";

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h("div", [h("router-view")])
}).$mount("#app");
