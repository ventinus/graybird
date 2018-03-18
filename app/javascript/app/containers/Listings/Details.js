import React, {PureComponent} from 'react'

import {
  Section,
  Columns,
  FactItem,
  HeadingBlock,
  Hr
} from '../../components'
import {toDollar, prettyNum, hasPresence} from '../../helpers'

export default class Details extends PureComponent {
  _residenceData = []
  _schoolData = []
  _utilitiesData = []
  _taxesData = []

  componentWillReceiveProps(nextProps) {
    if (!this.props.listing && nextProps.listing) {
      const {year_built, garage_size, garage_type, schools, water, sewer, heating, cooling, property_taxes} = nextProps.listing

      this._residenceData = this._setData([
        ['Year Built', year_built],
        ['Garage', this._garageFormat(garage_size, garage_type)]
      ])

      this._schoolData = this._setData(schools.map(({name, kind}) => [`${kind}`, name]))

      this._utilitiesData = this._setData([
        ['Water', water],
        ['Sewer', sewer],
        ['Heat', heating],
        ['Cooling', cooling]
      ])

      this._taxesData = this._setData([['Property Taxes', toDollar(property_taxes)]])
    }
  }

  render() {
    const {full_address, city_state_zip, status, price, bedrooms, bathrooms, property_taxes,
      sq_feet, description} = this.props.listing || {}

    return (
      <div id="details">
        <Section>
          <div className="max-width max-width--sm">
            <h1 className='type--center type--uppercase'>
              <span className="type--c2">{full_address}</span>
              <span className="type--a3"> | {city_state_zip} | {status}</span>
            </h1>
            <Hr />
            <Columns>
              <FactItem label='Listing Price' value={toDollar(price)} />
              <FactItem label='Beds' value={bedrooms} />
              <FactItem label='Baths' value={bathrooms} />
              {sq_feet && <FactItem label='SqFt' value={prettyNum(sq_feet)} />}
            </Columns>
          </div>
          <Columns style={{marginTop: 60}}>
            <div style={{flex: 1}}>
              {hasPresence(this._residenceData) &&
                <HeadingBlock hdg='Residence'>
                  <div>
                    {this._residenceData.map(this._renderText)}
                  </div>
                </HeadingBlock>
              }
              {hasPresence(this._schoolData) &&
                <HeadingBlock hdg='Schools'>
                  <div>
                    {this._schoolData.map(this._renderText)}
                  </div>
                </HeadingBlock>
              }
            </div>

            <div style={{flex: 1}}>
              {hasPresence(this._utilitiesData) &&
                <HeadingBlock hdg='Utilities'>
                  <div>
                    {this._utilitiesData.map(this._renderText)}
                  </div>
                </HeadingBlock>
              }
              {hasPresence(this._taxesData) &&
                <HeadingBlock hdg='Taxes'>
                  <div>
                    {this._taxesData.map(this._renderText)}
                    {property_taxes && <p>(Buyer to verify)</p>}
                  </div>
                </HeadingBlock>
              }
            </div>

            <div style={{flex: 2}}>
              <HeadingBlock hdg='Description'>
                {this._renderText(description)}
              </HeadingBlock>
            </div>
          </Columns>
        </Section>
      </div>
    )
  }

  _renderText = (text, i) => (<p className="type--e2" key={i}>{text}</p>)

  _setData = (arr) => arr.filter(set => set[1]).map(set => set.join(': '))

  _garageFormat = (size, type) => {
    if (!size && !type) return null

    const sizeVal = size ? `${size} car` : ''
    const typeVal = type ? (size ? ' - ' : '') + type : ''
    return sizeVal + typeVal
  }
}
