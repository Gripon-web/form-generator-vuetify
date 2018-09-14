<template>
  <v-layout row>
    <v-flex xs12>
      <v-card color="transparent" class="text-xs-center elevation-0">
        <v-card-media height="200px" class="dashed" style="padding:0">
          <img :src="fileUrl">
        </v-card-media>
        <v-card-actions style="padding-left:0;padding-right:0">
          <v-btn block :class="field.classBtn" @click="onPickFile" style="margin-right:0;margin-left:0">{{field.label}}</v-btn>
          <input type="file" style="display:none" ref="fieldField"
            :accept="field.accept"
            :required="field.required"
            @change="onFilePicked($event)"
            @input="$validator.validate(validatorIndex, model[name])"
            @blur="$validator.validate(validatorIndex, model[name])"
            :data-vv-name="validatorIndex" v-validate="field.validate"
            :data-vv-as="field.label"
            @keydown="errors.clear($event.target.name)"
          >
        </v-card-actions>
        <v-card-title primary-title style="padding-top:0">
          <div v-if="error.length>0">
            <span class="red--text">{{error[0]}}</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { fieldsMixin, propsMixin } from '../mixins'
export default {
  name: 'FileUploadCmp',
  mixins: [fieldsMixin, propsMixin],
  watch: {
    fileExist () {
      if (this.fileExist) {
        this.fileUrl = this.fileExist
        this.file = this.fileExist
      }
    }
  },
  created () {
    this.file = this.model[this.name]
    this.fileUrl = this.model[this.name]
  },
  data () {
    return {
      fileUrl: '',
      file: null
    }
  },
  computed: {
    preview () {
      return this.field.preview
    },
    fileExist () {
      return this.model[this.name]
    }
  },
  methods: {
    onPickFile (e) {
      this.$refs.fieldField.click()
      this.$validator.validate(this.validationName, this.model[this.name])
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file !')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.fileUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.file = files[0]

      this.model[this.name] = this.file
      this.$validator.validate(this.validationName, this.model[this.name])
    }
  }
}
</script>

<style>
  .dashed {
    border: 4px dashed grey;
    padding: 40px;
  }
</style>
