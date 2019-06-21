const webpackMerge = require('webpack-merge')
const baseConfig = require('./config/webpack/base.config')

let env = process.env.NODE_ENV || 'development'
// we have no special webpack config for tests, so just use the development config
if (env === 'test') env = 'development'
const envConfig = require(`./config/webpack/${env}.config`)

module.exports = webpackMerge(baseConfig, envConfig)
