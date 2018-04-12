import React, {PureComponent} from 'react'
import ListingForm from './ListingForm'
import {Edit} from '../../components'

import {updateListing} from '../../helpers'

export default class ListingEdit extends PureComponent {
  render() {
    return (
      <Edit {...this.props} mutation={updateListing()}>
        <ListingForm />
      </Edit>
    )
  }
}
