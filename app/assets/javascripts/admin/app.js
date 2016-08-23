import universal from './controllers/universal';

const app = () => {
  let props = {
    currentPage: document.body.dataset.jsRouter,
    controllers: {
      universal
    },
    currentController: null
  };

  const runPageJs = function() {
    const {controllers, currentPage} = props;
    if (controllers[currentPage]) {
      props.currentController = !controllers[currentPage].init ? controllers[currentPage]() : controllers[currentPage];
      props.currentController.init();
    }

    return;
  }

  const runGlobalJs = function () {
    if (!props.controllers.global.init) {
      props.controllers.global = props.controllers.global();
    }

    props.controllers.global.init();

    return;
  }

  const init = function() {
    props.currentPage = document.body.dataset.jsRouter;
    
    if (props.currentController) {
      props.currentController.disable();
      props.currentController = null;
    }

    runGlobalJs();
    runPageJs();

    return;
  }

  return {
    init: init
  }
}

export default app;
