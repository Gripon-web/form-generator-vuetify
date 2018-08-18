// import { Api } from '@/_config/axios'
import { FormErrors } from './error'

export class FormModel {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  constructor (data) {
    this.originalData = data

    for (let field in data) {
      this[field] = data[field]
    }

    this.errors = new FormErrors()
  }

  /**
   * Fetch all relevant data for the form.
   */
  data () {
    let data = {}
    for (let property in this.originalData) {
      data[property] = this[property]
    }

    return data
  }

  /**
   * Reset the form fields.
   */
  reset () {
    for (let field in this.originalData) {
      // this[field] = ''
      this[field] = this.originalData[field]
    }
  }

  /**
   * Send a POST request to the given URL.
   * .
   * @param {string} url
   */
  post (url, useFormData = false) {
    return this.submit('post', url, useFormData)
  }

  /**
   * Send a PUT request to the given URL.
   * .
   * @param {string} url
   */
  put (url, useFormData = false) {
    return this.submit('put', url, useFormData)
  }

  /**
   * Send a PATCH request to the given URL.
   * .
   * @param {string} url
   */
  patch (url, useFormData = false) {
    return this.submit('patch', url, useFormData)
  }

  /**
   * Send a DELETE request to the given URL.
   * .
   * @param {string} url
   */
  delete (url) {
    return this.submit('delete', url)
  }

  // setFormData (requestType) {
  //   let formData = new FormData()
  //   if (requestType === ('put' || 'patch')) {
  //     formData.append('_method', requestType)
  //   }
  //   Object.keys(this.data())
  //     .forEach(key => {
  //       const dataKey = this.data()[key]
  //       if (typeof dataKey === 'object') {
  //         if (dataKey instanceof File) {
  //           formData.append(key, dataKey)
  //         } else {
  //           const toString = JSON.stringify(dataKey)
  //           formData.append(key, toString)
  //         }
  //       } else {
  //         formData.append(key, this.data()[key])
  //       }
  //     })
  //   return formData
  // }

  /**
   * Submit the form.
   *
   * @param {string} requestType
   * @param {string} url
   */
  submit (requestType, url, useFormData) {
    return this.data()

    // let formData = this.data()
    // if (useFormData) {
    //   formData = this.setFormData(requestType)
    //   requestType = 'post'
    // }
    // console.log(formData)
    // return new Promise((resolve, reject) => {
    //   resolve(console.log(formData))
    //     Api[requestType](url, formData)
    //       .then(response => {
    //         this.onSuccess(response.data)

    //         resolve(response.data)
    //       })
    //       .catch(error => {
    //         this.onFail(error.response.data.invalid_fields)

    //         reject(error.response.data)
    //       })
    // })
  }

  /**
   * Handle a successful form submission.
   *
   * @param {object} data
   */
  onSuccess (data) {
    this.errors.clear()
  }
  /**
   * Handle a failed form submission.
   *
   * @param {object} errors
   */
  onFail (errors) {
    if (errors) {
      this.errors.record(errors)
    }
  }
}
