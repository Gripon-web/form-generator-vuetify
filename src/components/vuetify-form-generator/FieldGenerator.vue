<template>
  <v-layout row wrap>
    <v-flex v-bind="{ [`${field.responsive ? field.responsive : 'xs12'}`]: true }"
      v-for="(field, name) in schema" :key="name"
    >

      <!-- Collection start -->
      <collection-generator v-if="field.type === 'collection'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></collection-generator>

      <collection-group-generator v-if="field.type === 'collection-group'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></collection-group-generator>
      <!-- Collection end -->

      <!-- Optional start -->
      <optional-generator v-if="field.type === 'optional'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></optional-generator>

      <optional-group-generator v-if="field.type === 'optional-group'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :errors="errors" :field="field"
      ></optional-group-generator>
      <!-- Optional end -->

      <!-- Picker start -->
      <date-picker-generator v-if="field.type === 'date-picker'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :errors="errors" :field="field"
      ></date-picker-generator>

      <menu-date-picker-generator v-if="field.type === 'menu-date-picker'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :errors="errors" :field="field"
      ></menu-date-picker-generator>

      <menu-time-picker-generator v-if="field.type === 'menu-time-picker'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :errors="errors" :field="field"
      ></menu-time-picker-generator>

      <time-picker-generator v-if="field.type === 'time-picker'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :errors="errors" :field="field"
      ></time-picker-generator>
      <!-- Picker end -->

      <!-- selection-controls start -->
      <checkbox-generator v-if="field.type === 'checkbox'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></checkbox-generator>

      <radio-group-generator v-if="field.type === 'radio-group'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></radio-group-generator>

      <switch-generator v-if="field.type === 'switch'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></switch-generator>
      <!-- selection-controls end -->

      <!-- Slider start -->
      <range-slider-generator v-if="field.type === 'range-slider'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></range-slider-generator>

      <slider-generator v-if="field.type === 'slider'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></slider-generator>
      <!-- Slider end -->

      <file-upload-generator v-if="field.type === 'file-upload'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></file-upload-generator>

      <select-generator v-if="field.type === 'select'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
        :itemValue="field.itemValue" :itemText="field.itemText"
      ></select-generator>

      <text-area-generator v-if="field.type === 'text-area'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></text-area-generator>

      <text-field-generator v-if="field.type === 'text-field'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></text-field-generator>

    </v-flex>
  </v-layout>
</template>

<script>
import {
  FileUploadGenerator,
  CheckboxGenerator,
  RadioGroupGenerator,
  SwitchGenerator,
  RangeSliderGenerator,
  SliderGenerator,
  SelectGenerator,
  TextAreaGenerator,
  TextFieldGenerator,
  CollectionGenerator,
  CollectionGroupGenerator,
  OptionalGenerator,
  OptionalGroupGenerator,
  DatePickerGenerator,
  TimePickerGenerator,
  MenuDatePickerGenerator,
  MenuTimePickerGenerator
} from './fields'
export default {
  name: 'FieldGenerator',
  components: {
    // Fields
    FileUploadGenerator,
    SelectGenerator,
    TextAreaGenerator,
    TextFieldGenerator,
    // Selection Controls
    CheckboxGenerator,
    RadioGroupGenerator,
    SwitchGenerator,
    // Slider
    RangeSliderGenerator,
    SliderGenerator,
    // Collection
    CollectionGenerator,
    CollectionGroupGenerator,
    // Optional
    OptionalGenerator,
    OptionalGroupGenerator,
    // Picker
    DatePickerGenerator,
    TimePickerGenerator,
    MenuDatePickerGenerator,
    MenuTimePickerGenerator
  },
  props: {
    errors: Object,
    model: Object,
    schema: Object,
    veeIndex: {
      default: null
    }
  }
}
</script>
