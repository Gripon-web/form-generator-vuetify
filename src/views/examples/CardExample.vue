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
  name: 'CardExampleDemo',
  components: {
    FormGenerator
  },
  data () {
    return {
      model: new FormModel({
        fieldOne: '',
        collection: {
          collectionFieldOne: '',
          collectionFieldTwo: '',
          checkbox: null
        }
      }),
      schema: {
        type: 'card',
        cards: [
          {
            title: {
              title: 'Card One',
              class: 'primary--text'
            },
            fields: {
              collection: {
                type: 'collection',
                title: 'Collection demo',
                fields: {
                  collectionFieldOne: {type: 'text-field', label: 'field One', validate: 'required'},
                  collectionFieldTwo: {type: 'text-field', label: 'field Two', validate: 'required'}
                }
              }
            }
          },
          {
            title: {
              title: 'Card Two',
              class: 'primary--text'
            },
            fields: {
              fieldOne: {type: 'text-field', label: 'Example', validate: 'required', errorName: 'custom name error'},
              checkbox: { type: 'checkbox', label: 'Do you agree ?', validate: 'required' }
            }
          }
        ],
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
