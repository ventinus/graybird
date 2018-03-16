import React, { PureComponent } from 'react'

class ListingsShow extends PureComponent {
  render() {
    console.log(this.props.match.params.address)
    return (
      <div>
        <h1>listings show</h1>
      </div>
    )
  }
}

export default ListingsShow
