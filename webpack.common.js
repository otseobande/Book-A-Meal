const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './client/src/app.js',
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
          { loader: 'style-loader' }, 
          { 
            loader: 'css-loader', 
            // options: {
            //   sourceMap: true,
            //   modules: true,
            //   localIdentName: "[local]___[hash:base64:5]"
            // }
          }, 
          { loader: 'sass-loader'}
        ]
      },
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../dist/img/[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../dist/font/[name].[ext]',
            }
          }
        ]
      }
    ]
  },
};