// https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroups
// https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      automaticNameDelimiter: '-',
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]core-js[\\/]/,
          name: 'corejs',
          chunks: 'all'
        },
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all'
        }
      },
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0
    }
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            collapseWhitespace: true,
            minimize: true,
            removeComments: false
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve('dist/client'),
    filename: '[name].[contenthash].bundle.js'
  },
  // prettier-ignore
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin()
  ]
}
