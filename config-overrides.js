const rewireEslint = require('react-app-rewire-eslint');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewirePolished = require('react-app-rewire-polished');
const rewireMobx = require('react-app-rewire-mobx');

module.exports = function override(config, env) {
  config = rewireEslint(config, env, options => (options.baseConfig = {}));
  config = rewireStyledComponents(config, env);
  config = rewirePolished(config, env);
  config = rewireMobx(config, env);

  return config;
};
