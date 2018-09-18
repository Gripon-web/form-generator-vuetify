<template>
  <v-container fluid grid-list-lg>
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
  name: 'BasicExampleDemo',
  components: {
    FormGenerator
  },
  data () {
    return {
      model: new FormModel({
        username: 'user1',
        email: 'user1@mail.com',
        password: '123456',
        confirmPassword: '123456',
        addresses: [{
          streetAddress: 'My street address',
          state: 'My State',
          city: 'My City'
        }],
        agree: true
      })
    }
  },
  computed: {
    schema () {
      return {
        fields: {
          username: {
            type: 'text-field',
            label: 'Username',
            validate: 'required',
            errorName: 'username'
          },
          email: {
            type: 'text-field',
            label: 'Email',
            validate: 'required|email',
            errorName: 'email',
            inputType: 'email'
          },
          password: {
            type: 'text-field',
            label: 'Password',
            validate: 'required|min:6',
            errorName: 'password',
            inputType: 'password',
            hint: 'minimum 6 characters',
            persistentHint: true
          },
          confirmPassword: {
            type: 'text-field',
            label: 'Confirm Password',
            validate: `required|min:6|confirmed:${this.model.password}`,
            errorName: 'password',
            inputType: 'password',
            hint: 'minimum 6 characters',
            persistentHint: true
          },
          addresses: {
            type: 'collection-group',
            required: true,
            title: 'Addresses',
            titleFields: 'Address',
            fields: {
              streetAddress: { type: 'text-field', label: 'Street adress', validate: 'required' },
              state: { type: 'text-field', label: 'State/Province/Region', validate: 'required' },
              city: { type: 'text-field', label: 'City', validate: 'required' }
            }
          },
          agree: { type: 'checkbox', label: 'Do you agree ?', validate: 'required' }
        },
        buttons: {
          reset: true,
          submit: {
            text: 'Submit'
          }
        }
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
