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
  name: 'SelectDemo',
  components: {
    FormGenerator
  },
  data () {
    return {
      model: new FormModel({
        example: ''
      }),
      schema: {
        fields: {
          example: {
            type: 'select',
            label: 'Example',
            validate: 'required',
            errorName: 'custom name error',
            itemText: 'name',
            itemValue: 'id',
            items: [
              { id: 1, name: 'item 1' },
              { id: 2, name: 'item 2' },
              { id: 3, name: 'item 3' },
              { id: 4, name: 'item 4' }
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
