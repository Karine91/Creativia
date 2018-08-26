const path = require("path");
const webpack = require("webpack");

module.exports = env => {
  const isProduction = env === "production";
  return {
    entry: {
      main: "./src/scripts/main.js",
      vendor: "./src/scripts/vendor.js"
    },
    mode: "development",
    output: {
      path: path.join(__dirname, "app/assets/scripts"),
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node-modules/
        }
      ]
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  };
};
