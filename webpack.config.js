var path = require("path");

module.exports = {
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
  }
};
