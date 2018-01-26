import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import promiseFinally from 'promise.prototype.finally';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// polyfill promise finally
promiseFinally.shim();

// enable strict-mode of mobx
useStrict(true);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
