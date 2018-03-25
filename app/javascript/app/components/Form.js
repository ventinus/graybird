import React, {PureComponent} from 'react'
import {graphql} from 'react-apollo'
import {combineModifiers, hasPresence, validator} from '../helpers'

class Form extends PureComponent {
  static defaultProps = {
    modifiers: [],
    style: {}
  }

  state = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }

  _refs = {}
  _validator = null

  componentDidMount() {
    this._validator = validator(this._refs.form)
  }

  render() {
    const { name, email, phone, message } = this.state

    return (
      <form onSubmit={this._onSubmit} className={`form ${combineModifiers('form', this.props.modifiers)}`} style={this.props.style} ref={node => this._refs.form = node}>
        <div className="form__field">
          <input type="text" className="form__text-input type--e2" placeholder="Name" value={name} onChange={this._onNameChange} data-validate-required />
        </div>
        <div className="form__field">
          <input type="email" className="form__text-input type--e2" placeholder="Email" value={email} onChange={this._onEmailChange} data-validate-email />
        </div>
        <div className="form__field">
          <input type="tel" className="form__text-input type--e2" placeholder="Phone" value={phone} onChange={this._onPhoneChange}/>
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

  _handleInputChange = field => e => {
    this.setState({[field]: e.target.value})
  }

  _onNameChange = this._handleInputChange('name')
  _onEmailChange = this._handleInputChange('email')
  _onPhoneChange = this._handleInputChange('phone')
  _onMessageChange = this._handleInputChange('message')

  _onSubmit = (e) => {
    e.preventDefault()

    const isHuman = hasPresence(grecaptcha.getResponse())

    if (isHuman && this._validator.validate()) {
    if (this._validator.validate()) {
      // TODO: post fields
      console.log('success!')
    } else {
      console.log('error')
      grecaptcha.reset()
    }

  }
}

export default Form
