const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve("src/index.js"),
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.styl$/i,
        use: ["style-loader", "css-loader", "stylus-loader"]
      },
      { test: /\.jsx?$/i, use: ["babel-loader"] },
      {
        test: /\.tsx?$/i,
        use: ["babel-loader", "ts-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [{ loader: "url-loader", options: { limit: 8192 } }]
      },
      { test: /\.svg$/i, use: ["html-loader"] }
    ]
  },
  resolve: {
    extensions: [".js", ".ts"],
    alias: {
      parchment: path.resolve("lib/parchment/src/parchment.ts")
    }
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve("publish/index.html")
    })
  ]
};
