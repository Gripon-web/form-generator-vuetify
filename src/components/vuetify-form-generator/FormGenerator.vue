<template>
  <v-form>
    <v-container fluid grid-list-lg>

      <!-- Basic builder start -->
      <v-layout row wrap v-if="formType=== 'basic'">
        <v-flex v-bind="{ [`${schema.responsive ? schema.responsive : 'xs12' }`]: true }">
          <field-generator :model="model" :schema="schema.fields" :errors="model.errors"/>
          <slot name="extra-slot"></slot>
        </v-flex>

        <v-flex v-bind="{ [`${'xs12'}`]: true }">
          <btn-reset v-if="schema.reset" :loading="loading" :model="model" color="warning"/>
          <btn-submit :loading="loading" :model="model" color="success" @btn-submit="submit"/>
        </v-flex>
      </v-layout>
      <!-- Basic builder end -->

      <!-- Card builder start -->
      <v-layout row wrap v-else-if="formType=== 'card'">
        <v-flex v-bind="{ [`${card.responsive ? card.responsive : 'xs12'}`]: true }" v-for="(card, i) in schema.cards" :key="i">
          <v-card :class="card.class" v-bind="{ [`${card.theme}`]: true }">
            <v-toolbar class="primary" dark v-if="card.title">
              <v-toolbar-title>{{card.title.title}}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <slot :name="card.slot" v-if="card.slot"></slot>
              <field-generator :model="model" :schema="card.fields" :errors="model.errors"/>
              <slot name="extra-slot"></slot>
            </v-card-text>
            <v-card-actions v-if="i === schema.cards.length-1">
              <v-spacer></v-spacer>
              <btn-reset v-if="schema.reset" :loading="loading" :model="model" color="warning"/>
              <btn-submit :loading="loading" :model="model" color="success" @btn-submit="submit"/>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- Card builder end -->

      <pre>
        {{model}}
      </pre>

    </v-container>
  </v-form>
</template>

<script>
import BtnSubmit from './buttons/BtnSubmit'
import BtnReset from './buttons/BtnReset'
export default {
  name: 'FormGenerator',
  components: { BtnSubmit, BtnReset },
  $_veeValidate: {
    validator: 'new'
  },
  props: {
    item: Object,
    model: Object,
    schema: Object,
    loading: Boolean
  },
  computed: {
    formType () {
      if (this.schema.type) {
        return this.schema.type
      }
      return 'basic'
    }
  },
  methods: {
    submit () {
      this.$emit('on-submit', this.model.data())
    }
  },
  watch: {
    item () {
      if (this.item != null) {
        Object.assign(this.model, this.item)
      }
    }
  }
}
</script>
