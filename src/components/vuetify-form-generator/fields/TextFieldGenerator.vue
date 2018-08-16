<template>
  <v-text-field
    :append-icon="field.appendIcon"
    :append-icon-cb="field.appendIconCb"
    :append-outer-icon="field.appendOuterIcon"
    :append-outer-icon-cb="field.appendOuterIconCb"
    :autofocus="field.autofocus"
    :background-color="field.backgroundColor"
    :box="field.box"
    :browser-autocomplete="field.browserAutocomplete"
    :clear-icon="field.clearIcon"
    :clear-icon-cb="field.clearIconCb"
    :clearable="field.clearable"
    :color="field.color"
    :counter="field.counter"
    :dark="field.dark"
    :disabled="field.disabled"
    :dont-fill-mask-blanks="field.dontFillMaskBlanks"
    :error="field.error"
    :error-count="field.errorCount"
    :error-messages="error"
    :flat="field.flat"
    :full-width="field.fullWidth"
    :height="field.height"
    :hide-details="field.hideDetails"
    :hint="field.hint"
    :label="field.label"
    :light="field.light"
    :loading="field.loading"
    :mask="field.mask"
    :messages="field.messages"
    :outline="field.outline"
    :persistent-hint="field.persistentHint"
    :placeholder="field.placeholder"
    :prefix="field.prefix"
    :prepend-icon="field.prependIcon"
    :prepend-icon-cb="field.prependIconCb"
    :prepend-inner-icon="field.prependInnerIcon"
    :prepend-inner-icon-cb="field.prependInnerIconCb"
    :readonly="field.readonly"
    :return-masked-value="field.returnMaskedValue"
    :reverse="field.reverse"
    :rules="field.rules"
    :single-line="field.singleLine"
    :solo="field.solo"
    :solo-inverted="field.soloInverted"
    :success="field.success"
    :success-messages="field.successMessages"
    :suffix="field.suffix"
    :type="field.inputType"
    :validate-on-blur="field.validateOnBlur"
    :value="field.value"

    v-model="vModel"
    v-validate="field.validate"
    :data-vv-name="validatorIndex"
    :data-vv-as="messageFieldName"
    @input="$validator.validate(validatorIndex, model[name])"
    @change="$validator.validate(validatorIndex, model[name])"
    @blur="$validator.validate(validatorIndex, model[name])"
  />
</template>

<script>
import { fieldsMixin, propsMixin } from '../mixins'
export default {
  name: 'TextFieldGenerator',
  mixins: [fieldsMixin, propsMixin],
  props: {
    model: Object | Number,
    isController: {
      type: Boolean | String,
      default: false
    }
  },
  computed: {
    vModel: {
      get () {
        if (this.isController !== false) {
          return this.model[this.name][this.isController === 'start' ? 0 : 1]
        }
        return this.model[this.name]
      },
      set (val) {
        if (this.isController !== false) {
          this.model[this.name][this.isController === 'start' ? 0 : 1] = val
        } else {
          this.model[this.name] = val
        }
      }
    }
  }
}
</script>
