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
    :error-messages="error"
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

    v-model="model[name]"
    v-validate="field.validate"
    :data-vv-name="name"
    :data-vv-as="veeAs"
    @input="$validator.validate(name, model[name])"
    @change="$validator.validate(name, model[name])"
    @blur="$validator.validate(name, model[name])"
  />
</template>

<script>
import { fieldsMixin } from '../../mixins'
export default {
  name: 'SwitchGenerator',
  mixins: [fieldsMixin]
}
</script>
