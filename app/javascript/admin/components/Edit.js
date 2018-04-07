import React, {PureComponent} from 'react'
import {Mutation} from 'react-apollo'
import {capitalize} from 'lodash'
import pluralize from 'pluralize'

import {updateListing} from '../helpers'

export default class Edit extends PureComponent {
  render() {
    return (
      <Mutation mutation={updateListing()}>
        {(update, response) => {
          if (response.data) console.log('data', response.data)
          return (
            React.cloneElement(this.props.children, {
              ...this.props,
              heading: `Edit ${capitalize(pluralize.singular(this.props.resource))}`,
              onSubmit: this._onSubmit(update),
              errors: response.errors
            })
          )
        }}
      </Mutation>
    )
  }

  _onSubmit = update => (state, e) => {
    e.preventDefault()
    console.log(state)
    update({variables: state})
  }
}
