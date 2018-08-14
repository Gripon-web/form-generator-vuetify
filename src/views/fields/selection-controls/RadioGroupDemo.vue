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
  name: 'RadioGroup',
  components: {
    FormGenerator
  },
  data () {
    return {
      model: new FormModel({
        example: 1
      }),
      schema: {
        fields: {
          example: {
            type: 'radio-group',
            label: 'Example',
            validate: 'required',
            errorName: 'custom name error',
            items: [
              { label: 'test', value: 1 },
              { label: 'test 2', value: 2 }
            ]
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
