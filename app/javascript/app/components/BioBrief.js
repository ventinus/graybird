import React, {PureComponent} from 'react'
import {illustrationElla} from '../assets'

export default class BioBrief extends PureComponent {
  static defaultProps = {
    img: illustrationElla,
    name: 'Ella Gray',
    role: 'Broker',
    phone: '503-222-6010',
    email: 'ella@livingroomre.com',
    style: {}
  }

  render() {
    const {img, name, role, phone, email, style} = this.props
    return (
      <div className="bio-brief" style={style}>
        <img src={img} alt={name} />
        <h4 className="bio-brief__name type--c2">{name}</h4>
        <p className="bio-brief__role type--b2 type--uppercase">{role}<br />{phone}</p>
        <a href={`mailto:${email}`} className="bio-brief__link type--b2 type--block">{email}</a>
      </div>
    )
  }
}
