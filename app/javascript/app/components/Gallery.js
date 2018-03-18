import React, {PureComponent} from 'react'
import {throttle} from 'lodash'
import {hasPresence} from '../helpers'

export default class Gallery extends PureComponent {
  static defaultProps = {
    photos: [],
    autoplay: true
  }

  state = {
    galleryHeight: 0,
    activeIndex: 0,
    nextIndex: 0
  }

  _playTimeout = 0
  _refs = {}
  _cbs = {}

  componentDidMount() {
    this._cbs.onResize = throttle(this._setHeight, 100)
    window.addEventListener('resize', this._cbs.onResize)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.galleryHeight === 0) {
      this._setHeight()
      if (this.props.autoplay) this._play()
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this._playTimeout)
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

  _onClick = (dir) => {
    window.clearTimeout(this._playTimeout)
    this._moveAdjacent(dir)
    if (this.props.autoplay) this._play()
  }

  _onPrevClick = () => this._onClick(false)
  _onNextClick = () => this._onClick(true)


  _setHeight = () => {
    if (!this._refs.gallery) return
    this.setState({galleryHeight: this._refs.gallery.offsetWidth * .7})
  }

  _play = () => {
    this._playTimeout = setTimeout(() => {
      this._moveAdjacent(true)
      this._play()
    }, 5000)
  }
}
