<template>
  <div>
    <switch-generator
      :name="name" :model="optional" :field="field.activator" isActivator
    ></switch-generator>

    <!-- <transition-cmp> -->
      <field-generator v-if="optional"
        :schema="field.fields"
        :model="model[name]"
        :errors="errors"
        :veeIndex="optionalVeeIndex"
      ></field-generator>
    <!-- </transition-cmp> -->
  </div>
</template>

<script>
import { propsMixin } from '../../mixins'
import SwitchGenerator from '../selection-controls/SwitchGenerator'
export default {
  name: 'OptionalGroupGenerator',
  mixins: [propsMixin],
  components: { SwitchGenerator },
  created () {
    this.keys = Object.keys(this.field.fields)
  },
  data () {
    return {
      keys: null
    }
  },
  methods: {
    optionalVeeIndex () {
      const index = 'optional'
      return this.veeIndex !== null ? this.veeIndex + index : index
    },
    setOptional () {
      this.model[this.name] = this.model.originalData[this.name]
      this.keys.forEach(key => {
        this.model[this.name][key] = this.model.originalData[this.name][key]
      })
    },
    removeOptional () {
      this.keys.forEach(key => {
        delete this.model[this.name]
      })
    }
  },
  computed: {
    optional () {
      return this.field.activator.state
    }
  },
  watch: {
    optional () {
      if (this.optional) {
        this.setOptional()
      } else {
        this.removeOptional()
      }
    }
  }
}
</script>
