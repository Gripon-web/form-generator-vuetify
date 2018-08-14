export const fieldsRoutes = [
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import(/* fields */ '@/views/fields/selection-controls/CheckboxDemo.vue')
  },
  {
    path: '/radio-group',
    name: 'RadioGroup',
    component: () => import(/* fields */ '@/views/fields/selection-controls/RadioGroupDemo.vue')
  },
  {
    path: '/switch',
    name: 'Switch',
    component: () => import(/* fields */ '@/views/fields/selection-controls/SwitchDemo.vue')
  },
  {
    path: '/range-slider',
    name: 'RangeSlider',
    component: () => import(/* fields */ '@/views/fields/slider/RangeSliderDemo.vue')
  },
  {
    path: '/slider',
    name: 'Slider',
    component: () => import(/* fields */ '@/views/fields/slider/SliderDemo.vue')
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import(/* fields */ '@/views/fields/SelectDemo.vue')
  },
  {
    path: '/text-area',
    name: 'TextArea',
    component: () => import(/* fields */ '@/views/fields/TextAreaDemo.vue')
  },
  {
    path: '/text-field',
    name: 'TextField',
    component: () => import(/* fields */ '@/views/fields/TextFieldDemo.vue')
  }
]
