import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import promiseFinally from 'promise.prototype.finally';
import 'sanitize.css';
import 'web-candy/css/native-font.css';
import 'web-candy/css/rem-font-size.css';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';

import './global.css';
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

const rootEl = document.getElementById('root');

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Webpack HMR
hotRender(AppWrapper, rootEl);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    hotRender(AppWrapper, rootEl);
  });
}

registerServiceWorker();
