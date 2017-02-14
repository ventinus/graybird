// ==================================================================================================
//
// Breakpoint Utitlity
//
// ==================================================================================================
import { universal } from '../controllers/controllers';
import { throttle }  from './savnac';

const breakpoint = () => {
  let props = {
    universalMods: window.Project.getUniversalModules(),
    pageMods: null,
    allModules: null,
    isEnabled: false,
    currentBreakpoint: window.Project.checkBreakpoint()
  };

  const createChildren = () => {
    props.pageMods = window.Project.getPageModules();
    props.allModules = Object.assign({}, props.pageMods, props.universalMods);

    return;
  }

  const runResponsive = () => {
    for (let module in props.allModules) {
      let mod = props.allModules[module];
      if (mod.responsiveCallbacks && mod.responsiveCallbacks[window.Project.currentBreakpoint]) {
        mod.responsiveCallbacks[window.Project.currentBreakpoint]();
      }
    }

    return;
  }

  // ------------------------------------------------
  // On resize, set new breakpoint
  // ------------------------------------------------
  const onResize = (e) => {
    const newBreakpoint = window.Project.checkBreakpoint();

    if (newBreakpoint !== window.Project.currentBreakpoint) {
      window.Project.currentBreakpoint = newBreakpoint;
      window.Project.isMobile = window.Project.checkMobileBp();
      runResponsive();
    }

    return;
  }

  const enable = () => {
    if (props.isEnabled) return;
    props.resizeHandler = throttle(onResize, 300);

    window.addEventListener('resize', props.resizeHandler);
    return;
  }

  const disable = () => {
    if (!props.isEnabled) return;

    window.removeEventListener('resize', props.resizeHandler);
    return;
  }

  const init = () => {
    createChildren();
    runResponsive();
    enable();
    return;
  }

  return {
    init,
    enable,
    disable
  };
}

export default breakpoint;
