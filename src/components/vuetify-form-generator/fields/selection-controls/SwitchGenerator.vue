<template>
  <v-switch
    :append-icon="field.appendIcon"
    :append-icon-cb="field.appendIconCb"
    :background-color="field.backgroundColor"
    :color="field.color"
    :dark="field.dark"
    :disabled="field.disabled"
    :error="field.error"
    :error-count="field.errorCount"
    :error-messages="switchError"
    :false-value="field.falseValue"
    :height="field.height"
    :hide-details="field.hideDetails"
    :hint="field.hint"
    :id="field.id"
    :input-value="field.inputValue"
    :label="field.label"
    :light="field.light"
    :loading="field.loading"
    :messages="field.messages"
    :multiple="field.multiple"
    :persistent-hint="field.persistentHint"
    :prepend-icon="field.prependIcon"
    :prepend-icon-cb="field.prependIconCb"
    :readonly="field.readonly"
    :ripple="field.ripple"
    :rules="field.rules"
    :success="field.success"
    :success-messages="field.successMessages"
    :toggle-keys="field.toggleKeys"
    :true-value="field.trueValue"
    :validate-on-blur="field.validateOnBlur"
    :value="field.value"
    :value-comparator="field.valueComparator"

    v-model="vModel"
    v-validate="field.validate"
    :data-vv-name="validatorIndex"
    :data-vv-as="messageFieldName"
    @input="updateValue($event)"
    @change="updateValue($event)"
    @blur="$validator.validate(validatorIndex, model[name])"
    @keydown="model.errors.clear($event.target.name)"
  />
</template>

<script>
import { fieldsMixin, propsMixin, selectionControlsMixin } from '../../mixins'
export default {
  name: 'SwitchGenerator',
  mixins: [fieldsMixin, propsMixin, selectionControlsMixin],
  props: {
    model: Object | Boolean,
    isActivator: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    switchError () {
      if (this.isActivator) {
        return []
      }
      return this.error
    },
    vModel: {
      get () {
        if (this.isActivator) {
          return this.field['state']
        }
        return this.model[this.name]
      },
      set (val) {
        if (this.isActivator) {
          this.field['state'] = val
        } else {
          this.model[this.name] = val
        }
      }
    }
  }
}
</script>
