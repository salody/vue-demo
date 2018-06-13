'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '" https://easy-mock.com/mock/5b19085c47adb139298b97d1/api"',
  BATTLE_API: '"http://localhost:3333"'
})
