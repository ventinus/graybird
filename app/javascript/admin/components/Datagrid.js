import React, {PureComponent} from 'react'
import {Button} from 'mdbreact'

import {friendlyColumn, friendlyValue} from '../helpers'

//   breaks down the list into a table with the columns defined as the Field children
export default class Datagrid extends PureComponent {
  constructor(props) {
    super(props)

    this._columns = props.children.map(ch => ch.props.source)
  }

  render() {
    const {children, resource, data, selectedIds} = this.props

    return (
      <div className="datagrid">
        <table className="table">
          <thead>
            <tr>
              <th><input type="checkbox" onChange={this._onAllChange}/></th>
              {this._columns.map(name =>
                <th key={name} scope="col">{friendlyColumn(name)}</th>
              )}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) =>
              <tr key={i}>
                <td><input type="checkbox" checked={selectedIds.includes(d.id)} onChange={this._onItemChange(d.id)}/></td>
                {this._columns.map((key, k) =>
                  <td key={key} {...this._rowScope(k)}>{friendlyValue(d[key])}</td>
                )}
                <td><Button color="info" href={`/admin/${resource}/${d.id}/edit`}>Edit</Button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }

  _rowScope = i => i === 0 ? {scope: 'row'} : {}

  _onAllChange = e => this.props.onAllChange(e.target.checked)

  _onItemChange = id => e => {
    const {onItemSelect, onItemDeselect} = this.props
    const method = e.target.checked ? onItemSelect : onItemDeselect
    method(id)
  }
}
