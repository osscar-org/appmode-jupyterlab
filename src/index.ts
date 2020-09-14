import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the appmode-jupyterlab extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'appmode-jupyterlab',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension appmode-jupyterlab is activated!');
  }
};

export default extension;
