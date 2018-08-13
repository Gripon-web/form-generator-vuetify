<template>
  <v-container fluid>
    <v-layout column align-center>
      <h1 class="primary--text">{{msg}}</h1>
      <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
