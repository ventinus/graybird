import React, {Component} from 'react'

import {Admin, Resource} from './components'

import {ListingList, ListingEdit, ListingCreate} from './resources/listings'
import {ClientList} from './resources/clients'

export default class App extends Component {
  render() {
    return (
      <Admin>
        <Resource name='listings' list={ListingList} edit={ListingEdit} create={ListingCreate} />
        <Resource name='clients' list={ClientList} />
      </Admin>
    )
  }
}

