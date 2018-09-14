<template>
  <v-btn :color="color" @click="submit" :loading="loading">submit</v-btn>
</template>

<script>
export default {
  name: 'BtnSubmit',
  inject: ['$validator'],
  props: {
    loading: Boolean,
    model: Object,
    color: String
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
