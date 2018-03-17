import React, {PureComponent} from 'react'

class FactItem extends PureComponent {
  render() {
    const {label, value} = this.props

    return (
      <div className="fact-item">
        <p className="type--a4">{value}</p>
        <p className="type--b1">{label}</p>
      </div>
    )
  }
}

export default FactItem
