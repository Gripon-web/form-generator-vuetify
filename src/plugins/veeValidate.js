import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'

Vue.use(VeeValidate, {
  events: 'blur',
  inject: false,
  errorBagName: 'veeErrors'
})

export const setVeeLocale = (localeName) => {
  import(`vee-validate/dist/locale//${localeName}`).then(locale => {
    Validator.localize(localeName, locale)
  })
}
