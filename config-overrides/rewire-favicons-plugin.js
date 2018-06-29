const path = require('path')
const FaviconsPlugin = require('favicons-webpack-plugin')

function rewireFaviconnsPlugin(config, env) {
  config.plugins = (config.plugins || []).concat(
    new FaviconsPlugin({
      logo: path.resolve(__dirname, '../public/logo.png'),
      prefix: 'icons-[hash]/',
      inject: true,
      persistentCache: true,
      icons: {
        android: true,
        favicons: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    })
  )

  return config
}

module.exports = rewireFaviconnsPlugin
