// Import the controllers
import universal from './controllers/universal';

const app = () => {
  let props = {
    // currentPage is the string from the body data attr that corresponds with a controller
    currentPage: '',
    controllers: {
      universal
    },
    // currentController is the resulting object of the page controller. stored to be able to disable
    // it as navigation to a new page occurs
    currentController: null
  };

  const runPageJs = () => {
    const {controllers, currentPage} = props;
    if (controllers[currentPage]) {
      props.currentController = !controllers[currentPage].init ? controllers[currentPage]() : controllers[currentPage];
      props.currentController.init();
    }

    return;
  }

  const runUniversalJs = () => {
    if (!props.controllers.universal.init) {
      props.controllers.universal = props.controllers.universal();
    }

    props.controllers.universal.disable();
    props.controllers.universal.init();

    return;
  }

  const init = () => {
    props.currentPage = document.body.dataset.router;

    if (props.currentController) {
      props.currentController.disable();
      props.currentController = null;
    }

    runUniversalJs();
    runPageJs();

    return;
  }

  return {
    init
  };
}

export default app;
