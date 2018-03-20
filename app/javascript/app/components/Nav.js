import React, {PureComponent} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {compose, graphql} from 'react-apollo'

import {paths} from '../.config/routes'
import {lrrLogo} from '../assets'
import {getListing, dekebabCase} from '../helpers'

class Nav extends PureComponent {
  static defaultProps = {
    address: '',
    rmls_number: '',
    status: ''
  }

  _targets = {}
  _refs = {}

  state = {isOpen: false}

  render() {
    const {address, rmls_number, status} = this.props

    return (
      <div className={`nav ${this.state.isOpen ? 'is-open' : ''}`} ref={node => this._refs.nav = node}>
        <div className="nav__body max-width">
          <div className="nav__inner">
            <div className="nav__inner__logo">
              <Link className='nav__inner__logo__link' to={paths.HOME}>
                <img
                  src={lrrLogo}
                  alt="Living Room Realty Logo"
                />
              </Link>
              {address.length > 0 &&
                <div className="nav__inner__logo__info">
                  <p className="type--c1 type--uppercase">{address}</p>
                  <p className="type--a2 type--uppercase">MLS# {rmls_number} - {status}</p>
                </div>
              }
            </div>
            <button className="nav__inner__burger" onClick={this._toggleMenu}>
              <span className="is-visually-hidden">Toggle menu visibility</span>
              <span className="nav__inner__burger__lines"></span>
            </button>
          </div>
          <nav className='nav__links'>
            <ul className='nav__links__list'>
              {/*<li className='nav__links__list__item'><a className='type--b1 type--uppercase' href='#home' onClick={this._anchorLinkClick}>Home / Video</a></li>*/}
              <li className='nav__links__list__item'><Link className='type--b1 type--uppercase' to='#gallery' onClick={this._anchorLinkClick}>Gallery</Link></li>
              <li className='nav__links__list__item'><Link className='type--b1 type--uppercase' to='#details' onClick={this._anchorLinkClick}>Details</Link></li>
              <li className='nav__links__list__item'><Link className='type--b1 type--uppercase' to='#community' onClick={this._anchorLinkClick}>Community</Link></li>
              <li className='nav__links__list__item'><Link className='type--b1 type--uppercase' to='#contact' onClick={this._anchorLinkClick}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }

  _toggleMenu = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  _getTarget = hash => {
    this._targets[hash] = this._targets[hash] || document.querySelector(hash)
    return this._targets[hash]
  }

  _anchorLinkClick = e => {
    e.preventDefault()
    const {hash} = e.currentTarget
    this.props.history.replace(hash)
    const target = this._getTarget(hash)

    Velocity(target, 'scroll', {
      duration: 500,
      offset: -this._refs.nav.offsetHeight,
      easing: 'ease-out'
    })
  }
}

const mapPropsToOptions = props => {
  const address = dekebabCase(props.location.pathname.replace(/\/listings\//, ''))

  return {
    variables: { address }
  }
}

const mapResultsToProps = ({data}) => ({
  ...data.listing,
  loading: data.loading
})

export default compose(
  withRouter,
  graphql(getListing('address, rmls_number, status'), {
    props: mapResultsToProps,
    options: mapPropsToOptions,
    skip: ownProps => !ownProps.location.pathname.match(/\/listings\/./)
  })
)(Nav)
