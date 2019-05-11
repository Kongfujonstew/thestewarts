const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export default {
  rules: [{
    test: /\.scss$/,
    use: [
        'style-loader', // creates style nodes from JS strings
        MiniCssExtractPlugin.loader,
        'css-loader', // translates CSS into CommonJS
        'sass-loader' // compiles Sass to CSS, using Node Sass by default
    ]
  }]
};
