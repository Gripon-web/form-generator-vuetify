<template>
  <v-layout row wrap>
    <v-flex v-bind="{ [`${field.responsive ? field.responsive : 'xs12'}`]: true }"
      v-for="(field, name) in schema" :key="name"
    >

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

      <!-- Specials Fields start -->
      <collection-generator v-if="field.type === 'collection'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></collection-generator>

      <collection-group-generator v-if="field.type === 'collection-group'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></collection-group-generator>

      <optional-generator v-if="field.type === 'optional'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :field="field" :errors="errors"
      ></optional-generator>

      <optional-group-generator v-if="field.type === 'optional-group'"
        :veeIndex="veeIndex"
        :name="name" :model="model" :errors="errors" :field="field"
      ></optional-group-generator>
      <!-- Specials Fields end -->

    </v-flex>
  </v-layout>
</template>

<script>
import {
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
  OptionalGroupGenerator
} from './fields'
export default {
  name: 'FieldGenerator',
  components: {
    // Fields
    CheckboxGenerator,
    RadioGroupGenerator,
    SwitchGenerator,
    RangeSliderGenerator,
    SliderGenerator,
    SelectGenerator,
    TextAreaGenerator,
    TextFieldGenerator,
    // Specials fields
    CollectionGenerator,
    CollectionGroupGenerator,
    OptionalGenerator,
    OptionalGroupGenerator
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
