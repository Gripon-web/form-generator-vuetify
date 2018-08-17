<template>
  <v-layout row>
    <v-flex v-bind="{ [`${field.responsive}`]: true }">
      <v-date-picker
        :allowed-dates="field.allowedDates"
        :color="field.color"
        :dark="field.dark"
        :day-format="field.dayFormat"
        :event-color="field.eventColor"
        :events="field.events"
        :first-day-of-week="field.firstDayOfWeek"
        :full-width="field.fullWidth"
        :header-color="field.headerColor"
        :header-date-format="field.headerDateFormat"
        :landscape="field.landscape"
        :light="field.light"
        :locale="field.locale"
        :max="field.max"
        :min="field.min"
        :month-format="field.monthFormat"
        :next-icon="field.nextIcon"
        :no-title="field.noTitle"
        :picker-date="field.pickerDate"
        :prev-icon="field.prevIcon"
        :reactive="field.reactive"
        :readonly="field.readonly"
        :scrollable="field.scrollable"
        :show-current="field.showCurrent"
        :title-date-format="field.titleDateFormat"
        :type="field.inputType"
        :width="field.width"
        :value="field.value"
        :year-format="field.yearFormat"
        :year-icon="field.yearIcon"

        v-model="model[name]"
        v-validate="field.validate"
        :data-vv-name="validatorIndex"
        :data-vv-as="messageFieldName"
        @input="$validator.validate(validatorIndex, model[name])"
        @change="$validator.validate(validatorIndex, model[name])"
        @blur="$validator.validate(validatorIndex, model[name])"
      >
        <slot name="menu"></slot>
      </v-date-picker>

      <div v-if="!menu && error.length>=1">
        <span class="red--text">{{error[0]}}</span>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { fieldsMixin, propsMixin } from '../../mixins'
export default {
  name: 'DatePickerGenerator',
  mixins: [fieldsMixin, propsMixin],
  props: {
    menu: {
      type: Boolean,
      default: false
    }
  }
}
</script>
