/**
 * Form Errors
 * Gestion des erreurs d'un input
 */
export class FormErrors {
  /**
   * Create a new Errors instance.
   */
  constructor () {
    this.errors = {}
  }

  /**
   * Retrieve the error message for a field.
   *
   * @param {string} field
   */
  get (field) {
    if (this.errors[field]) {
      return this.errors[field]
    }
  }

  /**
   * Determine if we have any errors.
   */
  any () {
    return Object.keys(this.errors).length > 0
  }

  /**
   * Clear one or all error fields.
   *
   * @param {string|null} field
   */
  clear (field) {
    if (field) {
      delete this.errors[field]
    } else {
      this.errors = {}
    }
  }

  /**
   * Record the new errors.
   *
   * @param {object} errors
   */
  record (errors) {
    let recordErrors = {}
    for (let error of errors) {
      const { field, message } = error
      recordErrors[field] = message
    }
    this.errors = recordErrors
  }
}
