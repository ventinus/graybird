import React, {PureComponent} from 'react'
import {combineModifiers} from '../helpers'

class Hr extends PureComponent {
  static defaultProps = {
    modifiers: []
  }

  render() {
    return (<div className={`hr ${combineModifiers('hr', this.props.modifiers)}`} />)
  }
}

export default Hr
