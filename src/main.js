import Vue from 'vue'
//import App from './App.vue'
import DemoValidate from "@/DemoValidate";
import Vuelidate from "vuelidate";
import VueValidate from "@/VueValidate";
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(VueValidate),
}).$mount('#app')
