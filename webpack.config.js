// https://github.com/diegohaz/arc/wiki/Webpack
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devServer = require('@webpack-blocks/dev-server')
// const splitVendor = require('webpack-blocks-split-vendor')
// const happypack = require('webpack-blocks-happypack')
const babel = require('@webpack-blocks/babel')
const { css, file, url } = require('@webpack-blocks/assets')

const {
  addPlugins, createConfig, entryPoint, env, setOutput,
  sourceMaps, defineConstants, match,
} = require('@webpack-blocks/webpack')
const webpack = require('webpack')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000
const sourceDir = process.env.SOURCE || 'src'
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')
const sourcePath = path.join(process.cwd(), sourceDir)
const outputPath = path.join(process.cwd(), 'dist')

const resolveModules = modules => () => (prevConfig = {}) => ({
  ...prevConfig,
  resolve: {
    modules: [].concat(modules, ['node_modules']),
  },
})

const config = createConfig([
  entryPoint({
    app: sourcePath,
  }),
  setOutput({
    filename: '[name].js',
    path: outputPath,
    publicPath,
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, ''),
  }),
  match(['*.js', '!*node_modules*'], [
    babel(/* options */),
  ]),
  addPlugins([
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(process.cwd(), 'public/index.html'),
    }),
  ]),
  // happypack([
  //   babel(),
  // ]),
  css(), // or use `match()` to apply it to other files than *.css

  // will copy font files to build directory and link to them
  match(['*.eot', '*.ttf', '*.woff', '*.woff2'], [
    file(),
  ]),

  // will load images up to 10KB as data URL
  match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'], [
    url({ limit: 10000 }),
  ]),
  resolveModules(sourceDir),

  env('development', [
    devServer({
      contentBase: 'public',
      stats: 'errors-only',
      historyApiFallback: { index: publicPath },
      headers: { 'Access-Control-Allow-Origin': '*' },
      host,
      port,
    }),
    sourceMaps(),
    // addPlugins([
    //   new webpack.NamedModulesPlugin(),
    // ]),
  ]),

  env('production', [
    // splitVendor(),
    // addPlugins([
    //   new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    // ]),
  ]),
])

module.exports = config
