// generators
import FormGenerator from './FormGenerator'
import FieldGenerator from './FieldGenerator'
// models
import { FormModel } from './models/form'

import Vue from 'vue'
Vue.component('field-generator', FieldGenerator, {
  name: 'field-generator'
})

export {
  FormGenerator,
  FormModel
}
