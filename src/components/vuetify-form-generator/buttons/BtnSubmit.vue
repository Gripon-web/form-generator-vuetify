<template>
  <v-btn :color="color" @click="submit" :loading="loading">{{submitValue}}</v-btn>
</template>

<script>
export default {
  name: 'BtnSubmit',
  inject: ['$validator'],
  props: {
    loading: Boolean,
    color: String,
    schema: String
  },
  computed: {
    submitValue () {
      const { buttons: { submit: { text } } } = this.schema
      // eslint-disable-next-line
      return text ? text : 'Submit'
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.$emit('btn-submit')
          }
        })
    }
  }
}
</script>
