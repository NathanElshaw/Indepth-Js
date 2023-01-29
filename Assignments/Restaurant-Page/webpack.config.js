const path = require("path");

module.exports = {
  mode: "production",
  entry: "./Src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "Dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jpg$/,
        type: "assest/resource",
      },
    ],
  },
};
