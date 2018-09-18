import '@babel/polyfill'
import Vue from 'vue'

import './plugins/formGeneratorVuetify'
import './plugins/graphql'
import './plugins/veeValidate'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import {
  FieldGenerator,
  FormGenerator
} from '@/components/vuetify-form-generator'

Vue.config.productionTip = false

Vue.component('field-generator', FieldGenerator, {
  name: 'field-generator'
})
Vue.component('form-generator', FormGenerator, {
  name: 'form-generator'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
