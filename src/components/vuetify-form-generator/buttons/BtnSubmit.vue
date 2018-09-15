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
    schema: Object
  },
  computed: {
    submitValue () {
      if (this.schema && this.schema.buttons.submit) {
        const { text } = this.schema.buttons.submit
        return text
      }
      return 'Submit'
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
