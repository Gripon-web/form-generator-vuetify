<template>
  <v-radio-group
    :append-icon="field.appendIcon"
    :append-icon-cb="field.appendIconCb"
    :background-color="field.backgroundColor"
    :color="field.color"
    :column="field.column"
    :dark="field.dark"
    :disabled="field.disabled"
    :error="field.error"
    :error-count="field.errorCount"
    :error-messages="error"
    :height="field.height"
    :hide-details="field.hideDetails"
    :hint="field.hint"
    :label="field.label"
    :light="field.light"
    :loading="field.loading"
    :mandatory="field.mandatory"
    :messages="field.messages"
    :name="field.name"
    :persistent-hint="field.persistentHint"
    :prepend-icon="field.prependIcon"
    :prepend-icon-cb="field.prependIconCb"
    :readonly="field.readonly"
    :row="field.row"
    :rules="field.rules"
    :success="field.success"
    :success-messages="field.successMessages"
    :validate-on-blur="field.validateOnBlur"
    :value="field.value"
    :value-comparator="field.valueComparator"

    v-model="model[name]"
    v-validate="field.validate"
    :data-vv-name="validatorIndex"
    :data-vv-as="messageFieldName"
    @input="$validator.validate(validatorIndex, model[name])"
    @change="$validator.validate(validatorIndex, model[name])"
    @blur="$validator.validate(validatorIndex, model[name])"
    @keydown="model.errors.clear($event.target.name)"
  >
    <radio-generator v-for="(item, i) in field.items" :key="i" :field="item"/>
  </v-radio-group>
</template>

<script>
import { fieldsMixin, propsMixin } from '../../mixins'
import RadioGenerator from './RadioGenerator'
export default {
  name: 'RadioGroupGenerator',
  components: { RadioGenerator },
  mixins: [fieldsMixin, propsMixin]
}
</script>
