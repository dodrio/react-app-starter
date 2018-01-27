import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import promiseFinally from 'promise.prototype.finally';
import 'sanitize.css';
import registerServiceWorker from './registerServiceWorker';

import counterStore from './stores/counter';

import './index.css';
import App from './components/App';

// polyfill promise finally
promiseFinally.shim();

// enable strict-mode of mobx
useStrict(true);

const stores = {
  counterStore,
};

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
