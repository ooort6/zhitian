const webpack = require("webpack");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 基本路径
  baseUrl: "./",
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    // 设置代理
    proxy: {
      "/api/*": {
        target: "http://localhost:3000",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.vue$/,
      use: [
        {
          loader: "iview-loader",
          options: {
            prefix: false
          }
        }
      ]
    });
  },
  productionSourceMap: false,
  lintOnSave: false,
  chainWebpack: config => {
    (config.entry.app = ["babel-polyfill", resolve("src/main.js")]),
      config.resolve.alias
        .set("@", resolve("src"))
        .set("_c", resolve("src/components"))
        .set("_assets", resolve("src/assets"));
  }
};
