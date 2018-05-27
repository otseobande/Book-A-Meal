const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  devtool: 'eval',
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'client/dist')]),
    new FaviconsWebpackPlugin(path.join(__dirname, 'client/src/assets/img/logo.svg')),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  optimization: {
    minimize: true
  },
});