import { Api } from '@/api.config'
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
   * Submit the form.
   *
   * @param {string} requestType
   * @param {string} url
   */
  async submit (apiData) {
    return new Promise((resolve, reject) => {
      Api(apiData)
        .then(response => {
          this.onSuccess(response)

          resolve(response)
        })
        .catch(errors => {
          this.onFail(errors)

          reject(errors)
        })
    })
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
