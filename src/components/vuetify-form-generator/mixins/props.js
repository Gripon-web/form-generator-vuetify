const propsMixin = {
  inject: ['$validator'],
  props: {
    errors: Object,
    field: Object,
    model: Object,
    name: String,
    veeIndex: {
      default: null
    }
  }
}

export default propsMixin
