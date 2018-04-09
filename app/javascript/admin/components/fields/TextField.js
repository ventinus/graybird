import React, {PureComponent} from 'react'
import {friendlyValue} from '../../helpers'

export default class TextField extends PureComponent {
  render() {
    return (
      <p className="text-field">{friendlyValue(this.props.content)}</p>
    )
  }
}
