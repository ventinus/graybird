import React, {PureComponent} from 'react'
import {withApollo} from 'react-apollo'
import {omit} from 'lodash'
import {
  combineModifiers,
  hasPresence,
  validator,
  createClient
} from '../helpers'

class Form extends PureComponent {
  static defaultProps = {
    modifiers: [],
    style: {}
  }

  state = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    message: '',
    submitted: false,
    errors: []
  }

  _refs = {}
  _validator = null

  componentDidMount() {
    this._validator = validator(this._refs.form, {errorClass: 'form__error'})
  }

  render() {
    const { first_name, last_name, email, phone_number, message, submitted, errors } = this.state

    if (submitted) return this._success

    return (
      <form onSubmit={this._onSubmit} className={`form ${combineModifiers('form', this.props.modifiers)}`} style={this.props.style} ref={node => this._refs.form = node}>
        {errors.map((message, i) =>
          <p className="form__error" key={i}>{message}</p>
        )}
        <div className="form__field">
          <input type="text" className="form__text-input type--e2" placeholder="First Name *" value={first_name} onChange={this._onFirstNameChange} data-validate-required />
        </div>
        <div className="form__field">
          <input type="text" className="form__text-input type--e2" placeholder="Last Name *" value={last_name} onChange={this._onLastNameChange} data-validate-required />
        </div>
        <div className="form__field">
          <input type="email" className="form__text-input type--e2" placeholder="Email" value={email} onChange={this._onEmailChange} data-validate-email />
        </div>
        <div className="form__field">
          <input type="tel" className="form__text-input type--e2" placeholder="Phone" value={phone_number} onChange={this._onPhoneChange}/>
        </div>
        <div className="form__field">
          <textarea className="type--e2" rows="10" placeholder="Message" value={message} onChange={this._onMessageChange}></textarea>
        </div>
        <div className="form__field">
          {/*<div className="g-recaptcha" data-sitekey="6Ld_y04UAAAAAGswjEolS1TggtYpgSsqivz9FWiV"></div>*/}
        </div>
        <input type="submit" value="Send" className="form__field form__submit type--white type--uppercase type--c3" />
      </form>
    )
  }

  _success = (
    <div className="thanks"><p>Thank you for your inquiry</p></div>
  )

  _handleInputChange = field => e => {
    this.setState({[field]: e.target.value})
  }

  _onFirstNameChange = this._handleInputChange('first_name')
  _onLastNameChange = this._handleInputChange('last_name')
  _onEmailChange = this._handleInputChange('email')
  _onPhoneChange = this._handleInputChange('phone_number')
  _onMessageChange = this._handleInputChange('message')

  _onSubmit = (e) => {
    e.preventDefault()

    const isHuman = true
    // const isHuman = hasPresence(grecaptcha.getResponse())

    if (isHuman && this._validator.validate()) {
      this._postForm()
    } else {
      // grecaptcha.reset()
    }
  }

  _postForm = () => {
    this.props.client.mutate({
      mutation: createClient('id, errors'),
      variables: omit(this.state, ['submitted', 'errors'])
    })
      .then(this._formSuccess)
      .catch(this._formError)
  }

  _formSuccess = ({data}) => {
    const {create_client: {id, errors}} = data
    if (!id && hasPresence(errors)) {
      this.setState({errors})
    } else {
      this.setState({submitted: true})
    }
  }

  _formError = (r) => {
    console.log('some other error', r)
  }
}

export default withApollo(Form)
