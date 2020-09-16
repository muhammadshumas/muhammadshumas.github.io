import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap Vue
import { BootstrapVue } from "bootstrap-vue";

// Bootstrap Vue Scss
import "./styles/main.scss";

// Install BootstrapVue
Vue.use(BootstrapVue);

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowUp,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faEnvelope,
  faPhone,
  faFacebook,
  faWhatsapp,
  faInstagram,
  faUser,
  faArrowUp
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

// Vue lazyload

import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: require("./assets/images/general/loading.gif"),
  // attempt: 1
});

// Vue Lightbox

import Lightbox from "vue-easy-lightbox";

Vue.use(Lightbox);

// vue particales
import VueParticles from "vue-particles";
Vue.use(VueParticles);

//vue axios
import VueAos from "vue-aos";

Vue.component("vue-aos", VueAos);

// Vue scrollto

import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo);

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
