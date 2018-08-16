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
  name: 'CollectionGroupDemo',
  components: {
    FormGenerator
  },
  data () {
    return {
      model: new FormModel({
        optionalGroupDemo: {
          fieldOne: '',
          fieldTwo: ''
        }
      }),
      schema: {
        fields: {
          optionalGroupDemo: {
            type: 'optional-group',
            activator: {
              state: false,
              label: 'Has optional group'
            },
            fields: {
              fieldOne: {type: 'text-field', label: 'fieldOne optional', validate: 'required'},
              fieldTwo: {type: 'text-field', label: 'fieldTwo optional', validate: 'required'}
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
