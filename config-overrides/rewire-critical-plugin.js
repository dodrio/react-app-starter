const path = require('path')
const CriticalPlugin = require('html-critical-webpack-plugin')

function rewireCriticalPlugin(config, env) {
  config.plugins = (config.plugins || []).concat(
    new CriticalPlugin({
      inline: true,
      base: path.resolve(__dirname, '../build'),
      src: 'index.html',
      dest: 'index.html',
      minify: true,
      extract: true,
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
  )

  return config
}

module.exports = rewireCriticalPlugin
