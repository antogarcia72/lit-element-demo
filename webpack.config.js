const path = require("path");

module.exports = {
  mode: "development",
  entry: "./dist/src/lit-element.demo.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "lit-element-demo.bundle.wp.js",
  },
};
