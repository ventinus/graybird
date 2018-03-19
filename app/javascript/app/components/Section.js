import React, {PureComponent} from 'react'
import {combineModifiers} from '../helpers'

class Section extends PureComponent {
  static defaultProps = {
    modifiers: [],
    id: '',
    className: ''
  }

  render() {
    const {id, className, modifiers, children} = this.props
    return (
      <div id={id} className={`section ${combineModifiers('section', modifiers)} ${className}`} children={children} />
    )
  }
}

export default Section
