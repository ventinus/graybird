import React, {PureComponent} from 'react'
import {debounce} from 'lodash'
import {hasPresence} from '../helpers'

export default class Gallery extends PureComponent {
  static defaultProps = {
    photos: []
  }

  state = {
    galleryHeight: 0,
    activeIndex: 0,
    nextIndex: 0
  }

  _refs = {}
  _cbs = {}

  componentDidMount() {
    this._cbs.onResize = debounce(this._setHeight, 300)
    window.addEventListener('resize', this._cbs.onResize)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.galleryHeight === 0) this._setHeight()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._cbs.onResize)
  }

  render() {
    if (!hasPresence(this.props.photos)) return null

    const {galleryHeight, activeIndex, nextIndex} = this.state

    return (
      <div className='gallery' ref={node => this._refs.gallery = node} style={{height: galleryHeight}}>
        <ul className="gallery__list">
          {this.props.photos.map(({url, caption}, i) =>
            <li className="gallery__list__item" key={i} style={{opacity: activeIndex === i ? 1 : 0, zIndex: activeIndex === i ? 10 : 0}}>
              <img src={url} alt={caption} />
            </li>
          )}
        </ul>
        <div className="gallery__controls">
          <button className="gallery__controls__btn" onClick={this._onPrevClick}>{`<`}</button>
          <button className="gallery__controls__btn" onClick={this._onNextClick}>{`>`}</button>
        </div>
      </div>
    )
  }

  _moveAdjacent = dir => {
    const change = dir ? 1 : -1
    const photos_length = this.props.photos.length

    let nextIndex = this.state.activeIndex + change
    if (nextIndex < 0) {
      nextIndex = photos_length - 1
    } else if (nextIndex >= photos_length) {
      nextIndex = 0
    }

    this.setState({activeIndex: nextIndex})
  }

  _onPrevClick = () => this._moveAdjacent(false)
  _onNextClick = () => this._moveAdjacent(true)

  _setHeight = () => {
    if (!this._refs.gallery) return
    this.setState({galleryHeight: this._refs.gallery.offsetWidth * .66})
  }
}
