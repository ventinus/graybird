import React, {PureComponent} from 'react'
import {omit} from 'lodash'

export default class TextAreaInput extends PureComponent {
  render() {
    const {attribute} = this.props

    return (
      <textarea
        id={attribute}
        className="md-textarea form-control"
        {...omit(this.props, ['attribute', 'label'])}
      />
    )
  }
}
