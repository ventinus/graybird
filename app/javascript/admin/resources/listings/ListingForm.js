import React, {PureComponent} from 'react'
import {Button, Input as MdbInput} from 'mdbreact'

import {SelectInput, Input} from '../../components'
import {friendlyColumn, hasPresence} from '../../helpers'

export default class ListingForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = props.data
  }

  render() {
    const {listing_enums} = window.gon

    return (
      <form className="form" onSubmit={this._onSubmit}>
        <div className="col-md-12">
          <div className="panel panel-default">
            <h4 className="panel-title">Edit Listing</h4>
          </div>
          <div className="panel-body">
            <div className="col-sm-6 col-md-3">
              {/*<MdbInput label='RMLS Number' type="text" onChange={e => console.log(e)} />*/}
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
              <Input type="select" options={window.gon.neighborhoods} {...this._inputAttrs('neighborhood_id')} />
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
      </form>

            {/*<div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="username">Username</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">@</span>
                </div>
                <input type="text" class="form-control" id="username" placeholder="Username" required="">
                <div class="invalid-feedback" style="width: 100%;">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
            </div>

            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Country</label>
                <select class="custom-select d-block w-100" id="country" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select class="custom-select d-block w-100" id="state" required="">
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required="">
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr class="mb-4">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="same-address">
              <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="save-info">
              <label class="custom-control-label" for="save-info">Save this information for next time</label>
            </div>
            <hr class="mb-4">

            <h4 class="mb-3">Payment</h4>

            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
                <label class="custom-control-label" for="credit">Credit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">
                <label class="custom-control-label" for="debit">Debit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">
                <label class="custom-control-label" for="paypal">Paypal</label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>*/}

        {/*<p className="h5 text-center mb-4">Sign in</p>
        <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
        <Input label="Type your password" icon="lock" group type="password" validate/>
        <div className="text-center">
          <Button type="submit">Login</Button>
        </div>*/}
    )
  }

  _inputAttrs = attribute => ({
    attribute,
    label: friendlyColumn(attribute),
    onChange: (e) => this.setState({[attribute]: e.target.value}),
    value: hasPresence(this.state[attribute]) ? this.state[attribute] : undefined
  })

  _onSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }
}
