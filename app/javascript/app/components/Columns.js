import React, {PureComponent} from 'react'
import {combineModifiers} from '../helpers'

export default class Section extends PureComponent {
  static defaultProps = {
    modifiers: [],
    style: {}
  }

  constructor(props) {
    super(props)
    this._mods = combineModifiers('columns', this.props.modifiers)
  }

  render() {
    return (
      <div className={`columns ${this._mods}`} style={this.props.style} children={this.props.children} />
    )
  }
}
