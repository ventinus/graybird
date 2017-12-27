
const nav = () => {
  const SIZES = {
    mobile: 'mobile',
    desktop: 'desktop'
  }

  const props = {
    isEnabled: false,
    responsiveEnabled: {
      [SIZES.mobile]: false,
      [SIZES.desktop]: false
    }
  }

  const onBPChange = event => {
    const {newBreakpoint, previousBreakpoint} = event
    console.log('change', newBreakpoint, previousBreakpoint)

    switch (newBreakpoint) {
      case 'sm':
      case 'md':
        setupSize(SIZES.mobile)
        break;
      case 'lg':
      case 'xl':
        setupSize(SIZES.desktop)
        break;
      default:
        console.log('case not set up for', newBreakpoint)
        break;
    }
  }

  const init = () => {
    enable()
  }

  const setupSize = size => {
    if (props.responsiveEnabled[size]) return

    const {mobile, desktop} = SIZES
    const otherSize = size === mobile ? desktop : mobile

    disableSize(otherSize)

    // do setup stuff
    console.log('setup', size)

    props.responsiveEnabled[size] = true
  }

  const disableSize = size => {
    if (!props.responsiveEnabled[size]) return

    // disable size stuff
    console.log('disable', size)

    props.responsiveEnabled[size] = false
  }

  const enable = () => {
    if (props.isEnabled) return

    window.APP.breakpoint.on('change', onBPChange)

    props.isEnabled = true
  }

  const disable = () => {
    if (!props.isEnabled) return

    window.APP.breakpoint.off('change', onBPChange)

    props.isEnabled = false
  }

  const destroy = () => {
    disable()

    for (let key in props) {
      props[key] = null
    }
  }

  return {
    init,
    enable,
    disable,
    destroy
  }
}

export default nav
