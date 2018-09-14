import {
  FieldGenerator,
  FormGenerator,
  FormModel as Model
} from './src/components/vuetify-form-generator'

import VeeValidate from 'vee-validate'

export const FormModel = Model

const FormGeneratorVuetify = {
  install(Vue, options) {
    Vue.component('field-generator', FieldGenerator, {
      name: 'field-generator'
    })
    Vue.component('form-generator', FormGenerator, {
      name: 'form-generator'
    })

    Vue.use(VeeValidate, {
      events: 'blur',
      inject: false,
      errorBagName: 'veeErrors'
    })
  }
}

export default FormGeneratorVuetify