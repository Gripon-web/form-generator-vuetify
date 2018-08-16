<template>
  <v-layout row wrap>
    <v-flex v-bind="{ [`${field.responsive ? field.responsive : 'xs12'}`]: true }">
      <div :class="field.class" v-if="field.title">
          {{field.title}}
      </div>
      <field-generator :model="model[name]" :schema="field.fields" :errors="errors" :veeIndex="collectionVeeIndex"/>
    </v-flex>
  </v-layout>
</template>

<script>
import { propsMixin } from '../../mixins'
export default {
  name: 'CollectionGenerator',
  mixins: [propsMixin],
  computed: {
    collectionVeeIndex () {
      const index = 'collection'
      return this.veeIndex !== null ? this.veeIndex + index : index
    }
  }
}
</script>
