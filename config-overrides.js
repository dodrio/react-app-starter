const rewireEslint = require('react-app-rewire-eslint');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireBabelPolyfill = require('react-app-rewire-polyfills');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const loadBuildInfo = require('./config-overrides.d/build-info');
const rewireCriticalPlugin = require('./config-overrides.d/rewire-critical-plugin');

loadBuildInfo();

module.exports = function override(config, env) {
  config = rewireEslint(config, env, options => (options.baseConfig = {}));
  config = rewireStyledComponents(config, env);
  config = rewireBabelPolyfill(config, env);
  config = rewireReactHotLoader(config, env);
  config = rewireCriticalPlugin(config, env);

  return config;
};
