import React, {PureComponent} from 'react'
import Velocity from 'velocity-animate'

import {friendlyValue, hasPresence} from '../../helpers'

export default class SelectInput extends PureComponent {
  static defaultProps = {
    includeBlank: false,
    placeholder: 'Choose your option'
  }

  _refs = {}

  render() {
    const {attribute, options, placeholder, includeBlank, onChange, value} = this.props

    return (
      <div>
        <div className="select-wrapper mdb-select">
          <span className="caret">▼</span>
          <input
            type="text"
            className="select-dropdown"
            readOnly={true}
            value={friendlyValue(value)}
            placeholder={placeholder}
            onFocus={this._focus}
            onBlur={this._blur}
          />
          <ul
            className="dropdown-content select-dropdown"
            ref={node => this._refs.ul = node}
          >
            {includeBlank && <li className="disabled"><span>{placeholder}</span></li>}
            {options.map(([name, val], i) =>
              <li className={val === value ? 'active' : ''} key={i} onClick={this._setValue(val)}><span>{name}</span></li>
            )}
          </ul>
          <select className="mdb-select initialized" value={value} id={attribute} name={attribute} readOnly={true}>
            {includeBlank && <option value="" disabled>{placeholder}</option>}
            {options.map(([name, value], i) => <option value={value} key={i}>{name}</option>)}
          </select>
        </div>
      </div>
    )
  }

  _toggleUl = reveal => {
    const action = reveal ? 'slideDown' : 'slideUp'
    Velocity(this._refs.ul, action, { duration: 250 })
  }

  _focus = () => this._toggleUl(true)
  _blur = () => this._toggleUl(false)

  _setValue = value => () => {
    if (value === this.props.value) return

    this.props.onChange({
      target: {value}
    })
  }

}
