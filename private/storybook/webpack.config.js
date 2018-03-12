const baseConfig = require('../../webpack.config')

module.exports = storybookBaseConfig => ({
  ...storybookBaseConfig,
  entry: {
    ...storybookBaseConfig.entry,
    preview: ['babel-polyfill'].concat(storybookBaseConfig.entry.preview)
  },
  resolve: {
    ...storybookBaseConfig.resolve,
    modules: baseConfig.resolve.modules
  },
  module: {
    ...storybookBaseConfig.module,
    rules: storybookBaseConfig.module.rules.concat(baseConfig.module.rules.slice(1)),
  }
});
