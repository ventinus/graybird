import React, {PureComponent} from 'react'
import {combineModifiers} from '../helpers'

class Section extends PureComponent {
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

export default Section
