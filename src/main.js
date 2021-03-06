import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store/store";
import BootstrapVue from 'bootstrap-vue'
import VueCountdown from '@chenfengyuan/vue-countdown'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.component(VueCountdown.name, VueCountdown);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
