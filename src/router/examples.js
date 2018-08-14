export const examplesRoutes = [
  {
    path: '/basic-example',
    name: 'BasicExample',
    component: () => import(/* examples */ '@/views/examples/BasicExample.vue')
  },
  {
    path: '/card-example',
    name: 'CardExample',
    component: () => import(/* examples */ '@/views/examples/CardExample.vue')
  }
]
