import React, {PureComponent} from 'react'

export default class SelectInput extends PureComponent {
  render() {
    const {attribute, options, includeBlank, onChange, value} = this.props
    return (
      <select name={attribute} id={attribute} className="browser-default" value={value} onChange={onChange}>
        {includeBlank && <option value="" disabled>Choose {attribute}</option>}
        {options.map(([name, value]) => <option value={value} key={value}>{name}</option>)}
      </select>
    )
  }
}
