const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
}

const serverConfig = {
  mode: mode,
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: {
    'index.prod.js': path.resolve('index.js')
  },
  module: {
    rules: [js]
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name]'
  }
}

const clientConfig = {
  mode: mode,
  target: 'web',
  entry: {
    'public.js': path.resolve(__dirname, 'client/pages/bundleentry/public.js'),
    'private.js': path.resolve(__dirname, 'client/pages/bundleentry/private.js'),
    'admin.js': path.resolve(__dirname, 'client/pages/bundleentry/admin.js')
  },
  module: {
    rules: [js]
  },
  // TODO Optimize and add splitting
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name]'
  }
}

module.exports = [serverConfig, clientConfig];
