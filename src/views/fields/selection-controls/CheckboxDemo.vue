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
  name: 'CheckboxDemo',
  components: {
    FormGenerator
  },
  data () {
    return {
      model: new FormModel({
        example: null
      }),
      schema: {
        fields: {
          example: { type: 'checkbox', label: 'Example', validate: 'required' }
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
