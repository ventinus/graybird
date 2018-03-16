import React, {PureComponent} from 'react'
import {withRouter, Link} from 'react-router-dom'

import {paths} from '../.config/routes'
import {logo} from '../assets'

class Nav extends PureComponent {
  static defaultProps = {
    address: '7305 N Seward',
    rmls_number: '18419297',
    status: 'active'
  }

  render() {
    const {address, rmls_number, status} = this.props

    return (
      <div className='nav'>
        <div className="nav__logo">
          <Link className='nav__logo__link' to={paths.HOME}>
            <img
              src={logo}
              alt="Living Room Realty Logo"
            />
          </Link>
          {address.length > 0 &&
            <div className="nav__logo__info">
              <p className="type--c1 type--uppercase">{address}</p>
              <p className="type--a2 type--uppercase">MLS# {rmls_number} - {status}</p>
            </div>
          }
        </div>
        <button className="nav__burger">
          <span className="is-visually-hidden">Toggle menu visibility</span>
          <span className="nav__burger__lines"></span>
        </button>
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
    )
  }
}

export default Nav
