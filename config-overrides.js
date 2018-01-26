const rewireEslint = require('react-app-rewire-eslint');

module.exports = function override(config, env) {
  config = rewireEslint(config, env, options => (options.baseConfig = {}));

  return config;
};
