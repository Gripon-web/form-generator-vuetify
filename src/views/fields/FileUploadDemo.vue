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
        image: ''
      }),
      schema: {
        fields: {
          image: {
            type: 'file-upload',
            accept: '*',
            responsive: 'xs10 sm5 offset-xs1',
            classBtn: 'info',
            label: 'Image',
            required: true,
            preview: true,
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
