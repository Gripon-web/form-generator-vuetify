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
        username: 'user1',
        email: 'user1@mail.com',
        password: '123456',
        confirmPassword: '123456',
        firstName: 'Firstname',
        lastName: 'Lastname',
        birthdate: '1970-01-01',
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
        type: 'card',
        cards: [
          {
            title: {
              title: 'Create account',
              class: 'primary--text'
            },
            fields: {
              username: {
                type: 'text-field',
                responsive: 'xs6',
                label: 'Username',
                validate: 'required',
                errorName: 'username'
              },
              email: {
                type: 'text-field',
                responsive: 'xs6',
                label: 'Email',
                validate: 'required|email',
                errorName: 'email',
                inputType: 'email'
              },
              password: {type: 'text-field',
                label: 'Password',
                responsive: 'xs6',
                validate: 'required|min:6',
                errorName: 'password',
                inputType: 'password',
                hint: 'minimum 6 characters',
                persistentHint: true
              },
              confirmPassword: {type: 'text-field',
                label: 'Confirm Password',
                responsive: 'xs6',
                validate: `required|min:6|confirmed:${this.model.password}`,
                errorName: 'password',
                inputType: 'password'
              }
            }
          },
          {
            title: {
              title: 'Personnal info',
              class: 'primary--text'
            },
            fields: {
              firstName: { type: 'text-field', label: 'First name', responsive: 'xs6', validate: 'required' },
              lastName: { type: 'text-field', label: 'Last name', responsive: 'xs6', validate: 'required' },
              birthdate: { type: 'menu-date-picker', label: 'Birthdate', responsive: 'xs6', format: 'DD MMMM YYYY', validate: 'required' },
              addresses: {
                type: 'collection-group',
                title: 'Addresses',
                titleFields: 'Address',
                fields: {
                  streetAddress: { type: 'text-field', label: 'Street adress', validate: 'required' },
                  state: { type: 'text-field', label: 'State/Province/Region', validate: 'required' },
                  city: { type: 'text-field', label: 'City', validate: 'required' }
                }
              }
            }
          },
          {
            title: {
              title: 'Last step',
              class: 'primary--text'
            },
            fields: {
              agree: { type: 'checkbox', label: 'Do you agree ?', validate: 'required' }
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
