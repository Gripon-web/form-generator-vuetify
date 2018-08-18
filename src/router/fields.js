export const fieldsRoutes = [
  {
    path: '/collection',
    name: 'Collection',
    component: () => import(/* fields collection */ '@/views/fields/collection/CollectionDemo.vue')
  },
  {
    path: '/collection-group',
    name: 'CollectionGroup',
    component: () => import(/* fields collection */ '@/views/fields/collection/CollectionGroupDemo.vue')
  },
  {
    path: '/optional',
    name: 'Optional',
    component: () => import(/* fields optional */ '@/views/fields/optional/OptionalDemo.vue')
  },
  {
    path: '/optional-group',
    name: 'OptionalGroup',
    component: () => import(/* fields optional */ '@/views/fields/optional/OptionalGroupDemo.vue')
  },
  {
    path: '/date-picker',
    name: 'DatePicker',
    component: () => import(/* fields picker */ '@/views/fields/picker/DatePickerDemo.vue')
  },
  {
    path: '/time-picker',
    name: 'TimePicker',
    component: () => import(/* fields picker */ '@/views/fields/picker/TimePickerDemo.vue')
  },
  {
    path: '/menu-date-picker',
    name: 'MenuDatePicker',
    component: () => import(/* fields picker */ '@/views/fields/picker/MenuDatePickerDemo.vue')
  },
  {
    path: '/menu-time-picker',
    name: 'MenuTimePicker',
    component: () => import(/* fields picker */ '@/views/fields/picker/MenuTimePickerDemo.vue')
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import(/* fields selection-controls */ '@/views/fields/selection-controls/CheckboxDemo.vue')
  },
  {
    path: '/radio-group',
    name: 'RadioGroup',
    component: () => import(/* fields selection-controls */ '@/views/fields/selection-controls/RadioGroupDemo.vue')
  },
  {
    path: '/switch',
    name: 'Switch',
    component: () => import(/* fields selection-controls */ '@/views/fields/selection-controls/SwitchDemo.vue')
  },
  {
    path: '/range-slider',
    name: 'RangeSlider',
    component: () => import(/* fields slider */ '@/views/fields/slider/RangeSliderDemo.vue')
  },
  {
    path: '/slider',
    name: 'Slider',
    component: () => import(/* fields slider */ '@/views/fields/slider/SliderDemo.vue')
  },
  {
    path: '/file-upload',
    name: 'FileUpload',
    component: () => import(/* fields */ '@/views/fields/FileUploadDemo.vue')
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
