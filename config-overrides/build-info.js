/**
 * Provide 3 environment variables which are used in index.html
 */
const childProcess = require('child_process');

function loadMetaInfo() {
  const version = require('../package.json').version;
  const commit = childProcess
    .execSync('git rev-parse --short HEAD')
    .toString()
    .trim();

  process.env.REACT_APP_BUILD_VERSION = version;
  process.env.REACT_APP_BUILD_COMMIT = commit;
  process.env.REACT_APP_BUILD_DATETIME = new Date().toISOString();
}

module.exports = loadMetaInfo;
