import React, {PureComponent} from 'react'

import {hasPresence} from '../helpers'

//   fetches data from resource, delegates items to Datagrid
export default class List extends PureComponent {
  render() {
    const {children, resource, data} = this.props
    const hasData = hasPresence(data)

    return (
      <div className="list">
        {!hasData && <h1>I'm sorry, you dont have any {resource} saved.</h1>}
        {hasData &&
          <div>
            <h1>All your {resource}</h1>
            {React.cloneElement(children, {resource, data})}
          </div>
        }
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
}
