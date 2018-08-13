import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import { examplesRoutes } from './examples'

Vue.use(Router)

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const routes = baseRoutes.concat(examplesRoutes)

export default new Router({
  mode: 'history',
  routes: routes
})
