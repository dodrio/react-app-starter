const rewireEslint = require('react-app-rewire-eslint');
const rewireMobx = require('react-app-rewire-mobx');

module.exports = function override(config, env) {
  config = rewireEslint(config, env, options => (options.baseConfig = {}));
  config = rewireMobx(config, env);

  return config;
};
