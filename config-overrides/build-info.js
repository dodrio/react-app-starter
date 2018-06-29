/**
 * Provide 3 environment variables which are used in index.html
 */
const childProcess = require('child_process')

function loadMetaInfo() {
  const version = require('../package.json').version

  let commit = 'no commit'
  try {
    commit = childProcess
      .execSync('git rev-parse --short HEAD')
      .toString()
      .trim()
  } catch (e) {
    console.error('[build info] failed to fetch commit number')
  }

  const UTCDateTime = new Date().toISOString()

  process.env.REACT_APP_BUILD_VERSION = version
  process.env.REACT_APP_BUILD_COMMIT = commit
  process.env.REACT_APP_BUILD_DATETIME = UTCDateTime
}

module.exports = loadMetaInfo
