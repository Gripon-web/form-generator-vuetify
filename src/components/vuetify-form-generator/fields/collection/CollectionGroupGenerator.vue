<template>
  <v-layout row wrap>
    <v-flex v-bind="{ [`${field.responsive ? field.responsive : 'xs12'}`]: true}">
      <v-flex xs12 mb-2 :class="field.class" v-if="field.title">
        {{field.title}}
      </v-flex>

      <v-flex xs12>
        <!-- <transition-cmp :group=true> -->
          <v-layout row wrap v-for="(item, index) in model[name]" :key="index">
            <v-flex xs10 :class="field.classTitleFields">
              {{field.titleFields}} {{index+1}}
            </v-flex>
            <v-flex xs2 @click="removeCollectionGroup(index)" class="error--text text-xs-right" style="float:right;cursor:pointer"
              v-if="index != 0 && field.required === true || !field.required"
            >
              Remove
            </v-flex>

            <v-flex xs12>
              <field-generator
                :model="model[name][index]"
                :schema="field.fields"
                :errors="errors"
                :veeIndex="collectionGroupVeeIndex(index)"
              />
            </v-flex>
          </v-layout>
        <!-- </transition-cmp> -->
      </v-flex>

      <v-flex xs12>
        <v-btn color="info" @click="addCollectionGroup">
          Add {{field.titleFields}}
        </v-btn>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import { propsMixin } from '../../mixins'
export default {
  name: 'CollectionGroupGenerator',
  mixins: [propsMixin],
  created () {
    this.keys = Object.keys(this.field.fields)
  },
  data () {
    return {
      keys: null
    }
  },
  methods: {
    collectionGroupVeeIndex (i) {
      const index = `collection-group-${i}`
      return this.veeIndex !== null ? this.veeIndex + index : index
    },
    addCollectionGroup () {
      let newRaw = {}
      this.keys.forEach(key => {
        newRaw[key] = ''
      })
      this.model[this.name].push(newRaw)
    },
    removeCollectionGroup (index) {
      this.model[this.name].splice(index, 1)
    }
  }
}
</script>
