
const nav = () => {
  const props = {
    isEnabled: false
  }

  const setupResponsive = () => {
    window.APP.breakpoint.on('smEnter', enable)
    window.APP.breakpoint.on('mdEnter', enable)
    window.APP.breakpoint.on('lgEnter', disable)
    window.APP.breakpoint.on('xlEnter', disable)
  }

  const init = () => {
    setupResponsive()
  }

  const enable = () => {
    if (props.isEnabled) return

    console.log('nav enable')

    props.isEnabled = true
  }

  const disable = () => {
    if (!props.isEnabled) return

    console.log('nav diable')

    props.isEnabled = false
  }

  const destroy = () => {
    disable()

    window.APP.breakpoint.off('smEnter', enable)
    window.APP.breakpoint.off('mdEnter', enable)
    window.APP.breakpoint.off('lgEnter', disable)
    window.APP.breakpoint.off('xlEnter', disable)
  }

  return {
    init,
    enable,
    disable,
    destroy
  }
}

export default nav
