import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {Query} from 'react-apollo'
import {capitalize} from 'lodash'
import pluralize from 'pluralize'

import {hasPresence} from '../helpers'
import * as queries from '../helpers/queries'

//   is a Route for the resource with :id params for show
export default class Resource extends Component {
  constructor(props) {
    super(props)
    this._basePath = `/admin/${props.name}`
  }

  render() {
    const {list, edit, name} = this.props
    return (
      <div>
        {list && <Route exact path={this._basePath} render={this._injectProps(list)} />}
        {edit && <Route exact path={`${this._basePath}/:id/edit`} render={this._injectProps(edit)} />}
      </div>
    )
  }

  _injectProps = component => routeProps => {
    const {id} = routeProps.match.params
    const r = id ? pluralize.singular(this.props.name) : this.props.name

    return (
      <Query query={queries[`get${capitalize(r)}`]()} variables={routeProps.match.params}>
        {({ loading, error, data }) => {
          if (loading) return (<h1>LOADING!!</h1>)
          return React.createElement(component, {...routeProps, data: data[r], resource: this.props.name})
        }}
      </Query>
    )
  }
}
