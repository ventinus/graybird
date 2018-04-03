import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import {without, capitalize} from 'lodash'
import {Mutation} from 'react-apollo'
import {Button} from 'mdbreact'

import {hasPresence, destroyResourceItems} from '../helpers'
import * as queries from '../helpers/queries'

//   fetches data from resource, delegates items to Datagrid
export default class List extends PureComponent {
  state = {
    selectedIds: []
  }

  constructor(props) {
    super(props)
    this._getQuery = queries[`get${capitalize(props.resource)}`]()
  }

  render() {
    const {children, resource, data} = this.props
    const {selectedIds, justDeleted} = this.state
    const hasData = hasPresence(data)

    return (
      <div className="list">
        <div>
          <h1>All your {resource}</h1>
          <div className="list__header">
            <Button href={`/admin/${resource}/new`} color="primary">Add</Button>
            {hasPresence(selectedIds) &&
              <Mutation
                mutation={destroyResourceItems()}
                update={this._onDestroy}
              >
                {this._remove}
              </Mutation>
            }
            {hasPresence(selectedIds) && <span>{selectedIds.length} item{selectedIds.length > 1 ? 's' : ''} selected</span>}
            {hasPresence(justDeleted) && <span>Id{justDeleted.length > 1 ? "'s" : ''} {justDeleted.join(', ')} were successfully deleted.</span>}
          </div>
          {!hasData && <h1>I'm sorry, you dont have any {resource} saved.</h1>}
          {hasData &&
            React.cloneElement(children, {
              resource,
              data,
              selectedIds,
              onItemSelect: this._onItemSelect,
              onItemDeselect: this._onItemDeselect,
              onAllChange: this._onAllChange
            })
          }
        </div>
      </div>
    )
    // return (
    //   {children &&
    //     React.cloneElement(children, {
    //       resource,
    //       ids,
    //       data,
    //       currentSort: {
    //         field: query.sort,
    //         order: query.order,
    //       },
    //       basePath,
    //       isLoading,
    //       setSort: this.setSort,
    //     })
    //   }
    // )
  }

  _remove = destroy => (
    <Button
      color="danger"
      onClick={() => {
        destroy({variables: {resource: this.props.resource, ids: this.state.selectedIds}})
          .then(({data: {destroy_resource_items}}) => {
            this.setState({
              selectedIds: [],
              justDeleted: destroy_resource_items
            }, this._resetJustDeleted)
          })
      }}
    >Remove</Button>
  )

  _onDestroy = (cache, {data: {destroy_resource_items}}) => {
    const {resource} = this.props
    const data = cache.readQuery({query: this._getQuery})
    const deleted_ids = destroy_resource_items

    cache.writeQuery({
      query: this._getQuery,
      data: {
        [resource]: data[resource].filter(r => !deleted_ids.includes(r.id))
      }
    })
  }

  _resetJustDeleted = () => {
    setTimeout(() => {
      this.setState({justDeleted: []})
    }, 5000)
  }

  _onItemSelect = id => {
    this.setState({selectedIds: this.state.selectedIds.concat(id)})
  }

  _onItemDeselect = id => {
    this.setState({selectedIds: without(this.state.selectedIds, id)})
  }

  _onAllChange = selectAll => {
    const selectedIds = selectAll ? this.props.data.map(d => d.id) : []
    this.setState({selectedIds})
  }
}
