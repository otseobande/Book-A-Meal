const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    './client/src/app/index.js',
  ],
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
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
        ]
      },
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
               outputPath: 'img/'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
               outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
};