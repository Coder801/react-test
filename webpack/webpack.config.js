const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = env => {
  const ifProd = plugin => env.prod ? plugin : undefined;
  const removeEmpty = array => array.filter(p => !!p);

  return {
    entry: {
      app: path.join(__dirname, '../src/'),
      vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
      filename: '[name].[hash].js',
      path: path.join(__dirname, '../build/')
    },

    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true
          }
        }, {
          test: /\.css$/,
          use: [
            'style-loader', {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                config: {
                  path: '../postcss.config.js'
                }
              }
            },
            'postcss-loader'
          ]
        }
      ]
    },

    plugins: removeEmpty([
      new webpack.optimize.CommonsChunkPlugin({name: 'vendor', minChunks: Infinity, filename: '[name].[hash].js'}),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html'),
        filename: 'index.html',
        inject: 'body'
      }),
      new webpack.ProvidePlugin({
        'React': 'react',
        'ReactDOM': 'react-dom'
      }),
      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          'screw_ie8': true,
          'warnings': false,
          'unused': true,
          'dead_code': true
        },
        output: {
          comments: false
        },
        sourceMap: false
      })),
      new ExtractTextPlugin({filename: 'bundle.css', disable: false, allChunks: true})
    ])
  };
};
