import React, {PureComponent} from 'react'
import axios from 'axios'

import {spaceToPlus, hasPresence} from '../helpers'

export default class GoogleMap extends PureComponent {
  state = {error: ''}
  _refs = {}

  componentDidMount() {
    this._initMap()
  }

  render() {
    const {error} = this.state
    return (
      <div className="google-map" ref={node => this._refs.mapEl = node}>
        {hasPresence(error) &&
          <p className="type--a1">{error}</p>
        }
      </div>
    )
  }

  _initMap = () => {
    const {address, city, state} = this.props

    this._geocodeAddress(address, city, state)
      .then(this._parseResonse)
      .catch(e => {
        console.log(e)
        this._showError()
      })
  }

  _geocodeAddress = (address, city, state) => {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${spaceToPlus(address)},${spaceToPlus(city)},${state}&key=AIzaSyCgY3W6FrCFBLF57AAE_OKQKJ0u9idmxLM`)
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
    const map = new window.google.maps.Map(this._refs.mapEl, {
      zoom: 16,
      center: latLng
    })

    new google.maps.Marker({
      position: latLng,
      map: map
    })
  }

  _showError = () => {
    this.setState({error: 'There was a problem retrieving map data for that address'})
  }
}
