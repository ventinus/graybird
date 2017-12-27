import {breakpoint, controllerPack} from 'savnac'
import {nav} from 'modules'

const mods = {
  nav
}

const opts = {
  onStart() {
    window.APP.breakpoint = window.APP.breakpoint || breakpoint()
  },
  onComplete() {
    window.APP.breakpoint.enable()
  }
}

document.addEventListener('DOMContentLoaded', controllerPack(mods, opts))
