<template>
  <v-slider
    :always-dirty="field.alwaysDirty"
    :append-icon="field.appendIcon"
    :append-icon-cb="field.appendIconCb"
    :background-color="field.backgroundColor"
    :color="field.color"
    :dark="field.dark"
    :disabled="field.disabled"
    :dont-fill-mask-blanks="field.dontFillMaskBlanks"
    :error="field.error"
    :error-count="field.errorCount"
    :error-messages="error"
    :height="field.height"
    :hide-details="field.hideDetails"
    :hint="field.hint"
    :inverse-label="field.inverseLabel"
    :label="field.label"
    :light="field.light"
    :loading="field.loading"
    :max="field.max"
    :messages="field.messages"
    :min="field.min"
    :persistent-hint="field.persistentHint"
    :prepend-icon="field.prependIcon"
    :prepend-icon-cb="field.prependIconCb"
    :range="field.range"
    :readonly="field.readonly"
    :rules="field.rules"
    :step="field.step"
    :success="field.success"
    :success-messages="field.successMessages"
    :thumb-color="field.thumbColor"
    :thumb-label="field.thumbLabel"
    :thumb-size="field.thumbSize"
    :tick-labels="field.tickLabels"
    :tick-size="field.tickSize"
    :ticks="field.ticks"
    :track-color="field.trackColor"
    :validate-on-blur="field.validateOnBlur"
    :value="field.value"

    v-model="model[name]"
    v-validate="field.validate"
    :data-vv-name="validatorIndex"
    :data-vv-as="messageFieldName"
    @input="$validator.validate(validatorIndex, model[name])"
    @change="$validator.validate(validatorIndex, model[name])"
    @blur="$validator.validate(validatorIndex, model[name])"
    @keydown="model.errors.clear($event.target.name)"
  />
</template>

<script>
import { fieldsMixin, propsMixin } from '../../mixins'
export default {
  name: 'SliderGenerator',
  mixins: [fieldsMixin, propsMixin]
}
</script>
