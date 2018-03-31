import React, {PureComponent} from 'react'
import {List, Datagrid, TextField} from '../../components'

export default class ClientList extends PureComponent {
  render() {
    return (
      <List {...this.props}>
        <Datagrid>
          <TextField source='id' />
          <TextField source='full_name' />
          <TextField source='phone_number' />
          <TextField source='email' />
          <TextField source='preferred_communication' />
          <TextField source='price_min' />
          <TextField source='price_max' />
        </Datagrid>
      </List>
    )
  }
}
