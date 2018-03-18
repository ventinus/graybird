import React, { PureComponent } from 'react'
import {graphql} from 'react-apollo'
import {get} from 'lodash'

import {
  Gallery,
  Section
} from '../../components'
import Details from './Details'
import {getListing, dekebabCase} from '../../helpers'

class ListingsShow extends PureComponent {
  render() {
    // const {community_description} = this.props.listing || {}

    return (
      <div className="body-padding max-width">
        <div id="home"></div>
        <Details listing={this.props.listing} />
        <div id="gallery">
          <Section>
            <Gallery photos={get(this.props.listing, 'photos')} />
          </Section>
        </div>
        <div id="community"></div>
        <div id="contact"></div>
      </div>
    )
  }
}

const mapResultsToProps = ({data}) => ({
  loading: data.loading,
  listing: data.listing
})

const mapPropsToOptions = (props) => ({
  variables: {address: dekebabCase(props.match.params.address)}
})

export default graphql(getListing(), {
  props: mapResultsToProps,
  options: mapPropsToOptions
})(ListingsShow)
