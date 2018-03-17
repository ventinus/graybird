import React, {PureComponent} from 'react'
import {combineModifiers} from '../helpers'

class Section extends PureComponent {
  static defaultProps = {
    modifiers: []
  }

  render() {
    return (
      <div className={`section ${combineModifiers('section', this.props.modifiers)}`} children={this.props.children} />
    )
  }
}

export default Section
