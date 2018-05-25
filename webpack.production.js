const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',

  entry: [
    '.client/src/app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'app.js',
    publicPath: 'client/dist/assets/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
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
        use: [{
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ['react', 'env']
           }
       }]
     }
    ]
  },
};