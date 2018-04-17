import React, {PureComponent} from 'react'

import {PhotoInput} from '.'

export default class PhotoList extends PureComponent {

  render() {
    return (
      <div className="col-md-12">
        <div className="panel panel-default">
          <h4 className="panel-heading">Images</h4>
          <div className="panel-body">
            {this.props.photos.map((photo, i) =>
              <div className="col-md-6" key={i}>
                <PhotoInput {...photo} onCaptionChange={this._onCaptionChange(i)} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  _onCaptionChange = i => e => {
    const {photos} = this.props

    const updatedPhotos = [
      ...photos.slice(0, i),
      {
        ...photos[i],
        caption: e.target.value
      },
      ...photos.slice(i + 1, photos.length)
    ]
    this.props.onChange(updatedPhotos)
  }
}
