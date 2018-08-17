<template>
  <v-layout row>
    <v-flex v-bind="{ [`${field.responsive}`]: true }">
      <v-time-picker
        :allowed-hours="field.allowedHours"
        :allowed-minutes="field.allowedMinutes"
        :color="field.color"
        :dark="field.dark"
        :format="field.format"
        :full-width="field.fullWidth"
        :header-color="field.headerColor"
        :landscape="field.landscape"
        :light="field.light"
        :max="field.max"
        :min="field.min"
        :no-title="field.noTitle"
        :scrollable="field.scrollable"
        :value="field.value"
        :width="field.width"

        v-model="model[name]"
        v-validate="field.validate"
        :data-vv-name="validatorIndex"
        :data-vv-as="messageFieldName"
        @input="$validator.validate(validatorIndex, model[name])"
        @change="$validator.validate(validatorIndex, model[name])"
        @blur="$validator.validate(validatorIndex, model[name])"
      >
        <slot name="menu"></slot>
      </v-time-picker>

      <div v-if="!menu && error.length>=1">
        <span class="red--text">{{error[0]}}</span>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { fieldsMixin, propsMixin } from '../../mixins'
export default {
  name: 'TimePickerGenerator',
  mixins: [fieldsMixin, propsMixin],
  props: {
    menu: {
      type: Boolean,
      default: false
    }
  }
}
</script>
