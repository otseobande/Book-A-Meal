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
    new FaviconsWebpackPlugin(path.join(__dirname, 'client/assets/img/logo.svg')),
    new webpack.DefinePlugin({
      APP_URL: JSON.stringify('https://meal-booking.herokuapp.com')
    })
  ],
  optimization: {
    minimize: true
  }
});
