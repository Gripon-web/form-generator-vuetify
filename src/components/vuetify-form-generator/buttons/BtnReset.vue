<template>
  <v-btn :color="color" @click="clear">clear</v-btn>
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
    clear () {
      this.model.reset()
      this.errors.clear()
      this.$validator.reset()
    }
  }
}
</script>
