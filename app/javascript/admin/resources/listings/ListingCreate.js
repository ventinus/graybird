import React, {PureComponent} from 'react'
import ListingForm from './ListingForm'

export default class ListingCreate extends PureComponent {
  render() {
    return <ListingForm heading='New Listing' data={this.props.data} />
  }
}
