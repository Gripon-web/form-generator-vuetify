import {
  FieldGenerator,
  FormGenerator,
  FormModel as Model
} from './components/vuetify-form-generator'

export const FormModel = Model

const FormGeneratorVuetify = {
  install(Vue, options) {
    Vue.component('field-generator', FieldGenerator, {
      name: 'field-generator'
    })
    Vue.component('form-generator', FormGenerator, {
      name: 'form-generator'
    })
  }
}

export default FormGeneratorVuetify
