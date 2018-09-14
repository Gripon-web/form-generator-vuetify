<template>
  <div>
    <switch-generator
      :name="name" :model="optional" :field="field.activator" isActivator
    ></switch-generator>
{{optional}}
    <!-- <transition-cmp> -->
      <field-generator v-if="optional"
        :schema="field.fields"
        :model="model"
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
  name: 'OptionalGenerator',
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
    setOptional () {
      this.keys.forEach(key => {
        this.model[key] = this.model.originalData[key]
      })
    },
    removeOptional () {
      this.keys.forEach(key => {
        delete this.model[key]
      })
    }
  },
  computed: {
    optionalVeeIndex () {
      const index = 'optional'
      return this.veeIndex !== null ? this.veeIndex + index : index
    },
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
