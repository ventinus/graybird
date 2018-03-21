import React, {PureComponent} from 'react'
import {graphql} from 'react-apollo'
import {combineModifiers, hasPresence} from '../helpers'

class Form extends PureComponent {
  static defaultProps = {
    modifiers: []
  }

  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
    style: {}
  }

  _requiredFields = ['name']

  render() {
    const { name, email, phone, message } = this.state

    return (
      <form onSubmit={this._onSubmit} className={`form ${combineModifiers('form', this.props.modifiers)}`} style={this.props.style}>
        <div className="form__field">
          <input type="text" className="form__text-input type--e2" placeholder="Name" value={name} onChange={this._onNameChange}/>
        </div>
        <div className="form__field">
          <input type="email" className="form__text-input type--e2" placeholder="Email" value={email} onChange={this._onEmailChange}/>
        </div>
        <div className="form__field">
          <input type="text" className="form__text-input type--e2" placeholder="Phone" value={phone} onChange={this._onPhoneChange}/>
        </div>
        <div className="form__field">
          <textarea className="type--e2" rows="10" placeholder="Message" value={message} onChange={this._onMessageChange}></textarea>
        </div>
        <div className="form__field">
          <div className="g-recaptcha" data-sitekey="6LdPdE0UAAAAAK92LI4ARfyliXh5lZVbkwpZS0CJ"></div>
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

    let isValid = hasPresence(grecaptcha.getResponse())

    this._requiredFields.reduce((a, c) => !a ? a : c, isValid)

    if (!isValid) {
      grecaptcha.reset()
      // TODO: show errors
    } else {
      // TODO: post fields
      console.log('success!')
    }

  }
}

export default Form
