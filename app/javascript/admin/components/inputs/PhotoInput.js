import React, {PureComponent} from 'react'

import {FileInput} from '.'
import Input from './Input'

export default class PhotoInput extends PureComponent {
  render() {
    const {position, url, caption, onCaptionChange} = this.props

    return (
      <div className="panel panel-default">
        <div className="panel-heading">Photo {position}</div>
        <div className="panel-body-natural">
          <img src={url} alt="" height="175px" />
          {/*<FileInput />*/}
          <Input type="text" attribute='caption' label='Caption' value={caption || ''} onChange={onCaptionChange} />
        </div>
      </div>
    )
  }
}
