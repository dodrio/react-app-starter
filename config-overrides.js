const childProcess = require('child_process');
const rewireEslint = require('react-app-rewire-eslint');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireBabelPolyfill = require('react-app-rewire-polyfills');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

// prepare meta information of current building
const version = require('./package.json').version;
const commit = childProcess
  .execSync('git rev-parse --short HEAD')
  .toString()
  .trim();
process.env.REACT_APP_BUILD_VERSION = version;
process.env.REACT_APP_BUILD_COMMIT = commit;
process.env.REACT_APP_BUILD_DATETIME = new Date().toISOString();

module.exports = function override(config, env) {
  config = rewireEslint(config, env, options => (options.baseConfig = {}));
  config = rewireStyledComponents(config, env);
  config = rewireBabelPolyfill(config, env);
  config = rewireReactHotLoader(config, env);

  return config;
};
