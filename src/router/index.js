import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import { examplesRoutes } from './examples'
import { fieldsRoutes } from './fields'
import { gettingStartedRoutes } from './gettingStarted'

Vue.use(Router)

const baseRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

let routes = baseRoutes.concat(examplesRoutes, fieldsRoutes, gettingStartedRoutes)

export default new Router({
  mode: 'history',
  routes: routes
})
