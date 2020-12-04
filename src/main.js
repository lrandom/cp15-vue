import Vue from 'vue'
import App from './App.vue'
import DemoValidate from "@/DemoValidate";
import Vuelidate from "vuelidate";
import VueValidate from "@/VueValidate";
import store from '@/store/index.store'
import VuexDemo from "@/VuexDemo";

import router from './router'
Vue.use(Vuelidate)
Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(VuexDemo)
}).$mount('#app')
