<template>
  <v-app>
    <v-navigation-drawer app fixed>
      <v-toolbar flat>
        <v-list>
          <v-list-tile router :to="{name: 'Home'}">
            <v-list-tile-avatar>
              <img src="@/assets/logo.png" alt="Vuetify.js">
            </v-list-tile-avatar>
            <v-list-tile-title class="title">
              Vuetify Form Generator
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-group v-for="(drawer, i) in drawers" :key="i"
          v-model="drawer.active"
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ drawer.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-for="(child, i) in drawer.childs"
            :key="i"
            router :to="{name: child.router}"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ child.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>

    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawers: [
        // {
        //   title: 'Getting Started',
        //   active: true,
        //   childs: [
        //     {title: 'installation', router: 'Installation'}
        //   ]
        // },
        {
          title: 'fields',
          childs: [
            // Collection
            { title: 'Collection', router: 'Collection' },
            { title: 'CollectionGroup', router: 'CollectionGroup' },
            // Optional
            { title: 'Optional', router: 'Optional' },
            { title: 'Optional group', router: 'OptionalGroup' },
            // Picker
            { title: 'Date picker', router: 'DatePicker' },
            { title: 'Menu Date picker', router: 'MenuDatePicker' },
            { title: 'Menu Time picker', router: 'MenuTimePicker' },
            { title: 'Time picker', router: 'TimePicker' },
            // Selection controls
            { title: 'Checkbox', router: 'Checkbox' },
            { title: 'Radio group', router: 'RadioGroup' },
            { title: 'Switch', router: 'Switch' },
            // Slider
            { title: 'Range slider', router: 'RangeSlider' },
            { title: 'Slider', router: 'Slider' },
            // Fields
            { title: 'File upload', router: 'FileUpload' },
            { title: 'Select', router: 'Select' },
            { title: 'Textarea', router: 'TextArea' },
            { title: 'TextField', router: 'TextField' }
          ]
        },
        {
          title: 'Example',
          childs: [
            { title: 'Basic example', router: 'BasicExample' },
            { title: 'Card example', router: 'CardExample' }
          ]
        }
      ],
      fixed: true
    }
  }
}
</script>
