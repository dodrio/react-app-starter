import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'web-candy/css/border-box.css'
import 'web-candy/css/native-font.css'
import { AppContainer } from 'react-hot-loader'
import './global-styles'
import App from './components/App'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
  console.info('[dev] why-did-you-update is enabled')
}

function hotRender(Component, rootEl) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  )
}

const rootEl = document.getElementById('root')

const AppWrapper = () => <App />

// Webpack HMR
hotRender(AppWrapper, rootEl)

if (module.hot) {
  console.info('[dev] react-hot-loader is enabled')
  module.hot.accept('./components/App', () => {
    hotRender(AppWrapper, rootEl)
  })
}
