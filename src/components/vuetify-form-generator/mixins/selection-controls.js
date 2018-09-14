const selectionControlsMixin = {
  methods: {
    updateValue (e) {
      const rules = this.field.validate
      const isRequired = rules ? rules.includes('required') : false

      if (rules && isRequired) {
        if (!e) {
          this.model[this.name] = null
          this.model[this.name] = this.model.originalData[this.name]
        } else {
          this.model[this.name] = e
        }
      }
      this.$validator.validate(this.validatorIndex, this.model[this.name])
    }
  }
}

export default selectionControlsMixin
