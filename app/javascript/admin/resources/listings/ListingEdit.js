import React, {PureComponent} from 'react'
import ListingForm from './ListingForm'
import {Edit} from '../../components'

export default class ListingEdit extends PureComponent {
  render() {
    return (
      <Edit {...this.props}>
        <ListingForm />
      </Edit>
    )
  }
}
