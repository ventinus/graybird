import React, {PureComponent} from 'react'
import ListingForm from './ListingForm'

export default class ListingEdit extends PureComponent {
  render() {
    return <ListingForm data={this.props.data} />
  }
}
