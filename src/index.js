import React from 'react';
import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import 'sanitize.css';
import 'web-candy/css/native-font.css';
import 'web-candy/css/rem-font-size.css';
import { AppContainer } from 'react-hot-loader';
import * as serviceWorker from './serviceWorker';

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

const AppWrapper = () => <App />;

// Webpack HMR
hotRender(AppWrapper, rootEl);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    hotRender(AppWrapper, rootEl);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
