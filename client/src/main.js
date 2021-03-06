import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/pt-br'
import Swal from 'sweetalert2'

Vue.prototype.$swal = Swal
Vue.use(ElementUI, { locale: lang })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
