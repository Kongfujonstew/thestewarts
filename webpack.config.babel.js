const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
import js from './webpack/js';
import scss from './webpack/scss';

// Outputs all the css, which is being watched for changes
const devConfig = {
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
  plugins: [ new MiniCssExtractPlugin() ],
  output: {
    path: path.resolve(__dirname),
    filename: '[name]'
  }
};

module.exports = devConfig;
