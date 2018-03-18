import React, {PureComponent} from 'react'
import axios from 'axios'

import {spaceToPlus, hasPresence} from '../helpers'

export default class GoogleMap extends PureComponent {
  state = {
    error: '',
    latLng: {}
  }
  _refs = {}

  componentDidMount() {
    this._initMap()
  }

  render() {
    const {error} = this.state
    return (
      <div className="google-map">
        <div className="google-map__main" ref={node => this._refs.mapEl = node}></div>
        {hasPresence(error) &&
          <p className="type--a1">{error}</p>
        }
        {this._overlay()}
      </div>
    )
  }

  _overlay = () => {
    if (!hasPresence(Object.keys(this.state.latLng))) return null

    const {address, city, state, zip} = this.props

    return (
      <div className="google-map__overlay">
        <p className="type--d1">{address}</p>
        <p className="type--b1">{address}, {city}, {state} {zip}</p>
        <a href={this._extUrl()} className="type--b1" target='_blank'>View larger map</a>
      </div>
    )
  }

  _initMap = () => {
    this._geocodeAddress()
      .then(this._parseResonse)
      .catch(e => {
        console.log(e)
        this._showError()
      })
  }

  _geocodeAddress = () => {
    const {address, city, state} = this.props
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${spaceToPlus(address)},${spaceToPlus(city)},${state}&key=AIzaSyCgY3W6FrCFBLF57AAE_OKQKJ0u9idmxLM`)
  }

  _extUrl = () => {
    const {lat, lng} = this.state.latLng
    const {address, city, state} = this.props
    return encodeURI(`https://maps.google.com/maps?ll=${lat},${lng}&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=${address} ${city}, ${state}`)
  }

  _parseResonse = ({data: {results, status}}) => {
    switch (status) {
      case "OK":
        this._setupMap(results[0].geometry.location)
        return
      case "ZERO_RESULTS":
      default:
        this._showError()
    }
  }

  _setupMap = latLng => {
    this.setState({latLng}, () => {
      const map = new window.google.maps.Map(this._refs.mapEl, {
        zoom: 16,
        center: this.state.latLng
      })

      new google.maps.Marker({
        position: this.state.latLng,
        map: map
      })
    })
  }

  _showError = () => {
    this.setState({error: 'There was a problem retrieving map data for that address'})
  }
}
