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
        onChange={this._onChange}
        {...omit(this.props, ['attribute', 'label', 'onChange'])}
      />
    )
  }

  _onChange = (e) => {
    if (this.props.type === 'number') {
      return this.props.onChange({
        target: {value: +e.target.value}
      })
    }

    return this.props.onChange(e)
  }
}
