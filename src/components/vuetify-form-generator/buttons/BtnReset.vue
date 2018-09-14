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
    schema: Object,
    color: String
  },
  computed: {
    resetValue () {
      const { buttons: { reset: { text } } } = this.schema
      // eslint-disable-next-line
      return text ? text : 'Clear'
    }
  },
  methods: {
    clear () {
      this.model.reset()
      this.model.errors.clear()
      this.$validator.reset()
    }
  }
}
</script>
