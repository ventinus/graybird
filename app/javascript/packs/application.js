import {breakpoint} from 'savnac'
import {nav} from 'modules'

const mods = {
  nav
}

document.addEventListener('DOMContentLoaded', () => {
  window.APP = window.APP || {}
  window.APP.breakpoint = window.APP.breakpoint || breakpoint()

  for (let m in mods) {
    if (!mods[m].init) mods[m] = mods[m]()

    mods[m].init()
  }

  window.APP.breakpoint.enable()
})
