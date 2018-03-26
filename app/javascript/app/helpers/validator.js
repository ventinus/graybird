import {forEach, template} from 'lodash'
import {hasPresence} from '.'
import {htmlToElement} from 'savnac'

// TODOS:
// add transitions for appending/removing error messages
// handle all input types with reading value correctly
// ability to combine validations (may not need additional setup)
// if field fails multiple validations, show only one
//  - maybe allow for customizable error hierarchy? ehhh...
// http://parsleyjs.org/doc/index.html#validators

const DEFAULT_OPTS = {
  requiredMessage: 'This field is required',
  emailMessage: 'Not a valid email format',
  errorMarkup: '<p><%- message %></p>',
  errorClass: ''
}

const validator = (form, opts = {}) => {

  const attributes = {
    required: {
      selector: '[data-validate-required]',
      message: optsOrDefault('requiredMessage'),
      method: required
    },
    email: {
      selector: '[data-validate-email]',
      message: optsOrDefault('emailMessage'),
      method: emailFormat
    }
  }

  const props = {
    errorTemplate: template(optsOrDefault('errorMarkup')),
    errorClass: optsOrDefault('errorClass')
  }

  function optsOrDefault(key) {
    return opts[key] || DEFAULT_OPTS[key]
  }

  const validate = () => {
    resetMessages()
    return runValidation()
  }

  const runValidation = () => {
    const {required, email} = attributes
    let isValid = true

    Object.values(attributes).forEach(({selector, message, method}) => {
      const fields = form.querySelectorAll(selector)
      forEach(fields, field => {
        const valid = method(field.value)

        if (!valid) {
          isValid = isValid ? valid : isValid
          const m = field.dataset.validateMessage || message
          const markup = htmlToElement(props.errorTemplate({message: m}))
          markup.classList.add('js-validate-error')
          markup.classList.add(props.errorClass)
          field.parentElement.appendChild(markup)
        }
      })
    })

    return isValid
  }

  const resetMessages = () => {
    forEach(form.querySelectorAll('.js-validate-error'), el => {
      el.parentElement.removeChild(el)
    })
  }

  // Validation Checks

  function required(value) {
    return hasPresence(value)
  }

  function emailFormat(email) {
    if (!hasPresence(email)) return true
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  return {
    validate
  }
}

export default validator
