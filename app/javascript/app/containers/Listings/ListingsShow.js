import React, { PureComponent } from 'react'
import {graphql} from 'react-apollo'
import {get} from 'lodash'

import {
  Gallery,
  Section,
  HeadingBlock,
  Hr,
  GoogleMap
} from '../../components'
import Details from './Details'
import {getListing, dekebabCase, hasPresence} from '../../helpers'

class ListingsShow extends PureComponent {
  render() {
    const {address, city, state, community_description} = this.props.listing || {}

    return (
      <div className="body-padding max-width">
        <div id="home"></div>
        <Details listing={this.props.listing} />
        <div id="gallery">
          <Section>
            <Gallery photos={get(this.props.listing, 'photos')} />
          </Section>
        </div>
        {hasPresence(community_description) &&
          <div id="community">
            <Section>
              <div className="max-width max-width--sm">
                <HeadingBlock hdg='Community'>{community_description}</HeadingBlock>
                <Hr modifiers={['short', 'black']} />
                <GoogleMap address={address} city={city} state={state} />
              </div>
            </Section>
          </div>
        }
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
