import Vue from 'vue'
import App from './App.vue'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
 
// globally (in your main .js file)
Vue.component('v-icon', Icon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
