import React, {PureComponent} from 'react'
// import {Input as MdbInput} from 'mdbreact'
import * as inputs from '.'
import {hasPresence} from '../../helpers'

const inputComponents = type => {
  switch (type) {
    case 'text':
    case 'tel':
    case 'email':
    case 'number':
    case 'search':
    case 'url':
      return inputs.TextInput
    case 'select':
      return inputs.SelectInput
    case 'textarea':
      return inputs.TextAreaInput
    default:
      return inputs.TextInput
  }
}

export default class Input extends PureComponent {
  static defaultProps = {
    type: 'text'
  }

  constructor(props) {
    super(props)
    this.InputComponent = inputComponents(props.type)
    this.state = { isFocused: false }
  }

  render() {
    const {attribute, label, placeholder, type} = this.props
    const {InputComponent} = this

    return (
      <div className="md-form">
        <InputComponent
          {...this.props}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
        />
        <label htmlFor={attribute} className={this._isActive() ? 'active' : ''}>{label}</label>
      </div>
    )
  }

  _onBlur = () => this.setState({isFocused: false})
  _onFocus = () => this.setState({isFocused: true})

  _isActive = () => {
    const {placeholder, type, value} = this.props
    return type === 'select' || hasPresence(placeholder) || hasPresence(value) || this.state.isFocused
  }
}
