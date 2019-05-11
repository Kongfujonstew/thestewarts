const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
import js from './webpack/js';
import scss from './webpack/scss';
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    'public/js/public.js': path.resolve(__dirname, 'client/bundleentry/public.js'),
    'public/js/private.js': path.resolve(__dirname, 'client/bundleentry/private.js'),
    'public/js/admin.js': path.resolve(__dirname, 'client/bundleentry/admin.js'),
    'client/styles/css/common': path.resolve(__dirname, 'client/styles/scss/common.scss'),
    'client/styles/css/public': path.resolve(__dirname, 'client/styles/scss/public.scss'),
    'client/styles/css/private': path.resolve(__dirname, 'client/styles/scss/private.scss'),
    'client/styles/css/admin': path.resolve(__dirname, 'client/styles/scss/admin.scss')
  },
  module: {
    rules: [js, scss]
  },
  // TODO Optimize and add splitting
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  plugins: [ new MiniCssExtractPlugin() ],
  output: {
    path: path.resolve(__dirname),
    filename: '[name]'
  }
};

const serverConfig = {
  mode: 'production',
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
};


module.exports = [clientConfig, serverConfig];
