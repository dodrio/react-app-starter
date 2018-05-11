const path = require('path');
const childProcess = require('child_process');
const rewireEslint = require('react-app-rewire-eslint');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireBabelPolyfill = require('react-app-rewire-polyfills');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

const CriticalPlugin = require('html-critical-webpack-plugin');

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

  config.plugins = (config.plugins || []).concat(
    new CriticalPlugin({
      inline: true,
      base: path.resolve(__dirname, 'build'),
      src: 'index.html',
      dest: 'index.html',
      minify: true,
      dimensions: [
        // generic size of mobile
        {
          width: 375,
          height: 565,
        },
        // generic size of desktop
        {
          width: 1300,
          height: 900,
        },
      ],
      // ensure that bundled JS file is called
      penthouse: {
        blockJSRequests: false,
      },
    })
  );

  return config;
};
