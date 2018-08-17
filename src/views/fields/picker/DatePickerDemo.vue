<template>
  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <form-generator :model="model" :schema="schema" @on-submit="onSubmit"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { FormModel, FormGenerator } from '@/components/vuetify-form-generator'
export default {
  name: 'DatePickerDemo',
  components: {
    FormGenerator
  },
  data () {
    return {
      model: new FormModel({
        datePicker: ''
      }),
      schema: {
        fields: {
          datePicker: {
            type: 'date-picker',
            locale: 'FR-fr',
            validate: 'required',
            format: 'DD MMMM YYYY'
          }
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
