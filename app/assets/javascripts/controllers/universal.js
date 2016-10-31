// =================================================================================================
//
// Make All Universal Function Calls
//
// ==================================================================================================

// import the needed modules

const universal = () => {
  let props = {
    isEnabled: false,
    modules: {}
  };

  const initModuleSet = (moduleGroup) => {
    for (let module in props[moduleGroup]) {
      // check if module is a function which means it hasn't been created
      // since modules return an object, they become objects with methods
      if (!props[moduleGroup][module].init) props[moduleGroup][module] = props[moduleGroup][module]();

      props[moduleGroup][module].init();
    }

    return;
  }

  const init = () => {
    enable();
    return;
  }

  const enable = () => {
    if (props.isEnabled) return;

    initModuleSet('modules');

    props.isEnabled = true;

    return;
  }

  const disable = () => {
    if (!props.isEnabled) return;

    for (let module in props.modules) {
      props.modules[module].disable();
    }

    props.isEnabled = false;

    return;
  }

  return {
    init,
    enable,
    disable
  };
}

export default universal;
