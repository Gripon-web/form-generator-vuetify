<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>

      <v-flex shrink style="width: 60px">
        <text-field-generator
          :name="name" :model="model" :field="field" :errors="errors" isController="start"
        ></text-field-generator>
      </v-flex>

      <v-flex>
        <v-range-slider
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
        />
      </v-flex>

      <v-flex shrink style="width: 60px">
        <text-field-generator
          :name="name" :model="model" :field="field" :errors="errors" isController="end"
        ></text-field-generator>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import { fieldsMixin, propsMixin } from '../../mixins'
import TextFieldGenerator from '../TextFieldGenerator'
export default {
  name: 'RangeSliderGenerator',
  components: { TextFieldGenerator },
  mixins: [fieldsMixin, propsMixin]
}
</script>
