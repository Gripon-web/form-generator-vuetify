const fieldsMixin = {
  inject: ['$validator'],
  props: {
    errors: Object,
    name: String,
    model: Object,
    field: Object,
    veeIndex: {
      default: null
    }
  },
  computed: {
    error () {
      if (this.errors) {
        if (this.errors.get(this.name)) {
          return this.errors.get(this.name)
        }
      }
      if (this.veeErrors.has(this.name)) {
        return this.veeErrors.collect(this.name)
      }
      return []
    },
    veeAs () {
      if (this.field.errorName) {
        return this.field.errorName
      } else {
        return this.field.label
      }
    },
    validationName () {
      if (this.veeIndex) {
        return this.name + this.veeIndex
      }
      return this.name
    }
  }
}

export default fieldsMixin
