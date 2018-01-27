const rewireEslint = require('react-app-rewire-eslint');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewirePolished = require('react-app-rewire-polished');
const rewireMobx = require('react-app-rewire-mobx');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {
  config = rewireEslint(config, env, options => (options.baseConfig = {}));
  config = rewireStyledComponents(config, env);
  config = rewirePolished(config, env);
  config = rewireMobx(config, env);
  config = rewireReactHotLoader(config, env);

  return config;
};
