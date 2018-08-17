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
  name: 'MenuTimePickerDemo',
  components: {
    FormGenerator
  },
  data () {
    return {
      model: new FormModel({
        menuTimePicker: null
      }),
      schema: {
        fields: {
          menuTimePicker: {
            type: 'menu-time-picker',
            label: 'Menu time picker label',
            required: true,
            format: '24hr',
            validate: 'required'
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
