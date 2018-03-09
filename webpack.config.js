const path = require('path');
const {
  addPlugins,
  babel,
  createConfig,
  css,
  defineConstants,
  devServer,
  entryPoint,
  env,
  file,
  match,
  performance,
  setOutput,
  sourceMaps,
  uglify,
  url
} = require('webpack-blocks');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const sourceDir = process.env.SOURCE || 'src';
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/');
const sourcePath = path.join(process.cwd(), sourceDir);
const outputPath = path.join(process.cwd(), 'dist');

const resolveModules = modules => () => (prevConfig = {}) => ({
  ...prevConfig,
  resolve: {
    modules: [].concat(modules, ['node_modules'])
  }
});

const mode = givenMode => (context, { merge }) => merge({
  mode: givenMode
})

const optimization = () => (context, { merge }) => merge({
  optimization: {
    // Automatically split vendor and commons
    // https://twitter.com/wSokra/status/969633336732905474
    splitChunks: {
      chunks: 'all'
    },
    // Keep the runtime chunk seperated to enable long term caching
    // https://twitter.com/wSokra/status/969679223278505985
    runtimeChunk: true
  }
})

const config = createConfig([
  entryPoint({
    app: sourcePath
  }),
  setOutput({
    filename: '[name].js',
    path: outputPath,
    publicPath
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, '')
  }),
  match(['*.js', '!*node_modules*'], [babel(/* options */)]),
  addPlugins([
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(process.cwd(), 'public/index.html')
    })
  ]),
  css(), // or use `match()` to apply it to other files than *.css

  // will copy font files to build directory and link to them
  match(['*.eot', '*.ttf', '*.woff', '*.woff2'], [file()]),

  // will load images up to 10KB as data URL
  match(
    ['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'],
    [url({ limit: 10000 })]
  ),
  optimization(),
  resolveModules(sourceDir),

  env('development', [
    mode('development'),
    devServer({
      contentBase: 'public',
      stats: 'errors-only',
      historyApiFallback: { index: publicPath },
      headers: { 'Access-Control-Allow-Origin': '*' },
      host,
      port
    }),
    sourceMaps(),
    // addPlugins([
    //   new webpack.NamedModulesPlugin(),
    // ]),
    performance({
      // Increase performance budget thresholds for development mode
      maxAssetSize: 1500000,
      maxEntrypointSize: 1500000
    })
  ]),

  env('production', [
    mode('production'),
    uglify(),
    addPlugins([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      })
    ])
  ])
]);

module.exports = config;
