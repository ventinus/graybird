import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import {omit} from 'lodash'
import FontAwesome from 'react-fontawesome'
import {combineModifiers, hasPresence} from '../helpers'

class Icon extends PureComponent {
  static defaultProps = {
    modifiers: [],
    href: ''
  }

  constructor(props) {
    super(props)
    this._merged = Object.assign({
      // size: '2x'
    }, omit(props, ['modifiers', 'href']))
    this._modifiers = combineModifiers('fa', props.modifiers)
  }

  render() {
    if (hasPresence(this.props.href)) {
      if (this.props.href.charAt(0) === '/') {
        return (
          <Link to={this.props.href} className={`fa--link ${this._modifiers}`}>{this._icon()}</Link>
        )
      } else {
        return (
          <a href={this.props.href} className={`fa--link ${this._modifiers}`} target="_blank">{this._icon()}</a>
        )
      }
    } else {
      return (this._icon(this._modifiers))
    }
  }

  _icon = (mods) => <FontAwesome className={mods} {...this._merged} />
}

export const Facebook = (props) => (<Icon name="facebook-f" {...props} />)
export const LinkedIn = (props) => (<Icon name="linkedin" {...props} />)
export const Pinterest = (props) => (<Icon name="pinterest-p" {...props} />)
export const Instagram = (props) => (<Icon name="instagram" {...props} />)
export const ArrowLeft = (props) => (<Icon name="chevron-left" {...props} />)
export const ArrowRight = (props) => (<Icon name="chevron-right" {...props} />)
