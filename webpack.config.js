const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',

  entry: [
    './client/src/app/index.js',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
  ],
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'client/dist')]),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      title: 'Book A Meal',
      template: 'client/src/index.html',
      filename: 'index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /(\.css|.scss)$/,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" }, 
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
     }
    ]
  },
};