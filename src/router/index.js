import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import { examplesRoutes } from './examples'
import { fieldsRoutes } from './fields'

Vue.use(Router)

const baseRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

let routes = baseRoutes.concat(examplesRoutes, fieldsRoutes)

export default new Router({
  mode: 'history',
  routes: routes
})
