import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'web-candy/css/border-box.css';
import 'web-candy/css/native-font.css';
import { AppContainer } from 'react-hot-loader';
import './global-styles';
import App from './components/App';

function hotRender(Component, rootEl) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );
}

const rootEl = document.getElementById('root');

const AppWrapper = () => <App />;

// Webpack HMR
hotRender(AppWrapper, rootEl);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    hotRender(AppWrapper, rootEl);
  });
}
