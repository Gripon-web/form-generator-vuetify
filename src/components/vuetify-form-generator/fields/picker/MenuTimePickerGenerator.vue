<template>
  <v-menu
    :absolute="fieldMenu.absolute"
    :allow-overflow="fieldMenu.allowOverflow"
    :attach="fieldMenu.attach"
    :auto="fieldMenu.auto"
    :bottom="fieldMenu.bottom"
    :close-delay="fieldMenu.closeDelay"
    :close-on-click="fieldMenu.closeOnClick"
    :content-class="fieldMenu.contentClass"
    :dark="fieldMenu.dark"
    :disabled="fieldMenu.disabled"
    :fixed="fieldMenu.fixed"
    :input-activator="fieldMenu.inputActivator"
    :lazy="fieldMenu.lazy"
    :left="fieldMenu.left"
    :light="fieldMenu.light"
    :max-height="fieldMenu.maxHeight"
    :max-width="fieldMenu.maxWidth"
    :min-width="fieldMenu.minWidth"
    :nudge-bottom="fieldMenu.nudgeBottom"
    :nudge-left="fieldMenu.nudgeLeft"
    :nudge-right="fieldMenu.nudgeRight"
    :nudge-top="fieldMenu.nudgeTop"
    :nudge-width="fieldMenu.nudgeWidth"
    :offset-overflow="fieldMenu.offsetOverflow"
    :offset-x="fieldMenu.offsetX"
    :open-delay="fieldMenu.openDelay"
    :open-on-click="fieldMenu.openOnClick"
    :open-on-hover="fieldMenu.openOnHover"
    :origin="fieldMenu.origin"
    :position-x="fieldMenu.positionX"
    :position-y="fieldMenu.positionY"
    :right="fieldMenu.right"
    :top="fieldMenu.top"
    :transition="fieldMenu.transition"
    :value="fieldMenu.value"
    :z-index="fieldMenu.zIndex"

    ref="menu"
    v-model="menu"
    full-width
    offset-y
    :return-value.sync="model[name]"
    :close-on-content-click=false
  >

    <text-field-generator slot="activator" :name="name" :model="model" :field="field"/>

    <time-picker-generator
      menu
      :name="name"
      :field="field"
      :model="model"
      :errors="errors"
    >
      <template slot="menu">
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="menu = false">Annuler</v-btn>
        <v-btn flat color="primary" @click="$refs.menu.save(model[name])">Valider</v-btn>
      </template>
    </time-picker-generator>
  </v-menu>
</template>

<script>
import TimePickerGenerator from './TimePickerGenerator'
import TextFieldGenerator from '../TextFieldGenerator'
import { fieldsMixin, propsMixin } from '../../mixins'

export default {
  name: 'MenuTimePickerGenerator',
  mixins: [fieldsMixin, propsMixin],
  components: { TextFieldGenerator, TimePickerGenerator },
  data () {
    return {
      menu: false
    }
  },
  computed: {
    fieldMenu () {
      let menu = {
        maxWidth: '290px',
        minWidth: '290px',
        lazy: true,
        nudgeRight: 40,
        transition: 'scale-transition'
      }
      return this.field.menu ? this.field.menu : menu
    }
  }
}
</script>
