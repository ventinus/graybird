import React, {PureComponent} from 'react'

import {
  Facebook,
  LinkedIn,
  Pinterest,
  Instagram
} from './icons'

import {lrrLogoWhite} from '../assets'

const socialLinks = [
  ['facebook', Facebook, 'https://www.google.com'],
  ['linkedin', LinkedIn, 'https://www.google.com'],
  ['pinterest', Pinterest, 'https://www.google.com'],
  ['instagram', Instagram, 'https://www.google.com']
]

class Footer extends PureComponent {
  render() {
    return (
      <footer className='footer'>
        <div className="footer__body max-width">
          <a href="https://www.livingroomre.com">
            <img className='footer__logo' src={lrrLogoWhite} alt="living room realty" />
          </a>
          <ul className="footer__social">
            {socialLinks.map(([name, Icon, url], i) =>
              <li className="footer__social__item" key={i}>
                <Icon href={url} modifiers={['white', 'size-16']} />
              </li>
            )}
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
