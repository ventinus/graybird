import React, {PureComponent} from 'react'
import {combineModifiers} from '../helpers'

export default class Section extends PureComponent {
  static defaultProps = {
    modifiers: [],
    style: {}
  }

  render() {
    return (
      <div className={`columns ${combineModifiers('columns', this.props.modifiers)}`} style={this.props.style} children={this.props.children} />
    )
  }
}
