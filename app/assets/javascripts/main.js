// Import the controllers
import controllers from './controllers/controllers';

const app = () => {
  let props = {
    // currentPage is the string from the body data attr that corresponds with a controller
    currentPage: '',
    universalController: controllers.universal,
    // currentController is the resulting object of the page controller. stored to be able to disable
    // it as navigation to a new page occurs
    currentController: null
  };

  const runPageJs = () => {
    const { currentPage } = props;
    if (controllers[currentPage]) {
      props.currentController = controllers[currentPage];
      props.currentController.init();
    }

    return;
  }

  const runUniversalJs = () => {
    props.universalController.disable();
    props.universalController.init();

    return;
  }

  const init = () => {
    props.currentPage = document.body.dataset.jsRouter;

    if (props.currentController) {
      props.currentController.disable();
      props.currentController = null;
    }

    runPageJs();
    runUniversalJs();

    return;
  }

  return {
    init
  };
}

export default app;
