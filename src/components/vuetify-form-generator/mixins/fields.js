const fieldsMixin = {
  inject: ['$validator'],
  computed: {
    error () {
      if (this.errors) {
        if (this.errors.get(this.name)) {
          return this.errors.get(this.name)
        }
      }
      if (this.veeErrors.has(this.validatorIndex)) {
        return this.veeErrors.collect(this.validatorIndex)
      }
      return []
    },
    messageFieldName () {
      return this.field.errorName ? this.field.errorName : this.field.label
    },
    validatorIndex () {
      return this.veeIndex !== null ? this.name + this.veeIndex : this.name
    }
  }
}

export default fieldsMixin
