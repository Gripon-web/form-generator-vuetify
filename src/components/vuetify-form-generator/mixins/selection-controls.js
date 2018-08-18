const selectionControlsMixin = {
  methods: {
    updateValue (e) {
      // this.model[this.name] = e === false && this.field.validate.includes('required') ? this.model.originalData[this.name] : this.model[this.name] = e
      this.model[this.name] = e === false && this.field.validate.includes('required') ? null : this.model[this.name] = e
      this.$validator.validate(this.validatorIndex, this.model[this.name])
    }
  }
}

export default selectionControlsMixin
