import React, {PureComponent} from 'react'
import ListingForm from './ListingForm'

export default class ListingEdit extends PureComponent {
  render() {
    return <ListingForm heading='Edit Listing' data={this.props.data} />
  }
}
