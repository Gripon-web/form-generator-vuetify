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
        collectionGroup: [
          {
            collectionGroupFieldOne: '',
            collectionGroupFieldTwo: ''
          }
        ]
      }),
      schema: {
        fields: {
          collectionGroup: {
            type: 'collection-group',
            title: 'Collection group demo',
            titleFields: 'Group',
            fields: {
              collectionGroupFieldOne: {type: 'text-field', label: 'field One', validate: 'required'},
              collectionGroupFieldTwo: {type: 'text-field', label: 'field Two', validate: 'required'}
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
