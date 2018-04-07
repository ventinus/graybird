import React, {PureComponent} from 'react'
import {Button, Input as MdbInput} from 'mdbreact'

import {SelectInput, Input} from '../../components'
import {friendlyColumn, hasPresence} from '../../helpers'

// TODO: how to handle required fields
export default class ListingForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = props.data || {}
  }

  render() {
    const {listing_enums} = window.gon

    return (
      <form className="form" onSubmit={this.props.onSubmit.bind(null, this.state)}>
        <div className="col-md-12">
          <div className="panel panel-default">
            <h4 className="panel-heading">{this.props.heading}</h4>
            <div className="panel-body">
              <div className="col-sm-6 col-md-3">
                <Input type="select" options={listing_enums.role} {...this._inputAttrs('role')} />
                <Input type="text" {...this._inputAttrs('rmls_number')} />
                <Input type="select" options={listing_enums.property_type} {...this._inputAttrs('property_type')} />
                <Input type="select" options={listing_enums.status} {...this._inputAttrs('status')} />
                <Input type="number" {...this._inputAttrs('price')} />
                <Input type="number" {...this._inputAttrs('property_taxes')} />
              </div>
              <div className="col-sm-6 col-md-3">
                <Input type="text" {...this._inputAttrs('address')} />
                <Input type="text" {...this._inputAttrs('unit')} />
                <Input type="number" {...this._inputAttrs('zip')} />
                <Input type="text" {...this._inputAttrs('city')} />
                <Input type="text" {...this._inputAttrs('state')} />
                <Input type="select" options={window.gon.neighborhoods} {...this._inputAttrs('neighborhood')} />
              </div>
              <div className="col-sm-6 col-md-3">
                <Input type="number" {...this._inputAttrs('sq_feet')} />
                <Input type="number" {...this._inputAttrs('year_built')} />
                <Input type="number" {...this._inputAttrs('bedrooms')} />
                <Input type="number" {...this._inputAttrs('bathrooms')} />
                <Input type="number" {...this._inputAttrs('garage_size')} />
                <Input type="select" options={listing_enums.garage_type} {...this._inputAttrs('garage_type')} />
              </div>
              <div className="col-sm-6 col-md-3">
                <Input type="select" options={listing_enums.water} {...this._inputAttrs('water')} />
                <Input type="select" options={listing_enums.sewer} {...this._inputAttrs('sewer')} />
                <Input type="select" options={listing_enums.hot_water} {...this._inputAttrs('hot_water')} />
                <Input type="select" options={listing_enums.heating} {...this._inputAttrs('heating')} />
                <Input type="select" options={listing_enums.cooling} {...this._inputAttrs('cooling')} />
                <Input type="number" {...this._inputAttrs('hoa_dues')} />
                <Input type="select" options={listing_enums.hoa_frequency} {...this._inputAttrs('hoa_frequency')} />
              </div>
            </div>
            <div className="panel-body">
              <div className="col-md-6">
                <Input type="textarea" rows={8} {...this._inputAttrs('description')} />
              </div>
              <div className="col-md-6">
                <Input type="textarea" rows={8} {...this._inputAttrs('community_description')} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="form-actions">
                <Button type="submit">Update</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }

  _inputAttrs = attribute => ({
    attribute,
    label: friendlyColumn(attribute),
    onChange: (e) => this.setState({[attribute]: e.target.value}),
    value: hasPresence(this.state[attribute]) ? this.state[attribute] : undefined
  })
}
