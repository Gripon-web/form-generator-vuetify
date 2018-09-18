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
  name: 'CollectionDemo',
  components: {
    FormGenerator
  },
  data () {
    return {
      model: new FormModel({
        optional: ''
      }),
      schema: {
        fields: {
          optional: {
            type: 'optional',
            activator: {
              state: false,
              label: 'Has options'
            },
            fields: {
              optional: { type: 'text-field', label: 'Is optional', validate: 'required' }
            }
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
