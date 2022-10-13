const { defineConfig } = require('@vue/cli-service')
module.exports =
  { publicPath: process.env.PUBLIC_PATH },

  defineConfig({
    transpileDependencies: true
  })