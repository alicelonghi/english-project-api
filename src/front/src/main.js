import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css"; // This line here

import WebRTC from "vue-webrtc";

import axios from "axios";

Vue.prototype.$http = axios;

Vue.use(WebRTC);

Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  VueMaterial,
  render: (h) => h(App),
}).$mount("#app");
