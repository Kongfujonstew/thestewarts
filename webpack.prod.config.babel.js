const nodeExternals = require('webpack-node-externals');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
import js from './webpack/js';

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

const clientConfig = {
  mode: 'production',
  target: 'web',
  node: {
    __dirname: false
  },
  entry: {
    'public/js/public.js': path.resolve(__dirname, 'client/bundleentry/public.js')
    // 'public/js/private.js': path.resolve(__dirname, 'client/bundleentry/private.js'),
    // 'public/js/admin.js': path.resolve(__dirname, 'client/bundleentry/admin.js')
  },
  module: {
    rules: [js]
  },
  plugins: [ new CompressionPlugin() ],
  output: {
    path: path.resolve(__dirname),
    filename: '[name]'
  }
};

module.exports = [ serverConfig, clientConfig ];
