export const examplesRoutes = [
  {
    path: '/basic-example',
    name: 'BasicExample',
    component: () => import(/* webpackChunkName: "about" */ '@/views/examples/BasicExample.vue')
  }
]
