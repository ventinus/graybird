import React, {PureComponent} from 'react'
import {List, Datagrid, TextField} from '../../components'

export default class ListingList extends PureComponent {
  render() {
    return (
      <List {...this.props}>
        <Datagrid>
          <TextField source='id' />
          <TextField source='address' />
          <TextField source='rmls_number' />
          {/*<TextField source='Primary Photo' />*/}
          <TextField source='status' />
          <TextField source='price' />
          <TextField source='role' />
          {/*<TextField source='neighborhood' />*/}
        </Datagrid>
      </List>
    )
  }
}
