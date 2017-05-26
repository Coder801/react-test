const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.jsx',
    'webpack-dev-server/client?http://localhost:9000',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    }),
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom'
    })
  ]
}
