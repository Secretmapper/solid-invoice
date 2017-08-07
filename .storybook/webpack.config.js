const config = require('../config/webpack.config.dev.js')

module.exports = (storybookConfig) => Object.assign({}, storybookConfig, {
  resolve: Object.assign({}, storybookConfig.resolve, {
    modules: config.resolve.modules
  })
})
