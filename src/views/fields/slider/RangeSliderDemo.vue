<template>
  <v-container fluid>
    <v-layout row align-center>
      <v-flex xs12>
        <form-generator :model="model" :schema="schema" @on-submit="onSubmit"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { FormModel, FormGenerator } from '@/components/vuetify-form-generator'
export default {
  name: 'RangeSliderDemo',
  components: {
    FormGenerator
  },
  data () {
    return {
      model: new FormModel({
        example: [40, 200]
      }),
      schema: {
        fields: {
          example: { type: 'range-slider', validate: 'required', errorName: 'custom name error', step: 10, min: 20, max: 200, hideDetails: true, singleLine: true, inputType: 'number' }
        },
        reset: true
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('click', this.model)
    }
  }
}
</script>
