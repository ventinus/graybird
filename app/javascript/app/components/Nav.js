import React, {PureComponent} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {compose, graphql} from 'react-apollo'

import {paths} from '../.config/routes'
import {logo} from '../assets'
import {getListing} from '../helpers'

class Nav extends PureComponent {
  static defaultProps = {
    address: '',
    rmls_number: '',
    status: ''
  }

  state = {isOpen: false}

  render() {
    const {address, rmls_number, status} = this.props

    return (
      <div className={`nav ${this.state.isOpen ? 'is-open' : ''}`}>
        <div className="nav__body">
          <div className="nav__inner">
            <div className="nav__inner__logo">
              <Link className='nav__inner__logo__link' to={paths.HOME}>
                <img
                  src={logo}
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
              <li className='nav__links__list__item'><Link className='type--b1 type--uppercase' to={{hash: '#home'}}>Home / Video</Link></li>
              <li className='nav__links__list__item'><Link className='type--b1 type--uppercase' to={{hash: '#details'}}>Details</Link></li>
              <li className='nav__links__list__item'><Link className='type--b1 type--uppercase' to={{hash: '#gallery'}}>Gallery</Link></li>
              <li className='nav__links__list__item'><Link className='type--b1 type--uppercase' to={{hash: '#community'}}>Community</Link></li>
              <li className='nav__links__list__item'><Link className='type--b1 type--uppercase' to={{hash: '#contact'}}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }

  _toggleMenu = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
}

const mapPropsToOptions = props => {
  const address = props.location.pathname.replace(/\/listings\//, '').replace(/-/g, ' ')

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
