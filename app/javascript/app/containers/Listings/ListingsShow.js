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
    const {address, city, state, zip, community_description} = this.props.listing || {}

    return (
      <div className="body-padding max-width">
        <div id="home"></div>
        <Details listing={this.props.listing} />
        <div id="gallery">
          <Section>
            <Gallery photos={get(this.props.listing, 'photos')} />
          </Section>
        </div>
        <Section>
          <div id="community" className="max-width max-width--sm">
            {hasPresence(community_description) &&
              <div>
                <HeadingBlock hdg='Community'>{community_description}</HeadingBlock>
                <Hr modifiers={['short', 'black']} />
              </div>
            }
            {address && city && state &&
              <GoogleMap address={address} city={city} state={state} zip={zip} />
            }
          </div>
        </Section>
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
