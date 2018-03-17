import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import {graphql} from 'react-apollo'
import {kebabCase} from 'lodash'

import {listingPath} from '../../.config/routes'
import {getListings} from '../../helpers'

class ListingsIndex extends PureComponent {
  render() {
    return (
      <div>
        <h1>listings</h1>
        <ul>
          {this.props.addresses.map((address, i) =>
            <li key={i}><Link to={listingPath(kebabCase(address))}>{address}</Link></li>
          )}
        </ul>
      </div>
    )
  }
}

const mapResultsToProps = ({data}) => ({
  loading: data.loading,
  addresses: data.listings ? data.listings.map(l => l.address) : []
})

export default graphql(getListings('address'), {
  props: mapResultsToProps
})(ListingsIndex)
