const path = require("path");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = webpackMerge(baseConfig, {
  mode: "development",
  entry: ["react-hot-loader/patch", path.resolve("src/index.js")],
  devtool: "source-map",
  output: {
    path: path.resolve("dist"),
    filename: "[name].[hash:5].js"
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  devServer: {
    contentBase: path.resolve("dist"),
    port: 8080
  }
});
