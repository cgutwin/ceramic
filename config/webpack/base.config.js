const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: path.resolve('src/client', 'index.js')
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      template: path.resolve('src/client', 'index.html'),
    })
  ],
  stats: 'errors-warnings'
}
