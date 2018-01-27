import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import promiseFinally from 'promise.prototype.finally';
import 'sanitize.css';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';

import speedStore from './stores/speed';

import './index.css';
import App from './components/App';

function hotRender(Component, rootEl) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );
}

// polyfill promise finally
promiseFinally.shim();

// enable strict-mode of mobx
useStrict(true);

// render
const stores = {
  speedStore,
};

const rootEl = document.getElementById('root');

const AppWrapper = () => (
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

hotRender(AppWrapper, rootEl);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    hotRender(AppWrapper, rootEl);
  });
}

registerServiceWorker();
