import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import {Query} from 'react-apollo'
import {capitalize} from 'lodash'
import {Breadcrumb, BreadcrumbItem} from 'mdbreact'
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
    const {list, edit, create, name} = this.props
    return (
      <div className="container-fluid">
        {list && <Route exact path={this._basePath} render={this._injectProps(list)} />}
        {create && <Route exact path={`${this._basePath}/new`} render={this._injectProps(create)} />}
        {edit && <Route exact path={`${this._basePath}/:id/edit`} render={this._injectProps(edit)} />}
      </div>
    )
  }

  _injectProps = component => routeProps => {
    const {name} = this.props
    const {path, params: {id}} = routeProps.match
    const isNew = path.includes('new')
    const isNotIndex = !!id || isNew
    const res = isNotIndex ? pluralize.singular(name) : name

    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem><Link to="/admin">Dashboard</Link></BreadcrumbItem>
          {!isNotIndex && <BreadcrumbItem>{capitalize(name)}</BreadcrumbItem>}
          {isNotIndex &&
            <BreadcrumbItem><Link to={`/admin/${name}`}>{capitalize(name)}</Link></BreadcrumbItem>
          }
          {isNotIndex && <BreadcrumbItem active>{isNew ? 'New' : 'Edit'} {capitalize(res)}</BreadcrumbItem>}
        </Breadcrumb>
        <Query query={queries[`get${isNew ? 'New' : ''}${capitalize(res)}`]()} variables={routeProps.match.params}>
          {({ loading, error, data }) => {
            if (loading) return (<h1>LOADING!!</h1>)
            return React.createElement(component, {...routeProps, data: data[`${isNew ? 'new_' : ''}${res}`], resource: name})
          }}
        </Query>
      </div>
    )
  }
}
