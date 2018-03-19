import React, { PureComponent } from 'react'
import {graphql} from 'react-apollo'
import {get} from 'lodash'

import {
  Gallery,
  Section,
  HeadingBlock,
  Hr,
  GoogleMap,
  Form,
  BioBrief,
  Columns
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
        <Section id="gallery">
          <Gallery photos={get(this.props.listing, 'photos')} />
        </Section>
        <Section id="community" className="max-width max-width--sm">
          <div>
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
        <Section id="contact" className="max-width max-width--sm">
          <h2 className="type--c3 type--uppercase">Contact</h2>
          <Hr modifiers={['thin']}/>
          <Columns modifiers={['col-reverse']}>
            <Form modifiers={['listings-show']}/>
            <div>
              <p className="type--e2 type--lh-2">Please fill out the form or email directly with any questions about this property!</p>
              <BioBrief style={{marginTop: 30}} />
            </div>
          </Columns>
        </Section>
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
