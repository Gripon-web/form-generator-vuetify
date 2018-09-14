<template>
  <v-radio
    :color="field.color"
    :dark="field.dark"
    :disabled="field.disabled"
    :label="field.label"
    :light="field.light"
    :off-icon="field.offIcon"
    :on-icon="field.onIcon"
    :readonly="field.readonly"
    :ripple="field.ripple"
    :value="field.value"
    @keydown="errors.clear($event.target.name)"
  />
</template>

<script>
export default {
  name: 'RadioGenerator',
  props: {
    field: Object
  }
}
</script>
