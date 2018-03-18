import React, {PureComponent} from 'react'

class HeadingBlock extends PureComponent {
  render() {
    return (
      <div className="heading-block">
        <h3 className="type--c3 type--uppercase">{this.props.hdg}</h3>
        <div className="heading-block__body">{this.props.children}</div>
      </div>
    )
  }
}

export default HeadingBlock
