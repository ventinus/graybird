import React, {PureComponent} from 'react'

//   breaks down the list into a table with the columns defined as the Field children
export default class Datagrid extends PureComponent {
  constructor(props) {
    super(props)

    this._columns = props.children.map(ch => ch.props.source)
  }

  render() {
    const {children, resource, data} = this.props

    return (
      <div className="datagrid">
        <table>
          <thead>
            <tr>
              {this._columns.map(name =>
                <th key={name}>{name}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) =>
              <tr key={i}>
                {this._columns.map(key =>
                  <td key={key}>{d[key]}</td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
