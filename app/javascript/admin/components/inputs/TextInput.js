import React, {PureComponent} from 'react'
import {omit} from 'lodash'

export default class TextInput extends PureComponent {
  static defaultProps = {
    value: ''
  }

  render() {
    const {attribute} = this.props

    return (
      <input
        id={attribute}
        className="form-control"
        {...omit(this.props, ['attribute', 'label'])}
      />
    )
  }
}
