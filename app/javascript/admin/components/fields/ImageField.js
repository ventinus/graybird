import React, {PureComponent} from 'react'

//   source prop provides avenue for accessing the data items attribute value as well as type
export default class ImageField extends PureComponent {
  render() {
    return (
      <img src={this.props.content.url} width={200} />
    )
  }
}
