import React, {PureComponent} from 'react'
import ListingForm from './ListingForm'

import {New} from '../../components'

import {createListing} from '../../helpers'

export default class ListingCreate extends PureComponent {
  render() {
    return (
      <New {...this.props} mutation={createListing()}>
        <ListingForm />
      </New>
    )
  }
}
