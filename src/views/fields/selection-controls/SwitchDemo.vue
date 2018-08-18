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
  name: 'SwitchDemo',
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
          example: {type: 'switch', label: 'Example', validate: 'required', errorName: 'custom name error'}
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
