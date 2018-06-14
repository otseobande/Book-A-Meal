const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'webpack-conditional-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'client/dist')]),
    new FaviconsWebpackPlugin(path.join(__dirname, 'client/assets/img/logo.svg')),
    new webpack.DefinePlugin({
      APP_URL: JSON.stringify('https://meal-booking.herokuapp.com')
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ],
  optimization: {
    minimize: true
  }
});
