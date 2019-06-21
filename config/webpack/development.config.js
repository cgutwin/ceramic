const path = require('path')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve('dist/dev/client'),
    compress: true,
    hot: true,
    open: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:4000'
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  output: {
    path: path.resolve('dist/dev/client'),
    filename: '[name].[hash].bundle.js'
  }
}
