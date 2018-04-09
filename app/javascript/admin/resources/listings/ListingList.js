import React, {PureComponent} from 'react'
import {List, Datagrid, TextField, ImageField} from '../../components'

export default class ListingList extends PureComponent {
  render() {
    return (
      <List {...this.props}>
        <Datagrid>
          <TextField source='id' />
          <TextField source='address' />
          <TextField source='rmls_number' />
          <ImageField source='primary_photo' />
          <TextField source='status' />
          <TextField source='price' />
          <TextField source='role' />
          <TextField source='neighborhood' />
        </Datagrid>
      </List>
    )
  }
}
