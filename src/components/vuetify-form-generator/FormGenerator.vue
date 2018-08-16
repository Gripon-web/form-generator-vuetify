<template>
  <v-form @keydown="model.errors.clear($event.target.name)">
    <v-container>

      <field-generator :model="model" :schema="schema.fields" :errors="model.errors"/>

      <v-flex v-bind="{ [`${'xs12'}`]: true }">
        <v-btn @click="submit">submit</v-btn>
        <v-btn v-if="schema.reset" @click="clear">clear</v-btn>
      </v-flex>

    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'FormGenerator',
  $_veeValidate: {
    validator: 'new'
  },
  props: {
    model: Object,
    schema: Object
  },
  methods: {
    submit () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.$emit('on-submit', this.model)
          }
        })
    },
    clear () {
      this.model.reset()
      this.$validator.reset()
    }
  }
}
</script>
