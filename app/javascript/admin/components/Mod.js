import React, {PureComponent} from 'react'
import {Mutation} from 'react-apollo'
import {capitalize} from 'lodash'
import pluralize from 'pluralize'

class Mod extends PureComponent {
  render() {
    return (
      <Mutation mutation={this.props.mutation}>
        {(mod, response) => {
          if (response.data) console.log('data', response.data)
          return (
            React.cloneElement(this.props.children, {
              ...this.props,
              heading: `${this.props.modType} ${capitalize(pluralize.singular(this.props.resource))}`,
              onSubmit: this._onSubmit(mod),
              errors: response.errors
            })
          )
        }}
      </Mutation>
    )
  }

  _onSubmit = mod => (state, e) => {
    e.preventDefault()
    console.log(state)
    mod({variables: state})
  }
}

export const New = props => <Mod modType='New' {...props} />
export const Edit = props => <Mod modType='Edit' {...props} />
